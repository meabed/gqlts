# Agent Guide

This is the canonical repo guide for coding agents. Keep it compact. Put durable product, architecture, release, API-flow, and testing detail in linked docs instead of copying full specs here.

## Read First

- [README.md](./README.md): user-facing package overview, install commands, release summary.
- [DEVELOPMENT.md](./DEVELOPMENT.md): contributor workflow and change checklist.
- [docs/architecture.md](./docs/architecture.md): package map, generation flow, runtime flow, and release flow.
- [docs/testing.md](./docs/testing.md): test matrix and change-to-test mapping.
- [docs/api-flow.md](./docs/api-flow.md): current API-flow status and where integration coverage lives.
- [website/content](./website/content): documentation site content. Update it when features, flags, examples, or workflows change.

## Core Rules

- Prefer the current contract. Do not add legacy shims, compatibility aliases, or pass-through wrappers unless a linked doc explicitly requires them.
- Keep behavior stable unless the task asks for a behavior change. For generated-output changes, regenerate and commit the affected demo artifacts.
- Use existing SDK, schema, inferred, and exported types before creating new aliases. Do not duplicate object shapes.
- Keep code paths idempotent where repeated execution is possible, especially generation, release, filesystem, and test setup flows.
- Use early returns, `?.`, and `??` to keep control flow flat. Avoid nested branches when a guard clause is clearer.
- Use structured parsers and GraphQL/TypeScript APIs instead of string manipulation when the codebase already has a reliable option.
- Update docs in the same change when behavior, CLI flags, generated output, package scripts, release mechanics, or supported runtimes change.

## Tooling

- Use Bun for repo development and CI commands. Keep `bun.lock` as the only committed package-manager lockfile.
- Keep consumer-facing CLI docs package-manager neutral. Show npm, pnpm, Yarn, and Bun commands where installation or execution is documented.
- Use `tsgo` for TypeScript builds and typechecks where package scripts provide it.
- Use `oxfmt` and `oxlint`; do not reintroduce Prettier, ESLint, Changesets, yarn locks, npm locks, or pnpm locks.
- Local baseline for most changes: `bun run check`.
- Website/docs baseline: `bun run --cwd website build`.
- Generator/runtime/demo-impact baseline: `./demo-apps/build-and-test.sh` after the targeted package checks.

## Code Patterns

- CLI flags live in [cli/src/cli.ts](./cli/src/cli.ts) and the public config shape lives in [cli/src/config.ts](./cli/src/config.ts). Thread new config through validation and tasks explicitly.
- Rendering code belongs in `cli/src/render/**`. Renderers should add code through `RenderContext`; file writes should stay in task code.
- Request-object syntax must stay aligned across `cli/src/render/requestTypes/**`, `runtime/src/client/generateGraphqlOperation.ts`, and `runtime/src/client/typeSelection.ts`.
- Response typing changes usually touch `cli/src/render/responseTypes/**` and type-selection tests.
- Runtime execution changes usually touch `runtime/src/fetcher.ts`, `runtime/src/client/createClient.ts`, or `runtime/src/extract-files/extract-files.ts`.
- Keep generated clients normal JavaScript/TypeScript packages that work in Node.js, Bun, browsers, and framework code.

## Documentation Rules

- Keep this file about agent rules, code style, and repo patterns only.
- Put architecture and workflow explanations in [docs/architecture.md](./docs/architecture.md).
- Put test selection, full demo procedure, and API-flow notes in [docs/testing.md](./docs/testing.md) and [docs/api-flow.md](./docs/api-flow.md).
- Put user-facing feature docs, examples, and use cases in `website/content/*.mdx`.
- Use Mermaid diagrams in docs when they clarify architecture, generation, release, or test flow.
- Remove contradictions and stale references when touching docs. Do not leave old tool names or template copy beside the modern workflow.

## Release Rules

- Gqlts releases `@gqlts/runtime` and `@gqlts/cli` together at the same version through semantic-release.
- `develop` publishes beta prereleases; `master` and `main` publish stable releases.
- Do not edit package versions manually in feature PRs. Let semantic-release run `release:stamp`.
- `NPM_TOKEN` is required for npm publish. The built-in GitHub token handles tags and GitHub releases.

## Before Finishing

- Run the smallest verification set that covers the change, then `git diff --check`.
- For docs-only changes, run `bun run format:check` and `bun run --cwd website build`.
- For code changes, prefer `bun run check`; add package/demo commands from [docs/testing.md](./docs/testing.md).
- If GitHub or Vercel checks fail, inspect the real failing job logs before guessing.
