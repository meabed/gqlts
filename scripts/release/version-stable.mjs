import {
  logStep,
  readPreState,
  run,
  syncPackageDocs,
  syncPackageVersionsFromNpmDistTag,
} from './lib.mjs';

const preState = readPreState();

if (preState?.mode === 'pre') {
  logStep(`Exiting prerelease mode${preState.tag ? ` (${preState.tag})` : ''}`);
  run('yarn', ['changeset', 'pre', 'exit']);
} else if (preState?.mode && preState.mode !== 'exit') {
  throw new Error(`Unsupported pre.json mode "${preState.mode}"`);
}

logStep('Syncing package versions from npm latest');
syncPackageVersionsFromNpmDistTag('latest');

logStep('Syncing package README and LICENSE files');
syncPackageDocs();

logStep('Versioning packages for stable release');
run('yarn', ['changeset', 'version']);
