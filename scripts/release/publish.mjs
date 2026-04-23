import process from 'node:process';

import {
  addDistTag,
  getPackageInfo,
  getReleaseChannel,
  isTruthy,
  isVersionPublished,
  logStep,
  packageDirs,
  publishPackage,
  removeDistTag,
} from './lib.mjs';

const channel = getReleaseChannel();
const dryRun = isTruthy(process.env.RELEASE_DRY_RUN);
const repairTags = isTruthy(process.env.RELEASE_TAG_REPAIR);
const cleanupLegacyTags = isTruthy(process.env.RELEASE_CLEANUP_LEGACY_TAGS);
const npmToken = process.env.NODE_AUTH_TOKEN || process.env.NPM_TOKEN;

if (!dryRun && !npmToken) {
  throw new Error('NPM_TOKEN or NODE_AUTH_TOKEN is required to publish packages or update npm dist-tags.');
}

if (npmToken) {
  process.env.NODE_AUTH_TOKEN = npmToken;
  process.env.NPM_TOKEN = npmToken;
}

logStep(`Preparing npm publish for channel "${channel}"${dryRun ? ' (dry run)' : ''}`);

for (const packageDir of packageDirs) {
  const packageInfo = getPackageInfo(packageDir);
  const published = isVersionPublished(packageInfo.name, packageInfo.version);

  if (published) {
    console.log(`${packageInfo.name}@${packageInfo.version} is already published.`);
  } else if (dryRun) {
    console.log(`[dry-run] Would publish ${packageInfo.name}@${packageInfo.version} to ${channel}.`);
  } else {
    publishPackage(packageInfo, channel);
  }

  if (!repairTags) {
    continue;
  }

  if (dryRun) {
    console.log(`[dry-run] Would ensure dist-tag "${channel}" points to ${packageInfo.name}@${packageInfo.version}.`);
    continue;
  }

  addDistTag(packageInfo, channel);
}

if (cleanupLegacyTags) {
  logStep('Cleaning up legacy dist-tags');

  for (const packageDir of packageDirs) {
    const packageInfo = getPackageInfo(packageDir);

    if (dryRun) {
      console.log(`[dry-run] Would remove dist-tag "develop" from ${packageInfo.name}.`);
      continue;
    }

    removeDistTag(packageInfo, 'develop');
  }
}
