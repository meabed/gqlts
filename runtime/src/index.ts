export { createClient } from './client/createClient';
export type { ClientOptions, ClientRequestConfig, GraphQLClient } from './client/createClient';
export type { FieldsSelection } from './client/typeSelection';
export type { NoExtraProperties } from './types';
export { generateGraphqlOperation } from './client/generateGraphqlOperation';
export type { GraphqlOperation, Request, Fields, Args } from './client/generateGraphqlOperation';
export { linkTypeMap } from './client/linkTypeMap';
export { Observable } from 'zen-observable-ts';
export { createFetcher } from './fetcher';
export type { Fetcher, BatchOptions, GraphQLErrorResult } from './fetcher';
export { ClientError } from './error';

/**
 * Convenience object to request all scalar fields of a type
 */
export const everything = {
  __scalar: true,
};

/**
 * Checks if the runtime version matches the version used to generate the client
 * and warns if there's a mismatch
 */
export function assertSameVersion(generatedWithVersion?: string): void {
  try {
    if (typeof require === 'undefined' || !generatedWithVersion) {
      return;
    }

    const { version } = require('../package.json');
    const runtimeVersion = version?.trim();
    const generatedVersion = generatedWithVersion.trim();

    if (runtimeVersion && generatedVersion && runtimeVersion !== generatedVersion) {
      console.warn(
        `[WARNING]: gqlts client library has been generated with a different version of '@gqlts/runtime'`,
        `\nPackage version: ${runtimeVersion}`,
        `\nGenerated with: ${generatedVersion}`,
        `\nPlease update both packages to have the same version.`,
      );
    }
  } catch (err) {
    // Silently fail if version check encounters an error
  }
}
