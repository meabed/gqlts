import { logStep, readPreState, run, syncPackageDocs } from './lib.mjs';

logStep('Syncing package README and LICENSE files');
syncPackageDocs();

const preState = readPreState();

if (preState?.mode === 'pre') {
  logStep(`Exiting prerelease mode${preState.tag ? ` (${preState.tag})` : ''}`);
  run('yarn', ['changeset', 'pre', 'exit']);
} else if (preState?.mode && preState.mode !== 'exit') {
  throw new Error(`Unsupported pre.json mode "${preState.mode}"`);
}

logStep('Versioning packages for stable release');
run('yarn', ['changeset', 'version']);
