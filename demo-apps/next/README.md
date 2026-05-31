# Gqlts Next.js Demo

This app verifies that a generated Gqlts SDK works in Next.js pages, SSR, and API routes against the demo GraphQL backend.

## Run

From this directory:

```sh
bun run dev
```

The app expects the backend demo on `http://localhost:4000`.

```sh
bun run --cwd ../backend start
bun run dev
```

## Test

```sh
bun run build
bun run test
```

The root demo script runs this app in both dev mode and production mode:

```sh
./demo-apps/build-and-test.sh
```

## Coverage

- client-side generated SDK calls;
- server-side rendering with generated SDK calls;
- API route behavior that proxies through the generated SDK.

See [../../docs/testing.md](../../docs/testing.md) for the full test matrix.
