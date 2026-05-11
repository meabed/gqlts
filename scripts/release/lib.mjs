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

  const branchName =
    process.env.GITHUB_REF_NAME ||
    process.env.CI_REF_NAME ||
    process.env.BRANCH ||
    '';

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

export function syncPackageVersionsFromNpmDistTag(distTag) {
  const packageInfos = packageDirs.map(getPackageInfo);
  const versionByPackageName = new Map(
    packageInfos.map((packageInfo) => [
      packageInfo.name,
      getPublishedDistTagVersion(packageInfo.name, distTag),
    ]),
  );
  const versions = new Set(versionByPackageName.values());

  if (versions.size !== 1) {
    throw new Error(
      `npm ${distTag} versions do not match for the fixed package group: ${Array.from(versionByPackageName)
        .map(([packageName, version]) => `${packageName}@${version}`)
        .join(', ')}`,
    );
  }

  const [sourceVersion] = versions;

  for (const packageInfo of packageInfos) {
    const packageJson = readJson(packageInfo.packageJsonPath);
    packageJson.version = sourceVersion;
    updateInternalDependencyVersions(packageJson, versionByPackageName);
    writeJson(packageInfo.packageJsonPath, packageJson);
  }

  console.log(`Synced fixed package group from npm ${distTag}: ${sourceVersion}`);

  return sourceVersion;
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
