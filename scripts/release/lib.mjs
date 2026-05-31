import { execFileSync, spawnSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));

export const repoRoot = path.resolve(scriptDir, '..', '..');
export const packageDirs = ['runtime', 'cli'];

export function run(command, args, options = {}) {
  execFileSync(command, args, {
    cwd: repoRoot,
    stdio: 'inherit',
    env: process.env,
    ...options,
  });
}

export function capture(command, args, options = {}) {
  return execFileSync(command, args, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: process.env,
    ...options,
  }).trim();
}

export function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

export function writeJson(filePath, value) {
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

export function readPreState() {
  const preStatePath = path.join(repoRoot, '.changeset', 'pre.json');

  if (!existsSync(preStatePath)) {
    return null;
  }

  return readJson(preStatePath);
}

export function syncPackageDocs() {
  const rootReadmePath = path.join(repoRoot, 'README.md');
  const licensePath = path.join(repoRoot, 'LICENSE');

  for (const packageDir of packageDirs) {
    const targetDir = path.join(repoRoot, packageDir);

    mkdirSync(targetDir, { recursive: true });
    copyFileSync(rootReadmePath, path.join(targetDir, 'README.md'));
    copyFileSync(licensePath, path.join(targetDir, 'LICENSE'));
  }
}

export function getPackageInfo(packageDir) {
  const packageJsonPath = path.join(repoRoot, packageDir, 'package.json');
  const packageJson = readJson(packageJsonPath);

  return {
    dir: path.join(repoRoot, packageDir),
    packageJsonPath,
    name: packageJson.name,
    version: packageJson.version,
  };
}

export function isTruthy(value) {
  return ['1', 'true', 'yes', 'on'].includes(String(value ?? '').toLowerCase());
}

export function logStep(message) {
  console.log(`\n==> ${message}`);
}

export function validateReleaseChannel(channel) {
  if (!channel || /\s/.test(channel)) {
    throw new Error(`Invalid release channel: ${channel}`);
  }

  return channel;
}

export function getReleaseChannel() {
  const explicitChannel = process.env.RELEASE_CHANNEL;

  if (explicitChannel) {
    return validateReleaseChannel(explicitChannel);
  }

  const branchName = process.env.GITHUB_REF_NAME || process.env.CI_REF_NAME || process.env.BRANCH || '';

  return branchName === 'develop' ? 'beta' : 'latest';
}

export function isVersionPublished(packageName, version) {
  const result = spawnSync('npm', ['view', `${packageName}@${version}`, 'version', '--json'], {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: process.env,
  });

  if (result.status !== 0) {
    return false;
  }

  const output = result.stdout.trim();

  if (!output) {
    return false;
  }

  try {
    const parsed = JSON.parse(output);

    return parsed === version || (Array.isArray(parsed) && parsed.includes(version));
  } catch {
    return output.replaceAll('"', '') === version;
  }
}

export function getPublishedDistTagVersion(packageName, distTag) {
  const result = spawnSync('npm', ['view', `${packageName}@${distTag}`, 'version', '--json'], {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
    env: process.env,
  });

  if (result.status !== 0) {
    const details = result.stderr.trim() || result.stdout.trim();
    throw new Error(`Failed to read npm ${distTag} version for ${packageName}${details ? `: ${details}` : ''}`);
  }

  const output = result.stdout.trim();

  if (!output) {
    throw new Error(`npm returned no ${distTag} version for ${packageName}`);
  }

  try {
    const parsed = JSON.parse(output);

    if (typeof parsed === 'string') {
      return parsed;
    }
  } catch {
    return output.replaceAll('"', '');
  }

  throw new Error(`Unexpected npm ${distTag} version response for ${packageName}: ${output}`);
}

function updateInternalDependencyVersions(packageJson, versionByPackageName) {
  const dependencySections = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];

  for (const dependencySection of dependencySections) {
    const dependencies = packageJson[dependencySection];

    if (!dependencies) {
      continue;
    }

    for (const [packageName, version] of versionByPackageName) {
      const currentRange = dependencies[packageName];

      if (!currentRange) {
        continue;
      }

      const prefix = currentRange.startsWith('^') || currentRange.startsWith('~') ? currentRange[0] : '';
      dependencies[packageName] = `${prefix}${version}`;
    }
  }
}

function assertSingleFixedPackageVersion(versionByPackageName, label) {
  const versions = new Set(versionByPackageName.values());

  if (versions.size !== 1) {
    throw new Error(
      `${label} versions do not match for the fixed package group: ${Array.from(versionByPackageName)
        .map(([packageName, version]) => `${packageName}@${version}`)
        .join(', ')}`,
    );
  }

  return versions.values().next().value;
}

export function getCurrentFixedPackageVersion() {
  const packageInfos = packageDirs.map(getPackageInfo);
  const versionByPackageName = new Map(packageInfos.map((packageInfo) => [packageInfo.name, packageInfo.version]));
  const version = assertSingleFixedPackageVersion(versionByPackageName, 'Current package');

  return { packageInfos, version, versionByPackageName };
}

export function getPublishedFixedPackageDistTagVersion(distTag) {
  const packageInfos = packageDirs.map(getPackageInfo);
  const versionByPackageName = new Map(
    packageInfos.map((packageInfo) => [packageInfo.name, getPublishedDistTagVersion(packageInfo.name, distTag)]),
  );
  const version = assertSingleFixedPackageVersion(versionByPackageName, `npm ${distTag}`);

  return { packageInfos, version, versionByPackageName };
}

export function syncPackageVersionsToFixedVersion(sourceVersion) {
  const packageInfos = packageDirs.map(getPackageInfo);
  const versionByPackageName = new Map(packageInfos.map((packageInfo) => [packageInfo.name, sourceVersion]));

  for (const packageInfo of packageInfos) {
    const packageJson = readJson(packageInfo.packageJsonPath);
    packageJson.version = sourceVersion;
    updateInternalDependencyVersions(packageJson, versionByPackageName);
    writeJson(packageInfo.packageJsonPath, packageJson);
  }
}

export function syncPackageVersionsFromNpmDistTag(distTag) {
  const { version: sourceVersion } = getPublishedFixedPackageDistTagVersion(distTag);

  syncPackageVersionsToFixedVersion(sourceVersion);

  console.log(`Synced fixed package group from npm ${distTag}: ${sourceVersion}`);

  return sourceVersion;
}

function parseSemver(version) {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z.-]+))?(?:\+[0-9A-Za-z.-]+)?$/);

  if (!match) {
    throw new Error(`Invalid semver version: ${version}`);
  }

  return {
    major: Number(match[1]),
    minor: Number(match[2]),
    patch: Number(match[3]),
    prerelease: match[4] ? match[4].split('.') : [],
  };
}

function compareNumbers(left, right) {
  return left === right ? 0 : left > right ? 1 : -1;
}

function comparePrereleaseIdentifier(left, right) {
  const leftNumber = /^\d+$/.test(left) ? Number(left) : null;
  const rightNumber = /^\d+$/.test(right) ? Number(right) : null;

  if (leftNumber !== null && rightNumber !== null) {
    return compareNumbers(leftNumber, rightNumber);
  }

  if (leftNumber !== null) {
    return -1;
  }

  if (rightNumber !== null) {
    return 1;
  }

  return left === right ? 0 : left > right ? 1 : -1;
}

export function compareSemverVersions(leftVersion, rightVersion) {
  const left = parseSemver(leftVersion);
  const right = parseSemver(rightVersion);

  for (const key of ['major', 'minor', 'patch']) {
    const result = compareNumbers(left[key], right[key]);

    if (result !== 0) {
      return result;
    }
  }

  if (left.prerelease.length === 0 && right.prerelease.length === 0) {
    return 0;
  }

  if (left.prerelease.length === 0) {
    return 1;
  }

  if (right.prerelease.length === 0) {
    return -1;
  }

  const maxLength = Math.max(left.prerelease.length, right.prerelease.length);

  for (let index = 0; index < maxLength; index++) {
    const leftIdentifier = left.prerelease[index];
    const rightIdentifier = right.prerelease[index];

    if (leftIdentifier === undefined) {
      return -1;
    }

    if (rightIdentifier === undefined) {
      return 1;
    }

    const result = comparePrereleaseIdentifier(leftIdentifier, rightIdentifier);

    if (result !== 0) {
      return result;
    }
  }

  return 0;
}

export function isPrereleaseForTag(version, tag) {
  const { prerelease } = parseSemver(version);

  return prerelease[0] === tag;
}

export function publishPackage(packageInfo, channel, options = {}) {
  const args = ['publish', '--access', 'public'];

  if (channel) {
    args.push('--tag', channel);
  }

  if (options.provenance) {
    args.push('--provenance');
  }

  run('npm', args, { cwd: packageInfo.dir });
}
