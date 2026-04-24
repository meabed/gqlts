# Changesets

This repo uses `@changesets/cli` for coordinated releases of `@gqlts/runtime` and `@gqlts/cli`.

The two published packages are listed in the `.changeset/config.json` `fixed` group. That is the Changesets feature that keeps both packages on the same version.

Release version scripts sync package manifests from npm before running `changeset version`. Stable releases use npm `latest`; beta releases use npm `latest` when entering prerelease mode and npm `beta` while continuing an existing beta train.

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
