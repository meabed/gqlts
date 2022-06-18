export { createClient } from "./client/createClient";
export type { ClientOptions } from "./client/createClient";
export type { FieldsSelection } from "./client/typeSelection";
export type { NoExtraProperties } from "./types";
export { generateGraphqlOperation } from "./client/generateGraphqlOperation";
export type { GraphqlOperation } from "./client/generateGraphqlOperation";
export { linkTypeMap } from "./client/linkTypeMap";
export { Observable } from "zen-observable-ts";
export { createFetcher } from "./fetcher";
export { ClientError } from "./error";
export const everything = {
  __scalar: true,
};

export function assertSameVersion(generatedWithVersion) {
  try {
    if (typeof require === "undefined") {
      return;
    }
    const { version } = require("../package.json");
    if (generatedWithVersion && generatedWithVersion.trim() != version.trim()) {
      console.error(
        "[WARNING]: gqlts client library has been generated with a different version of `@gqlts/runtime`, update both packages to have the same version!"
      );
    }
  } catch {}
}

//
