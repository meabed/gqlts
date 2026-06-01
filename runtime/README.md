<div align='center'>
    <br/>
    <br/>
    <img src='https://gqlts.vercel.app/banner.jpg' width='420px'>
    <br/>
    <br/>
    <h3>Type safe Graphql query builder</h3>
    <h4>Write Graphql queries with type validation and auto-completion with batteries included</h4>
    <br/>
    <br/>
</div>

[![CI](https://github.com/meabed/gqlts/actions/workflows/ci.yml/badge.svg)](https://github.com/meabed/gqlts/actions/workflows/ci.yml)
[![RELEASE](https://github.com/meabed/gqlts/actions/workflows/release.yml/badge.svg)](https://github.com/meabed/gqlts/actions/workflows/release.yml)

### @gqlts/cli

[![Latest NPM version](https://img.shields.io/npm/v/@gqlts/cli/latest.svg?label=latest)](https://www.npmjs.com/package/@gqlts/cli)
[![Beta NPM version](https://img.shields.io/npm/v/@gqlts/cli/beta.svg?label=beta)](https://www.npmjs.com/package/@gqlts/cli)
[![Downloads](https://img.shields.io/npm/dm/@gqlts/cli.svg)](https://www.npmjs.com/package/@gqlts/cli)
[![UNPKG](https://img.shields.io/badge/UNPKG-CLI%20Files-179BD7.svg)](https://unpkg.com/browse/@gqlts/cli@latest/)

### @gqlts/runtime

[![Latest NPM version](https://img.shields.io/npm/v/@gqlts/runtime/latest.svg?label=latest)](https://www.npmjs.com/package/@gqlts/runtime)
[![Beta NPM version](https://img.shields.io/npm/v/@gqlts/runtime/beta.svg?label=beta)](https://www.npmjs.com/package/@gqlts/runtime)
[![Downloads](https://img.shields.io/npm/dm/@gqlts/runtime.svg)](https://www.npmjs.com/package/@gqlts/runtime)
[![UNPKG](https://img.shields.io/badge/UNPKG-RUNTIME%20Files-179BD7.svg)](https://unpkg.com/browse/@gqlts/runtime@latest/)

> This package is forked version from [genql](https://github.com/remorses/genql/)
>
> It has been updated, fixed few bugs, actively adding features and updated dependencies and codebase to the latest packages

Read the [quick start guide](https://gqlts.vercel.app/quick-start) to generate a client locally.

## Documentation

- [Docs site](https://gqlts.vercel.app): quick start, examples, feature coverage, and usage guides.
- [Development guide](https://github.com/meabed/gqlts/blob/master/DEVELOPMENT.md): local setup, release workflow, and contributor commands.
- [Architecture](https://github.com/meabed/gqlts/blob/master/docs/architecture.md): package map, generation flow, runtime flow, and release diagram.
- [Testing](https://github.com/meabed/gqlts/blob/master/docs/testing.md): test matrix, change checklist, and full demo procedure.
- [API flow](https://github.com/meabed/gqlts/blob/master/docs/api-flow.md): where API behavior coverage lives today.

## **Features**

- Type completion
- Type validation
- Easily fetch all fields in a type
- Support subscription ( ws, graphql-ws, observable, etc )
- Built in file upload support
- Graphql Client built in
- Works with any client
- Works in node and the browser
- Built in Axios Client, and exported to extend with interceptors.
- Client Operation support for Axios configuration, such as headers, timeout, cancelToken, abortSignal, etc.
- Support batching queries
- Consistent response format { data, errors, extensions }

> Find more server-client examples in the [examples repo](https://github.com/meabed/graphql-examples)
> You will find multiple examples with different tools of building schema, query, mutation, websocket subscriptions and more.

## Example usage

First generate your client executing

```sh
npm install -D @gqlts/cli # cli to generate the client code
npm install @gqlts/runtime graphql # runtime dependencies
npx gqlts --schema ./schema.graphql --output ./generated
```

Use the equivalent commands for your package manager: `pnpm dlx gqlts`, `yarn gqlts`, or `bunx gqlts` all work too.

Then you can use your client as follows

```js
import { createClient, everything } from './generated';
const client = createClient();

client
  .query({
    countries: {
      name: true,
      code: true,
      nestedField: {
        ...everything, // same as __scalar: true
      },
    },
  })
  .then(console.log);
```

The code above will fetch the graphql query below

```graphql
query {
  countries {
    name
    code
    nestedField {
      scalarField1
      scalarField2
    }
  }
}
```

## Packages

This repo contains two published packages:

- `@gqlts/cli`: reads a GraphQL schema and generates the typed client files.
- `@gqlts/runtime`: powers generated clients at runtime for queries, mutations, subscriptions, batching, uploads, and custom fetchers.

Generated clients normally contain:

- `schema.graphql`: schema snapshot used for generation.
- `schema.ts`: generated schema, request, response, and guard types.
- `index.js` / `index.esm.js`: generated CommonJS and ESM client entrypoints.
- `index.d.ts`: generated public TypeScript declarations.
- `types.cjs.js` / `types.esm.js`: compressed runtime type map.
- `guards.cjs.js` / `guards.esm.js`: generated runtime type guards.

## Development

Install from the repo root with Bun:

```sh
bun ci
```

Common commands:

```sh
bun run buildall
bun run test
bun run typecheck
bun run --cwd website build
./demo-apps/build-and-test.sh
```

Run `./demo-apps/build-and-test.sh` before pushing generator, runtime, upload, subscription, SDK, or Next.js changes. It runs the backend demo, SDK generation, standalone browser bundle, Next.js dev and production tests, and integration tests.

More details are in [DEVELOPMENT.md](https://github.com/meabed/gqlts/blob/master/DEVELOPMENT.md), [docs/architecture.md](https://github.com/meabed/gqlts/blob/master/docs/architecture.md), and [docs/testing.md](https://github.com/meabed/gqlts/blob/master/docs/testing.md).

## Releases

Gqlts uses `semantic-release` for coordinated releases of `@gqlts/runtime` and `@gqlts/cli`.

- `develop` and `beta` publish beta prereleases like `x.y.z-beta.n` to npm `beta`.
- `alpha` publishes alpha prereleases like `x.y.z-alpha.n` to npm `alpha`.
- `master` and `main` publish stable releases like `x.y.z` to npm `latest`.
- one semantic-release run computes the version for the whole repo.
- `release:stamp` writes that exact version into the root, runtime, and CLI manifests.
- `release:publish` publishes `@gqlts/runtime` first, then `@gqlts/cli`, both at the same version.

Useful commands:

```sh
bun run release:verify
bun run release:dry
bun run release:local 3.5.0-beta.1 --dry-run --tag beta
```

Normal flow:

1. Use conventional commits. `feat`, `fix`, `perf`, `refactor`, and `revert` create releases; `docs`, `test`, `ci`, `build`, `style`, and `chore` do not.
2. Merge to `develop` or `beta` to publish the next beta.
3. Merge to `alpha` to publish the next alpha.
4. Merge to `master` or `main` to publish the next stable release.

The release workflow validates first, then lets semantic-release stamp, build, tag, create the GitHub release, and publish both npm packages from the same computed version.

---

## License

This is licensed under an MIT License. [See details](LICENSE)
