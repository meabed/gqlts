# Development Guide

This is the contributor workflow for Gqlts. Keep architecture details in [docs/architecture.md](./docs/architecture.md), test selection in [docs/testing.md](./docs/testing.md), API-flow notes in [docs/api-flow.md](./docs/api-flow.md), and agent-only rules in [AGENTS.md](./AGENTS.md).

## Repository Map

- `cli`: generator package published as `@gqlts/cli`.
- `runtime`: runtime package published as `@gqlts/runtime`.
- `website`: Nextra documentation site.
- `demo-apps/backend`: GraphQL demo API used by SDK, upload, browser, and Next.js tests.
- `demo-apps/backend/sdk`: generated SDK package for the backend demo.
- `demo-apps/html`: standalone browser bundle test.
- `demo-apps/next`: Next.js SSR, CSR, and API route test app.
- `demo-apps/integration-tests`: generator and runtime integration tests.
- `demo-apps/try-clients`: generated-client examples for larger schemas and custom fetchers.
- `demo-apps/example-usage`: UI examples for SWR, React Query, Apollo, built-in client, and subscriptions.

## Setup

Use Bun from the repo root. `bun.lock` is the only committed package-manager lockfile.

```sh
bun ci
```

The repo expects Bun `>=1.3.14` and Node `24.x`.

## Common Commands

Root workspace:

```sh
bun run check
bun run buildall
bun run test
bun run typecheck
bun run lint
```

Focused packages:

```sh
bun run --cwd cli test
bun run --cwd runtime test
bun run --cwd demo-apps/integration-tests gen
bun run --cwd demo-apps/integration-tests test
bun run --cwd demo-apps/try-clients gen
bun run --cwd website build
```

Full demo validation for generator, runtime, SDK, upload, subscription, or Next.js impact:

```sh
./demo-apps/build-and-test.sh
```

## Change Routing

- CLI flags live in `cli/src/cli.ts`; thread public config through `cli/src/config.ts`, validation, and tasks.
- Schema loading lives in `cli/src/tasks/schemaTask.ts` and `cli/src/schema/fetchSchema.ts`.
- Generated response types live in `cli/src/render/responseTypes/**`.
- Request-object syntax spans `cli/src/render/requestTypes/**`, `runtime/src/client/generateGraphqlOperation.ts`, and `runtime/src/client/typeSelection.ts`.
- Generated client runtime entrypoints live in `cli/src/render/client/renderClient.ts`.
- Generated declaration types live in `cli/src/render/client/renderClientDefinition.ts`.
- Runtime query execution lives in `runtime/src/fetcher.ts`.
- Subscription behavior lives in `runtime/src/client/createClient.ts`.
- Upload behavior lives in `runtime/src/extract-files/extract-files.ts` and `runtime/src/fetcher.ts`.
- Compile-time selected response typing lives in `runtime/src/client/typeSelection.ts`.

## Generated Output

Generated clients are source artifacts. When a generator change intentionally changes output, regenerate and commit the affected checked-in demo artifacts, especially `index.d.ts` when declaration behavior changes.

Generated clients usually contain `schema.graphql`, `schema.ts`, `index.js`, optional `index.esm.js`, `index.d.ts`, `types.cjs.js`, optional `types.esm.js`, `guards.cjs.js`, optional `guards.esm.js`, and optional `standalone.js`.

`index.d.ts` is a package boundary. Public generated SDK types should be nameable through the generated SDK package itself, not through nested dependency paths such as `sdk/node_modules/@gqlts/runtime`.

Generated clients call `assertSameVersion`, so keep `@gqlts/cli` and `@gqlts/runtime` versions aligned. Do not edit package versions manually in feature PRs; release stamping handles that.

## Runtime Notes

Generated `createClient` injects query, mutation, and subscription roots into `@gqlts/runtime`. Query and mutation calls produce GraphQL operations with `generateGraphqlOperation` and execute through the default Axios fetcher unless a custom `fetcherMethod` is provided.

Headers may be an object or a function. Header functions are called per request, which keeps auth tokens request-scoped.

Batching is enabled with `batch: true` or a batch options object. Uploads use the GraphQL multipart request shape when files appear in variables. Subscriptions use `graphql-ws` and return `zen-observable-ts` observables; SSR paths should pass an explicit `webSocketImpl` only where subscription code actually runs.

## Verification

Use the smallest test set that covers the change, then run:

```sh
git diff --check
```

For docs-only changes, run:

```sh
bun run format:check
bun run --cwd website build
```

For code changes, prefer:

```sh
bun run check
```

Use [docs/testing.md](./docs/testing.md) for the full coverage map, change-to-test mapping, full demo procedure, and troubleshooting.

## Release Workflow

Gqlts uses `semantic-release` for coordinated releases of `@gqlts/runtime` and `@gqlts/cli`. One release run computes the next version from conventional commits, stamps the root, runtime, and CLI manifests, builds packages, and publishes both npm packages at the same version.

Useful commands:

```sh
bun run release:verify
bun run release:dry
bun run release:local 3.5.0-beta.1 --dry-run --tag beta
```

Branch behavior is defined in [.releaserc.json](./.releaserc.json):

- `master` and `main` publish stable releases to npm `latest`.
- `develop` publishes beta prereleases to npm `beta`.
- `beta` publishes prereleases to npm `beta`.
- `alpha` publishes prereleases to npm `alpha`.
- `next`, `next-major`, and maintenance branches follow semantic-release branch semantics.

Release rules:

- `feat` creates a minor release.
- `fix`, `perf`, `refactor`, and `revert` create patch releases.
- breaking commits or `BREAKING CHANGE` notes create major releases.
- `docs`, `test`, `ci`, `build`, `style`, and `chore` do not create releases.
- `NPM_TOKEN` is required for npm publish; the built-in `GITHUB_TOKEN` handles tags and GitHub releases.

## Troubleshooting

- `TS5011`: add an explicit `rootDir` to the package `tsconfig.json`.
- Missing Bun or Node globals: import test helpers from `bun:test`, add `"types": ["bun", "node"]`, and ensure `@types/bun` plus `@types/node` are installed.
- `TS2883` on exported generated clients: inspect generated `index.d.ts`; the SDK should expose local public names for runtime transport types.
- Next.js multiple-lockfile warnings: remove stray package-manager lockfiles under demo apps and keep only root `bun.lock`.
- Subscription failures in Node: verify that a WebSocket implementation is available or pass `webSocketImpl` explicitly.
