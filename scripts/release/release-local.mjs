#!/usr/bin/env bun
/**
 * Local release helper: stamp one version into root, runtime, and cli; sync
 * package docs; build both packages; publish both packages to npm at the same
 * version.
 *
 * Usage:
 *   bun run release:local <semver> [--dry-run] [--tag <dist-tag>]
 *
 * Examples:
 *   bun run release:local 3.5.0 --dry-run
 *   bun run release:local 3.5.0
 *   bun run release:local 3.5.0-beta.1 --tag beta
 */

import { spawnSync } from 'node:child_process';
import process from 'node:process';

import {
  getReleaseChannel,
  logStep,
  repoRoot,
  run,
  stampPackageVersions,
  syncPackageDocs,
  validateVersion,
} from './lib.mjs';

function parseArgs(argv) {
  const args = argv.slice(2);
  let version;
  let dryRun = false;
  let distTag;

  for (let index = 0; index < args.length; index++) {
    const arg = args[index];

    if (arg === '--dry-run') {
      dryRun = true;
    } else if (arg === '--tag') {
      distTag = args[++index];
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
  console.error('Usage: bun run release:local <semver> [--dry-run] [--tag <dist-tag>]');
  console.error('');
  console.error('Examples:');
  console.error('  bun run release:local 3.5.0 --dry-run');
  console.error('  bun run release:local 3.5.0');
  console.error('  bun run release:local 3.5.0-beta.1 --tag beta');
}

let parsed;
try {
  parsed = parseArgs(process.argv);
} catch (error) {
  console.error(error.message);
  printUsage();
  process.exit(1);
}

const { dryRun, distTag } = parsed;
const version = validateVersion(parsed.version);
const channel = distTag || getReleaseChannel(version);

logStep(`Local release ${version} -> npm "${channel}"${dryRun ? ' (dry run)' : ''}`);

if (!dryRun) {
  const who = spawnSync('npm', ['whoami', '--registry', 'https://registry.npmjs.org'], {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
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

logStep('Stamping package manifests');
stampPackageVersions(version);

logStep('Syncing package README and LICENSE files');
syncPackageDocs();

logStep('Building packages');
run('bun', ['run', 'buildall']);

logStep(`Publishing packages with dist-tag "${channel}"${dryRun ? ' (dry run)' : ''}`);
const publishEnv = {
  ...process.env,
  RELEASE_CHANNEL: channel,
};

if (dryRun) {
  publishEnv.RELEASE_DRY_RUN = 'true';
}

const publish = spawnSync('bun', ['run', 'release:publish', version], {
  cwd: repoRoot,
  stdio: 'inherit',
  env: publishEnv,
});

if (publish.status !== 0) {
  console.error('Publish failed.');
  process.exit(publish.status ?? 1);
}

if (dryRun) {
  console.log(`\nDry-run complete for ${version}. Re-run without --dry-run to publish.`);
} else {
  console.log(`\nReleased ${version} for @gqlts/runtime and @gqlts/cli.`);
}
