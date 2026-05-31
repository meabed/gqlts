import {
  compareSemverVersions,
  getCurrentFixedPackageVersion,
  getPublishedFixedPackageDistTagVersion,
  isPrereleaseForTag,
  logStep,
  readPreState,
  run,
  syncPackageDocs,
  syncPackageVersionsFromNpmDistTag,
  syncPackageVersionsToFixedVersion,
} from './lib.mjs';

const preState = readPreState();

if (preState?.mode && !(preState.mode === 'pre' && preState.tag === 'beta')) {
  throw new Error(
    `Cannot enter beta prerelease mode from pre.json state "${preState.mode}". Finish or clear the existing prerelease state first.`,
  );
}

const sourceDistTag = preState?.mode === 'pre' ? 'beta' : 'latest';

if (preState?.mode === 'pre') {
  logStep(`Checking package versions against npm ${sourceDistTag}`);

  const { version: currentVersion } = getCurrentFixedPackageVersion();
  const { version: publishedVersion } = getPublishedFixedPackageDistTagVersion(sourceDistTag);

  if (isPrereleaseForTag(currentVersion, 'beta') && compareSemverVersions(currentVersion, publishedVersion) > 0) {
    console.log(`Keeping local beta package version ${currentVersion}; npm ${sourceDistTag} is ${publishedVersion}.`);
    syncPackageVersionsToFixedVersion(currentVersion);
  } else {
    logStep(`Syncing package versions from npm ${sourceDistTag}`);
    syncPackageVersionsFromNpmDistTag(sourceDistTag);
  }
} else {
  logStep(`Syncing package versions from npm ${sourceDistTag}`);
  syncPackageVersionsFromNpmDistTag(sourceDistTag);
}

logStep('Syncing package README and LICENSE files');
syncPackageDocs();

if (preState?.mode === 'pre' && preState.tag === 'beta') {
  logStep('Prerelease mode already enabled for beta');
} else {
  logStep('Entering beta prerelease mode');
  run('bun', ['run', 'changeset', 'pre', 'enter', 'beta']);
}

logStep('Versioning packages for beta');
run('bun', ['run', 'changeset', 'version']);
