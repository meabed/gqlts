import { execFileSync } from 'node:child_process';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));

export const repoRoot = path.resolve(scriptDir, '..', '..');
export const packageDirs = ['runtime', 'cli'];

export function run(command, args, options = {}) {
  execFileSync(command, args, {
    cwd: options.cwd ?? repoRoot,
    stdio: 'inherit',
    env: process.env,
    ...options,
  });
}

export function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

export function writeJson(filePath, value) {
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

export function logStep(message) {
  console.log(`\n==> ${message}`);
}

export function validateVersion(version) {
  if (!version || !/^\d+\.\d+\.\d+(-[\w.]+)?$/.test(version)) {
    throw new Error(`Invalid semver version: ${version ?? ''}`);
  }

  return version;
}

export function isTruthy(value) {
  return ['1', 'true', 'yes', 'on'].includes(String(value ?? '').toLowerCase());
}

export function getReleaseChannel(version = '') {
  const explicitChannel = process.env.NPM_DIST_TAG || process.env.RELEASE_CHANNEL;

  if (explicitChannel) {
    return explicitChannel;
  }

  const prereleaseMatch = version.match(/-([a-z0-9]+)/i);
  if (prereleaseMatch) {
    return prereleaseMatch[1];
  }

  const branchName = process.env.GITHUB_REF_NAME || process.env.CI_REF_NAME || process.env.BRANCH || '';
  return branchName === 'develop' ? 'beta' : 'latest';
}

export function getPackageInfo(packageDir) {
  const dir = path.join(repoRoot, packageDir);
  const packageJsonPath = path.join(dir, 'package.json');
  const packageJson = readJson(packageJsonPath);

  return {
    dir,
    packageJson,
    packageJsonPath,
    name: packageJson.name,
    version: packageJson.version,
  };
}

export function getPackageInfos() {
  return packageDirs.map(getPackageInfo);
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

export function stampPackageVersions(version) {
  validateVersion(version);

  const rootPackageJsonPath = path.join(repoRoot, 'package.json');
  const rootPackageJson = readJson(rootPackageJsonPath);
  rootPackageJson.version = version;
  writeJson(rootPackageJsonPath, rootPackageJson);
  console.log(`stamped ${rootPackageJson.name}@${version}`);

  const versionByPackageName = new Map(getPackageInfos().map((packageInfo) => [packageInfo.name, version]));

  for (const packageDir of packageDirs) {
    const { packageJson, packageJsonPath } = getPackageInfo(packageDir);
    packageJson.version = version;
    updateInternalDependencyVersions(packageJson, versionByPackageName);
    writeJson(packageJsonPath, packageJson);
    console.log(`stamped ${packageJson.name}@${version}`);
  }
}

export function getFixedPackageVersion(packageInfos = getPackageInfos()) {
  const versions = new Set(packageInfos.map((packageInfo) => packageInfo.version));

  if (versions.size !== 1) {
    throw new Error(
      `Refusing mismatched package versions: ${packageInfos
        .map((packageInfo) => `${packageInfo.name}@${packageInfo.version}`)
        .join(', ')}`,
    );
  }

  return versions.values().next().value;
}

export function publishPackage(packageInfo, channel, options = {}) {
  const args = ['publish', '--access', 'public'];

  if (channel) {
    args.push('--tag', channel);
  }

  if (options.dryRun) {
    args.push('--dry-run');
  }

  run('npm', args, { cwd: packageInfo.dir });
}
