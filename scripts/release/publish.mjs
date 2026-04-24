import process from 'node:process';

import {
  getPackageInfo,
  getReleaseChannel,
  isTruthy,
  isVersionPublished,
  logStep,
  packageDirs,
  publishPackage,
} from './lib.mjs';

const channel = getReleaseChannel();
const dryRun = isTruthy(process.env.RELEASE_DRY_RUN);
const npmToken = process.env.NODE_AUTH_TOKEN || process.env.NPM_TOKEN;

if (!dryRun && !npmToken) {
  throw new Error('NPM_TOKEN or NODE_AUTH_TOKEN is required to publish packages.');
}

if (npmToken) {
  process.env.NODE_AUTH_TOKEN = npmToken;
  process.env.NPM_TOKEN = npmToken;
}

logStep(`Preparing npm publish for channel "${channel}"${dryRun ? ' (dry run)' : ''}`);

const packageInfos = packageDirs.map(getPackageInfo);
const versions = new Set(packageInfos.map((packageInfo) => packageInfo.version));

if (versions.size !== 1) {
  throw new Error(
    `Refusing to publish mismatched fixed package versions: ${packageInfos
      .map((packageInfo) => `${packageInfo.name}@${packageInfo.version}`)
      .join(', ')}`,
  );
}

for (const packageInfo of packageInfos) {
  const published = isVersionPublished(packageInfo.name, packageInfo.version);

  if (published) {
    console.log(`${packageInfo.name}@${packageInfo.version} is already published.`);
  } else if (dryRun) {
    console.log(`[dry-run] Would publish ${packageInfo.name}@${packageInfo.version} to ${channel}.`);
  } else {
    publishPackage(packageInfo, channel);
  }
}
