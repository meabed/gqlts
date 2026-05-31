import { packageManagerInstallCommands } from './printHelp';

describe('packageManagerInstallCommands', () => {
  test('prints install commands for the common package managers', () => {
    expect(packageManagerInstallCommands(['@gqlts/runtime@3.4.0', 'graphql'])).toEqual([
      'npm install @gqlts/runtime@3.4.0 graphql',
      'pnpm add @gqlts/runtime@3.4.0 graphql',
      'yarn add @gqlts/runtime@3.4.0 graphql',
      'bun add @gqlts/runtime@3.4.0 graphql',
    ]);
  });
});
