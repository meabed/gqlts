import fetch from "isomorphic-unfetch";
import { GraphqlOperation } from "./client/generateGraphqlOperation";
import { ClientError } from "./error";
import { extractFiles } from "./extract-files/extract-files";
import { ExecutionResult } from "./types";

export type FetcherRuntimeOptions = Omit<RequestInit, "body" | "method">;

export type BaseFetcher = (
  operation: GraphqlOperation | GraphqlOperation[],
  url?: string,
  options?: FetcherRuntimeOptions
) => Promise<ExecutionResult>;

export type BatchOptions = {
  batchInterval?: number; // ms
  maxBatchSize?: number;
};

const DEFAULT_BATCH_OPTIONS = {
  maxBatchSize: 10,
  batchInterval: 40,
};

export async function baseFetch(body, url = "", options: FetcherRuntimeOptions = {}) {
  const { clone, files } = extractFiles(body);

  const formData = new FormData();

  // 1. First document is graphql query with variables
  formData.append("operations", JSON.stringify(clone));

  // 2. Second document maps files to variable locations
  const map: any = {};
  let i = 0;
  files.forEach((paths) => {
    map[i++] = paths;
  });

  formData.append("map", JSON.stringify(map));

  // 3. all files not (same index as in map)
  let j = 0;
  for (const [file] of files) {
    formData.append(`${j++}`, file, file.name);
  }

  const { headers: headerOptions, ...restOptions } = options;
  let headersObject = headerOptions ?? {};
  const res = await fetch(url, {
    headers: {
      ...(!files?.size && { "Content-Type": "application/json" }),
      ...headersObject,
    },
    method: "POST",
    body: !!files.size ? formData : JSON.stringify(body),
    ...restOptions,
  });
  // todo add support for batching
  // if (batch) {
  //   return { data: await res.json(), errors: [] };
  // }
  if (!res.ok) {
    throw new Error(`${res.statusText}: ${await res.text()}`);
  }
  const json = await res.json();
  if (json?.errors?.length) {
    throw new ClientError(json.errors);
  }
  if (json?.data) {
    return json.data;
  }
  throw new Error("fetcher returned unexpected result " + JSON.stringify(json));
}

// export const createFetcher = ({
//   url = "",
//   headers = {},
//   fetcher,
//   batch = false,
//   ...rest
// }: ClientOptions): BaseFetcher => {
//   if (!url && !fetcher) {
//     throw new Error("url or fetcher is required");
//   }
//   if (!fetcher) {
//   }
//
//   // if (!batch) {
//   // }
//
//   // todo: add support for batching
//   // const batcher = new QueryBatcher(
//   //   async (batchedQuery: GraphqlOperation[], options?: RequestInit) => {
//   //     // console.log(batchedQuery) // [{ query: 'query{user{age}}', variables: {} }, ...]
//   //     if (!fetcher) {
//   //       throw new Error("fetcher is not defined");
//   //     }
//   //     return await fetcher(batchedQuery, options);
//   //   },
//   //   batch === true ? DEFAULT_BATCH_OPTIONS : batch
//   // );
//   //
//   // return async ({ query, variables }, options?: RequestInit) => {
//   //   const json = await batcher.fetch(query, variables);
//   //   if (json?.errors?.length) {
//   //     throw new ClientError(json.errors);
//   //   }
//   //   if (json?.data) {
//   //     return json.data;
//   //   }
//   //   throw new Error("fetcher returned unexpected result " + JSON.stringify(json));
//   // };
// };
