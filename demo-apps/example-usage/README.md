# Gqlts Example Usage App

This app shows generated Gqlts clients in common React data-fetching patterns: built-in client, Apollo, SWR, React Query, and subscriptions.

## Generate clients

```sh
bun run gen
```

The examples generate clients from public demo schemas and local generated folders.

## Run

```sh
bun run dev
```

Open `http://localhost:3000`.

## Notes

- Keep package-manager examples in public docs neutral across npm, pnpm, Yarn, and Bun.
- Regenerate clients after generator or schema changes.
- This app is an example surface, not the full CI gate. Use [../../docs/testing.md](../../docs/testing.md) for required checks.
