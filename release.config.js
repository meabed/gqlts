// https://semantic-release.gitbook.io/semantic-release/usage/configuration
const pkg = require("./package.json");
const branch = process.env.BRANCH || process.env.CI_REF_NAME_SLUG || "";
const isMaster = branch === "master" || branch === "main";
// semantic-release configuration
module.exports = {
  branches: [
    {
      name: "master",
      prerelease: false,
    },
    { name: branch, prerelease: true },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "breaking", release: "major" },
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "revert", release: "patch" },
          { type: "docs", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "style", release: "patch" },
          { type: "test", release: "patch" },
          { type: "chore", release: "patch" },
          { type: "ci", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "build", release: "patch" },
        ],
      },
    ],
    ["@semantic-release/changelog"],
    ["@semantic-release/release-notes-generator"],
    ["semantic-release-lerna", { generateNotes: true }],
    // https://github.com/semantic-release/npm
    ["@semantic-release/npm"],
    // https://github.com/semantic-release/github
    [
      "@semantic-release/github",
      {
        successComment: false,
        failComment: false,
      },
    ],
    // https://github.com/semantic-release/git
    isMaster && [
      "@semantic-release/git",
      {
        assets: [
          "package.json",
          "yarn.lock",
          "lerna.json",
          "cli/package.json",
          "cli/yarn.lock",
          "runtime/package.json",
          "runtime/yarn.lock",
          "website/package.json",
          "website/yarn.lock",
          "example-usage/package.json",
          "example-usage/yarn.lock",
          "try-clients/package.json",
          "try-clients/yarn.lock",
          "integration-tests/package.json",
          "integration-tests/yarn.lock",
          "npm-shrinkwrap.json",
          "CHANGELOG.md",
        ],
        message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
        GIT_AUTHOR_NAME: pkg.author.name,
        GIT_AUTHOR_EMAIL: pkg.author.email,
        GIT_COMMITTER_NAME: pkg.author.name,
        GIT_COMMITTER_EMAIL: pkg.author.email,
      },
    ],
  ].filter(Boolean),
};
