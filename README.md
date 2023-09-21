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
[![Stable NPM version](https://img.shields.io/badge/NPM-v3.2.19-179BD7.svg)](https://www.npmjs.com/package/@gqlts/cli/v/3.2.19)
[![Develop NPM version](https://img.shields.io/npm/v/@gqlts/cli.svg)](https://www.npmjs.com/package/@gqlts/cli)
[![Downloads](https://img.shields.io/npm/dm/@gqlts/cli.svg)](https://www.npmjs.com/package/@gqlts/cli)
[![UNPKG](https://img.shields.io/badge/UNPKG-CLI%20Files-179BD7.svg)](https://unpkg.com/browse/@gqlts/cli@latest/)
### @gqlts/runtime
[![Stable NPM version](https://img.shields.io/badge/NPM-v3.2.19-179BD7.svg)](https://www.npmjs.com/package/@gqlts/runtime/v/3.2.19)
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

---

## License

This is licensed under an MIT License. [See details](LICENSE)
