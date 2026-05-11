#!/usr/bin/env node
/**
 * Local release helper: stamp a manual version into cli/ and runtime/,
 * sync README + LICENSE, build, and publish both packages to npm at the
 * same version.
 *
 * For when CI is unavailable or you need a one-off (e.g. an alpha/beta
 * outside the normal Changesets flow). The Changesets-driven path that
 * release.yml uses is unchanged.
 *
 * Usage:
 *   yarn release:local <semver> [--dry-run] [--tag <dist-tag>]
 *
 * Examples:
 *   yarn release:local 3.5.0
 *   yarn release:local 3.5.0-beta.1 --tag beta
 *   yarn release:local 3.5.0 --dry-run
 *
 * dist-tag resolution:
 *   --tag X            -> X
 *   prerelease version -> the prerelease identifier (e.g. 3.5.0-beta.1 -> "beta")
 *   stable version     -> "latest"
 *
 * Prerequisites:
 *   - `npm whoami` must succeed (run `npm login` first).
 *   - You must have publish rights to @gqlts/cli and @gqlts/runtime.
 *
 * Provenance is intentionally NOT requested here. npm provenance requires
 * a GitHub Actions OIDC token and is enabled only for the CI publish.
 */

import { spawnSync } from 'node:child_process';
import path from 'node:path';
import process from 'node:process';

import {
  getPackageInfo,
  logStep,
  packageDirs,
  readJson,
  repoRoot,
  syncPackageDocs,
  writeJson,
} from './lib.mjs';

function parseArgs(argv) {
  const args = argv.slice(2);
  let version;
  let dryRun = false;
  let distTag;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg === '--dry-run') {
      dryRun = true;
    } else if (arg === '--tag') {
      distTag = args[++i];
      if (!distTag) {
        throw new Error('--tag requires a value');
      }
    } else if (arg === '-h' || arg === '--help') {
      printUsage();
      process.exit(0);
    } else if (arg.startsWith('--')) {
      throw new Error(`Unknown flag: ${arg}`);
    } else if (!version) {
      version = arg;
    } else {
      throw new Error(`Unexpected positional argument: ${arg}`);
    }
  }

  return { version, dryRun, distTag };
}

function printUsage() {
  console.error('Usage: yarn release:local <semver> [--dry-run] [--tag <dist-tag>]');
  console.error('');
  console.error('Examples:');
  console.error('  yarn release:local 3.5.0');
  console.error('  yarn release:local 3.5.0-beta.1 --tag beta');
  console.error('  yarn release:local 3.5.0 --dry-run');
}

let parsed;
try {
  parsed = parseArgs(process.argv);
} catch (error) {
  console.error(error.message);
  printUsage();
  process.exit(1);
}

const { version, dryRun, distTag } = parsed;

if (!version || !/^\d+\.\d+\.\d+(-[\w.]+)?$/.test(version)) {
  console.error(`release-local: invalid version "${version ?? ''}"`);
  printUsage();
  process.exit(1);
}

let channel = distTag;
if (!channel) {
  const prereleaseMatch = version.match(/-([a-z0-9]+)/i);
  channel = prereleaseMatch ? prereleaseMatch[1] : 'latest';
}

logStep(`Local release v${version} -> npm dist-tag "${channel}"${dryRun ? ' (dry run)' : ''}`);

if (!dryRun) {
  const who = spawnSync('npm', ['whoami', '--registry', 'https://registry.npmjs.org'], {
    stdio: ['ignore', 'pipe', 'pipe'],
    encoding: 'utf8',
  });

  if (who.status !== 0) {
    console.error('npm whoami failed - run `npm login` first.');
    if (who.stderr) {
      console.error(who.stderr.trim());
    }
    process.exit(1);
  }

  console.log(`npm user: ${who.stdout.trim()}`);
}

logStep('Stamping version into package manifests');
const versionByPackageName = new Map(packageDirs.map((dir) => [getPackageInfo(dir).name, version]));

function updateCrossDeps(packageJson) {
  const sections = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];

  for (const section of sections) {
    const deps = packageJson[section];
    if (!deps) continue;

    for (const [name, ver] of versionByPackageName) {
      const current = deps[name];
      if (!current) continue;

      const prefix = current.startsWith('^') || current.startsWith('~') ? current[0] : '';
      deps[name] = `${prefix}${ver}`;
    }
  }
}

for (const dir of packageDirs) {
  const { packageJsonPath } = getPackageInfo(dir);
  const packageJson = readJson(packageJsonPath);
  packageJson.version = version;
  updateCrossDeps(packageJson);
  writeJson(packageJsonPath, packageJson);
  console.log(`stamped ${packageJson.name}@${version}`);
}

logStep('Syncing package README and LICENSE files');
syncPackageDocs();

logStep('Building packages');
const build = spawnSync('yarn', ['buildall'], { cwd: repoRoot, stdio: 'inherit' });
if (build.status !== 0) {
  console.error('Build failed.');
  process.exit(build.status ?? 1);
}

logStep(`Publishing packages with dist-tag "${channel}"${dryRun ? ' (dry run)' : ''}`);
const publishEnv = { ...process.env, RELEASE_CHANNEL: channel, RELEASE_PROVENANCE: 'false' };
if (dryRun) {
  publishEnv.RELEASE_DRY_RUN = 'true';
}

const publish = spawnSync('node', [path.join('scripts', 'release', 'publish.mjs')], {
  cwd: repoRoot,
  stdio: 'inherit',
  env: publishEnv,
});

if (publish.status !== 0) {
  console.error('Publish failed.');
  process.exit(publish.status ?? 1);
}

console.log('');
if (dryRun) {
  console.log(`Dry-run complete for v${version}. Re-run without --dry-run to publish.`);
} else {
  console.log(`Released v${version} for all packages on dist-tag "${channel}".`);
  console.log('');
  console.log('Next steps (recommended):');
  console.log('  git add cli/package.json runtime/package.json');
  console.log(`  git commit -m "chore(release): v${version}"`);
  console.log(`  git tag v${version} && git push --follow-tags`);
}
