# Changesets

This repo uses Changesets for coordinated releases of `@gqlts/runtime` and `@gqlts/cli`.

## Add a changeset

When a PR changes published runtime or CLI behavior, add a changeset from the repo root:

```sh
yarn changeset
```

Docs-only and test-only changes can skip this if they do not change the published packages.

## Release branches

- `develop` publishes prereleases like `x.y.z-beta.n` to the `beta` dist-tag.
- `master` publishes stable releases like `x.y.z` to the `latest` dist-tag.

The GitHub release workflow versions packages directly on the branch after merge, commits the version bump with `[skip ci]`, and publishes to the branch's npm dist-tag.
