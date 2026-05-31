# Development Guide

This guide explains how the repo is organized, how the generated client works, and which build and test commands to run while developing Gqlts.

## Repository Layout

Gqlts is split into two published workspace packages and several demo apps that exercise the real generated output.

- `cli`: the generator package, published as `@gqlts/cli`.
- `runtime`: the runtime package used by generated clients, published as `@gqlts/runtime`.
- `website`: the Nextra documentation site.
- `demo-apps/backend`: GraphQL Yoga/Nexus server used by browser, Next.js, SDK, and upload tests.
- `demo-apps/backend/sdk`: generated SDK package for the backend demo.
- `demo-apps/html`: standalone browser bundle test.
- `demo-apps/next`: Next.js SSR/CSR/API route test app.
- `demo-apps/integration-tests`: core runtime/generator integration tests.
- `demo-apps/try-clients`: generated-client examples for larger schemas and custom fetchers.
- `demo-apps/example-usage`: UI examples for SWR, React Query, Apollo, built-in client, and subscriptions.

## Package Responsibilities

### `@gqlts/cli`

The CLI reads a GraphQL schema from either a local schema file or an introspection endpoint, then writes a generated client directory.

Main code paths:

- `cli/src/cli.ts`: command-line flags and config parsing.
- `cli/src/main.ts`: top-level generator orchestration.
- `cli/src/tasks/schemaTask.ts`: loads schema from `--schema` or `--endpoint`.
- `cli/src/tasks/clientTasks.ts`: writes generated files.
- `cli/src/render/**`: renderers for schema types, request types, response types, type guards, type maps, and client entrypoints.

### `@gqlts/runtime`

The runtime is imported by generated clients. It turns typed field-selection objects into GraphQL operations and executes them.

Main code paths:

- `runtime/src/client/createClient.ts`: builds query, mutation, and subscription methods.
- `runtime/src/client/generateGraphqlOperation.ts`: converts typed request objects into `{ query, variables }`.
- `runtime/src/client/typeSelection.ts`: maps request selections to TypeScript response types.
- `runtime/src/client/linkTypeMap.ts`: links compressed generated type maps at runtime.
- `runtime/src/fetcher.ts`: default Axios fetcher, upload support, custom fetcher support, and batching.
- `runtime/src/extract-files/extract-files.ts`: GraphQL multipart upload extraction.
- `runtime/src/index.ts`: public runtime exports.

## Generated Client Files

Generated clients are source artifacts and should stay consistent with the CLI version that produced them.

Common output files:

- `schema.graphql`: the schema snapshot used for generation.
- `schema.ts`: TypeScript schema, request, response, and type guard source.
- `index.js`: CommonJS client entrypoint.
- `index.esm.js`: ES module client entrypoint when ESM output is enabled.
- `index.d.ts`: public generated client types.
- `types.cjs.js` and `types.esm.js`: compressed runtime type map.
- `guards.cjs.js` and `guards.esm.js`: runtime type guards.
- `standalone.js`: optional UMD/browser bundle when standalone output is requested.

Generated clients export:

- `createClient`: creates the GraphQL client.
- `everything`: shortcut for selecting all scalar fields on a type.
- `generateQueryOp`, `generateMutationOp`, `generateSubscriptionOp`: produce `{ query, variables }` without executing.
- `QueryRequest`, `MutationRequest`, `SubscriptionRequest`: request object types.
- `QueryResult`, `MutationResult`, `SubscriptionResult`: result types derived from request objects.
- `is<TypeName>` guards for unions and interfaces.

## Code Flow

### Generation flow

The generator starts from either the CLI command or the programmatic `generate(config)` API.

1. `cli/src/cli.ts` parses flags such as `--schema`, `--endpoint`, `--output`, `--esm`, `--esm-and-cjs`, `--sort`, `-H`, and `-S`.
2. `cli/src/tasks/validateConfigs.ts` rejects missing or conflicting schema sources.
3. `cli/src/main.ts` creates a Listr pipeline.
4. `cli/src/tasks/schemaTask.ts` loads the schema:
   - endpoint mode runs an introspection query through `cli/src/schema/fetchSchema.ts`;
   - schema mode loads the local GraphQL SDL with `@graphql-tools/load`.
5. `cli/src/tasks/clientTasks.ts` creates the output directory and writes every generated file.
6. Each renderer receives a `RenderContext`, writes code blocks, and optionally asks the context to emit imports.

`RenderContext` is intentionally simple. It collects code blocks, tracks generated imports, rewrites relative imports when `config.output` is known, and returns the final code string. Most renderers should only add code to the context; they should not write files directly.

### Renderer map

- `cli/src/render/schema/renderSchema.ts`: prints the schema SDL into `schema.graphql`.
- `cli/src/render/responseTypes/**`: renders GraphQL output types into TypeScript response interfaces, unions, enums, aliases, and scalar maps.
- `cli/src/render/requestTypes/**`: renders the typed request-object API that users write in code.
- `cli/src/render/typeGuards/renderTypeGuards.ts`: renders runtime `is<TypeName>` guards for unions and interfaces.
- `cli/src/render/typeMap/**`: renders a compressed type map used by the runtime to validate paths and generate operations.
- `cli/src/render/client/renderClient.ts`: renders CommonJS and ESM runtime entrypoints.
- `cli/src/render/client/renderClientDefinition.ts`: renders `index.d.ts`, including the typed client interface and `QueryResult` / `MutationResult` / `SubscriptionResult` helpers.
- `cli/src/render/common/renderTyping.ts`: central GraphQL type to TypeScript type conversion, including nullability and list wrapping.

The type map renderer first builds a readable string-keyed map and then compresses type names into indexes with `replaceTypeNamesWithIndexes`. The runtime reverses that through `linkTypeMap`. If generated query paths are wrong, inspect both sides together: `renderTypeMap` in the CLI and `linkTypeMap` / `getFieldFromPath` in the runtime.

### Runtime query flow

Generated `index.js` or `index.esm.js` imports runtime helpers, links the generated type map, and exposes `createClient`.

At runtime:

1. Generated `createClient` injects `queryRoot`, `mutationRoot`, and `subscriptionRoot` into `@gqlts/runtime`'s `createClient`.
2. `runtime/src/client/createClient.ts` creates typed `query`, `mutation`, and `subscription` methods when the schema has those roots.
3. Query and mutation calls use `generateGraphqlOperation` to convert request objects into GraphQL text and variables.
4. `runtime/src/fetcher.ts` sends the operation:
   - default path uses Axios;
   - custom path calls `fetcherMethod`;
   - upload path calls `extractFiles` and sends multipart `FormData`;
   - batching path uses `QueryBatcher`.
5. Subscription calls create a `graphql-ws` client lazily and wrap it in a `zen-observable-ts` observable.

### Request object syntax

The runtime operation generator understands these request shapes:

- `{ field: true }` selects a field.
- `{ field: false }` or `{ field: 0 }` excludes a field.
- `{ field: { nested: true } }` selects nested object fields.
- `{ field: [{ arg: value }, { nested: true }] }` passes GraphQL arguments.
- `{ __scalar: true }` expands all scalar fields for the current type.
- `{ __name: 'OperationName' }` names the GraphQL operation.
- `{ on_TypeName: { field: true } }` renders a fragment for unions and interfaces.

Arguments are assigned generated variable names (`v1`, `v2`, and so on). The operation result is always `{ query, variables }`, which can either be executed by the built-in client or passed to another GraphQL client through `generateQueryOp`, `generateMutationOp`, or `generateSubscriptionOp`.

### Type selection flow

`runtime/src/client/typeSelection.ts` is the compile-time bridge between request objects and response data. `FieldsSelection<SRC, DST>` recursively maps the generated schema response type (`SRC`) and the user request object (`DST`) into the selected response shape.

Important behaviors:

- tuple requests unwrap `[args, fields]` and select from `fields`;
- falsy request values are removed;
- scalar source fields return the scalar type;
- arrays recurse into the array item type;
- `__scalar` picks scalar fields plus explicitly requested nested fields;
- union/interface selections preserve generated union typing and remove internal helper fields like `__isUnion`.

## Runtime Behavior

HTTP requests use the default Axios fetcher unless a custom `fetcherMethod` is provided. The fetcher returns GraphQL-shaped responses with `data`, `errors`, and optional `extensions`.

Headers can be an object or a function. Header functions are called at request time so auth tokens can be read lazily.

Batching is enabled with `batch: true` or a batch options object:

```ts
const client = createClient({
  url: 'https://api.example.com/graphql',
  batch: {
    batchInterval: 40,
    maxBatchSize: 10,
  },
});
```

File upload support follows the GraphQL multipart request shape. The runtime detects files in variables and sends `FormData` instead of JSON.

Subscriptions use `graphql-ws` and return `zen-observable-ts` observables. Browser, Node, and Bun clients can pass an explicit `webSocketImpl`. The runtime validates the shape before passing it through so SSR does not accidentally receive invalid browser-only values.

```ts
const client = createClient({
  url: 'http://localhost:4000/graphql',
  subscription: {
    url: 'ws://localhost:4000/graphql',
  },
  webSocketImpl: WebSocket,
});
```

In Next.js SSR, create subscription clients only in code paths that actually subscribe. Do not read `window.WebSocket` directly during module initialization. If you need an explicit implementation, pass the constructor from the runtime where it exists.

## Development Setup

Use Bun from the repo root.

```sh
bun ci
```

The repo uses Bun workspaces for the published packages, website, and demo apps. `bun.lock` is the only committed package-manager lockfile.

## Common Commands

Root workspace:

```sh
bun run buildall
bun run test
bun run typecheck
bun run lint
```

Runtime only:

```sh
bun run --cwd runtime build
bun run --cwd runtime test
```

CLI only:

```sh
bun run --cwd cli build
bun run --cwd cli test
```

Website docs:

```sh
bun run --cwd website build
bun run --cwd website dev
```

Demo backend and SDK:

```sh
bun run --cwd demo-apps/backend dev
bun run --cwd demo-apps/backend build-sdk
bun run --cwd demo-apps/backend typecheck
bun run --cwd demo-apps/backend build
bun run --cwd demo-apps/backend start
bun run --cwd demo-apps/backend test
```

Integration tests:

```sh
bun run --cwd demo-apps/integration-tests gen
bun run --cwd demo-apps/integration-tests test
```

Try-clients examples:

```sh
bun run --cwd demo-apps/try-clients build
bun run --cwd demo-apps/try-clients test
```

## Full Demo CI Procedure

Run this before pushing changes that affect generation, runtime behavior, SDK output, uploads, subscriptions, or Next.js usage:

```sh
./demo-apps/build-and-test.sh
```

That script runs the real consumer flow:

1. Installs workspace dependencies with Bun.
2. Generates backend schema artifacts through Bun's TypeScript runtime.
3. Builds the backend SDK.
4. Typechecks and builds the backend.
5. Runs backend tests.
6. Runs standalone HTML bundle tests against the backend.
7. Runs Next.js tests in dev mode.
8. Builds the Next.js app and runs tests against production `next start`.
9. Regenerates and runs integration tests.

## Release Workflow

Gqlts releases are managed with `semantic-release`. One release run computes the next version from conventional commits, stamps the root, runtime, and CLI manifests, builds the packages, and publishes both npm packages at the same version.

Useful commands:

```sh
bun run release:verify
bun run release:dry
bun run release:local 3.5.0-beta.1 --dry-run --tag beta
```

Branch behavior:

- `develop` publishes `x.y.z-beta.n` to npm `beta`.
- `beta` publishes prereleases to npm `beta`.
- `alpha` publishes prereleases to npm `alpha`.
- `master` and `main` publish stable `x.y.z` releases to npm `latest`.
- release CI is driven by branch merges and semantic-release tags, not committed version files.
- `NPM_TOKEN` is required for npm publish. The built-in `GITHUB_TOKEN` is used for tags and GitHub releases.

Contributor rules:

- write release-worthy changes with conventional commit types (`feat`, `fix`, `perf`, `refactor`, or `revert`);
- use non-release types for docs, tests, chores, CI, build-only, and formatting changes;
- do not edit package versions manually in feature PRs;
- keep `@gqlts/runtime` and `@gqlts/cli` version-locked. The stamp script also updates the CLI dependency on `@gqlts/runtime`.

## Test Coverage Map

Use this map to pick the right tests when changing code.

- `cli/src/helpers/parse.test.ts`: CLI flag parsing helpers.
- `cli/src/render/common/__tests__/**`: render context, comments, and basic typing renderer behavior.
- `cli/src/render/requestTypes/index.test.ts`: request-object type rendering.
- `cli/src/render/schema/renderSchema.test.ts`: printed schema output.
- `cli/src/render/typeMap/index.test.ts`: compressed type map output.
- `runtime/src/client/__tests__/typeSelection.test.ts`: compile-time response selection behavior.
- `runtime/src/client/__tests__/createClient.test.ts`: subscription client options, including explicit WebSocket implementation handling.
- `demo-apps/integration-tests/tests/simple.ts`: generated GraphQL operation strings and snapshots.
- `demo-apps/integration-tests/tests/execution.ts`: real query, mutation, batching, headers, and subscription execution against an in-process server.
- `demo-apps/backend/__tests__/0001-say-hello.test.ts`: backend SDK flow, headers, and upload behavior.
- `demo-apps/html/puppeteer-test.js`: standalone browser bundle behavior and file uploads.
- `demo-apps/next/ui-test/puppeteer-test.js`: Next.js CSR, SSR, and API route behavior.
- `demo-apps/try-clients/tests/**`: generated clients for larger schemas, custom fetchers, batching, and token-gated GitHub examples.

## Where To Change Things

- Add or change CLI flags in `cli/src/cli.ts`, then thread them through `Config` in `cli/src/config.ts`.
- Change schema loading in `cli/src/tasks/schemaTask.ts` or `cli/src/schema/fetchSchema.ts`.
- Change generated response TypeScript in `cli/src/render/responseTypes/**`.
- Change request-object syntax in both `cli/src/render/requestTypes/**` and `runtime/src/client/generateGraphqlOperation.ts`.
- Change generated client entrypoints in `cli/src/render/client/renderClient.ts`.
- Change generated declaration types in `cli/src/render/client/renderClientDefinition.ts`.
- Change runtime query execution in `runtime/src/fetcher.ts`.
- Change subscription behavior in `runtime/src/client/createClient.ts`.
- Change upload behavior in `runtime/src/extract-files/extract-files.ts` and `runtime/src/fetcher.ts`.
- Change compile-time selected response typing in `runtime/src/client/typeSelection.ts`.
- Change generated demo outputs by rerunning the relevant `gen` or `build-sdk` command and committing the resulting generated files.

## Change Checklist

Use the smallest checklist that covers your change:

- CLI renderer changes: run `bun run --cwd cli test`, `bun run buildall`, and at least one generation command such as `bun run --cwd demo-apps/integration-tests gen`.
- Runtime query/fetcher changes: run `bun run --cwd runtime test`, `bun run --cwd demo-apps/integration-tests test`, and `./demo-apps/build-and-test.sh`.
- Subscription changes: run `bun run --cwd runtime test`, `bun run --cwd demo-apps/integration-tests test`, and a Bun/Node smoke check when touching `webSocketImpl`.
- Upload changes: run `./demo-apps/build-and-test.sh` because the HTML bundle test covers browser uploads.
- Next.js or SSR changes: run `bun run --cwd demo-apps/next build` and `./demo-apps/build-and-test.sh`.
- Docs changes: run `bun run --cwd website build`.
- Dependency updates: run `bun run buildall`, `bun run test`, `bun run typecheck`, `./demo-apps/build-and-test.sh`, and package-specific builds for changed demo apps.

Always finish with:

```sh
git diff --check
```

## Generated Output Rules

When a generator change intentionally changes generated files, commit the regenerated outputs that live in demo apps. They are part of the test surface and make output changes reviewable.

When changing package versions, keep local workspace package references as `file:` dependencies in demo apps unless you are intentionally testing published packages.

Keep `@gqlts/cli` and `@gqlts/runtime` versions aligned. Generated clients call `assertSameVersion` so mismatches are visible to consumers.

## Troubleshooting

tsgo requires explicit `rootDir` when `outDir` is present and the source root can be inferred differently. If a package reports `TS5011`, add an explicit `rootDir` to the package `tsconfig.json`.

If a test package cannot see Bun or Node globals like `describe`, `it`, `fs`, `path`, `process`, or `__dirname`, import test helpers from `bun:test`, add `"types": ["bun", "node"]` to that package's `tsconfig.json`, and make sure `@types/bun` plus `@types/node` are installed in the package.

If Next.js warns about multiple lockfiles, verify there is no stray package-manager lockfile under a demo app. The repo should keep `bun.lock` at the root only.

If subscription tests fail in Node, verify that a WebSocket implementation is available. Node and Bun may expose global `WebSocket`; otherwise pass `webSocketImpl` explicitly.
