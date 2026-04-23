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
[![Stable NPM version](https://img.shields.io/badge/NPM-vvv3.4.0-beta.0-179BD7.svg)](https://www.npmjs.com/package/@gqlts/cli/v/vv3.4.0-beta.0)
[![Develop NPM version](https://img.shields.io/npm/v/@gqlts/cli.svg)](https://www.npmjs.com/package/@gqlts/cli)
[![Downloads](https://img.shields.io/npm/dm/@gqlts/cli.svg)](https://www.npmjs.com/package/@gqlts/cli)
[![UNPKG](https://img.shields.io/badge/UNPKG-CLI%20Files-179BD7.svg)](https://unpkg.com/browse/@gqlts/cli@latest/)
### @gqlts/runtime
[![Stable NPM version](https://img.shields.io/badge/NPM-vvv3.4.0-beta.0-179BD7.svg)](https://www.npmjs.com/package/@gqlts/runtime/v/vv3.4.0-beta.0)
[![Develop NPM version](https://img.shields.io/npm/v/@gqlts/runtime.svg)](https://www.npmjs.com/package/@gqlts/runtime)
[![Downloads](https://img.shields.io/npm/dm/@gqlts/runtime.svg)](https://www.npmjs.com/package/@gqlts/runtime)
[![UNPKG](https://img.shields.io/badge/UNPKG-RUNTIME%20Files-179BD7.svg)](https://unpkg.com/browse/@gqlts/runtime@latest/)

> This package is forked version from [genql](https://github.com/remorses/genql/)
>
> It has been updated, fixed few bugs, actively adding features and updated dependencies and codebase to the latest packages

Read the [quick start guide](https://gqlts.vercel.app/docs) to generate a client locally

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
npm i -D @gqlts/cli # cli to generate the client code
npm i @gqlts/runtime graphql # runtime dependencies
gqlts --schema ./schema.graphql --output ./generated
```

Then you can use your client as follows

```js
import { createClient, everything } from './generated'
const client = createClient()

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
    .then(console.log)
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

Install from the repo root with Yarn classic:

```sh
yarn install --frozen-lockfile
```

Common commands:

```sh
yarn buildall
yarn test
yarn tscall
yarn --cwd website build
./demo-apps/build-and-test.sh
```

Run `./demo-apps/build-and-test.sh` before pushing generator, runtime, upload, subscription, SDK, or Next.js changes. It runs the backend demo, SDK generation, standalone browser bundle, Next.js dev and production tests, and integration tests.

More details are in [DEVELOPMENT.md](./DEVELOPMENT.md).

---

## License

This is licensed under an MIT License. [See details](LICENSE)
