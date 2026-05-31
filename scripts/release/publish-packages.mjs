#!/usr/bin/env bun
import process from 'node:process';

import {
  getFixedPackageVersion,
  getPackageInfos,
  getReleaseChannel,
  isTruthy,
  logStep,
  publishPackage,
  validateVersion,
} from './lib.mjs';

const expectedVersion = process.argv[2] ? validateVersion(process.argv[2]) : null;
const dryRun = isTruthy(process.env.RELEASE_DRY_RUN) || process.argv.includes('--dry-run');
const npmToken = process.env.NODE_AUTH_TOKEN || process.env.NPM_TOKEN;

if (!dryRun && !npmToken) {
  throw new Error('NPM_TOKEN or NODE_AUTH_TOKEN is required to publish packages.');
}

if (npmToken) {
  process.env.NODE_AUTH_TOKEN = npmToken;
  process.env.NPM_TOKEN = npmToken;
}

const packageInfos = getPackageInfos();
const version = getFixedPackageVersion(packageInfos);

if (expectedVersion && version !== expectedVersion) {
  throw new Error(`Package manifests are stamped as ${version}, but publish expected ${expectedVersion}.`);
}

const channel = getReleaseChannel(version);

logStep(`Publishing @gqlts packages at ${version} to npm "${channel}"${dryRun ? ' (dry run)' : ''}`);

for (const packageInfo of packageInfos) {
  console.log(`\nPublishing ${packageInfo.name}@${version}`);
  publishPackage(packageInfo, channel, { dryRun });
}
