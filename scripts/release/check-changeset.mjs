import process from 'node:process';

import { capture, logStep } from './lib.mjs';

const releaseBranchPrefix = 'changeset-release/';
const baseRef = process.env.GITHUB_BASE_REF || process.env.BASE_REF || 'master';
const headRef = process.env.GITHUB_HEAD_REF || process.env.HEAD_REF || '';

function isReleaseRelevantFile(filePath) {
  if (!/^(cli|runtime)\//.test(filePath)) {
    return false;
  }

  if (/\.mdx?$/.test(filePath)) {
    return false;
  }

  if (/(^|\/)__tests__\//.test(filePath) || /(^|\/)__snapshots__\//.test(filePath)) {
    return false;
  }

  return !/\.(test|spec)\.[cm]?[jt]sx?$/.test(filePath);
}

function getChangedFiles() {
  const injectedFiles = process.env.CHANGED_FILES;

  if (injectedFiles) {
    return injectedFiles
      .split('\n')
      .map((file) => file.trim())
      .filter(Boolean);
  }

  const diff = capture('git', ['diff', '--name-only', '--diff-filter=ACMR', `origin/${baseRef}...HEAD`]);

  return diff
    .split('\n')
    .map((file) => file.trim())
    .filter(Boolean);
}

if (headRef.startsWith(releaseBranchPrefix)) {
  logStep(`Skipping changeset check for release branch ${headRef}`);
  process.exit(0);
}

const changedFiles = getChangedFiles();
const releaseRelevantFiles = changedFiles.filter(isReleaseRelevantFile);
const hasChangeset = changedFiles.some((file) => /^\.changeset\/(?!README\.md$).+\.md$/.test(file));

if (releaseRelevantFiles.length === 0) {
  logStep('No release-relevant cli/runtime changes detected');
  process.exit(0);
}

if (hasChangeset) {
  logStep('Changeset found for release-relevant package changes');
  process.exit(0);
}

console.error('A changeset is required for release-relevant changes in cli/ or runtime/.');
console.error('Run `yarn changeset` and commit the generated .changeset/*.md file.');
console.error('Docs-only and test-only changes are already excluded from this check.');
process.exit(1);
