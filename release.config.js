// https://semantic-release.gitbook.io/semantic-release/usage/configuration
const pkg = require('./package.json');
const branch = process.env.BRANCH || process.env.CI_REF_NAME || '';
const branchSlug = branch.replace(/\//g, '-');
const branchPrefix = branch.split('/')[0];
const isMaster = branch === 'master' || branch === 'main';
// semantic-release configuration
module.exports = {
  branches: [
    {
      name: 'master',
      prerelease: false,
    },
    {
      name: 'main',
      prerelease: false,
    },
    {
      name: 'develop',
      prerelease: 'beta',
      channel: 'beta',
    },
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'breaking', release: 'major' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'revert', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'test', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { type: 'ci', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'build', release: 'patch' },
        ],
      },
    ],
    [
      '@semantic-release/exec',
      {
        publishCmd: 'echo ${nextRelease.version} > next-version.txt',
      },
    ],
  ].filter(Boolean),
};
