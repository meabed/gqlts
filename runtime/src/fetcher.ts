import fetch from "isomorphic-unfetch";
import { ClientOptions } from "./client/createClient";
import { GraphqlOperation } from "./client/generateGraphqlOperation";
import { extractFiles } from "./extract-files/extract-files";
import { QueryBatcher } from "./client/batcher";

export interface Fetcher {
  (gql: GraphqlOperation): Promise<any>;
}

export type BatchOptions = {
  batchInterval?: number; // ms
  maxBatchSize?: number;
};

const DEFAULT_BATCH_OPTIONS = {
  maxBatchSize: 10,
  batchInterval: 40,
};

export const createFetcher = (params: ClientOptions): Fetcher => {
  const { url = "", timeout = 100000, headers = {}, batch = false, ...rest } = params;
  let { fetcher } = params;

  if (!url && !fetcher) {
    throw new Error("url or fetcher is required");
  }

  if (!fetcher) {
    fetcher = async (body) => {
      const { clone, files } = extractFiles(body);

      let formData: FormData | undefined = undefined;
      if (files.size) {
        formData = new FormData();
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
      }
      let headersObject = typeof headers == "function" ? await headers() : headers;
      headersObject = headersObject || {};

      return fetch(url, {
        headers: {
          ...(!files?.size && { "Content-Type": "application/json" }),
          ...headersObject,
        },
        method: "POST",
        body: !!files.size && formData ? formData : JSON.stringify(body),
        credentials: "include",
        ...rest,
      })
        .then((res) => {
          if (!res.ok) {
            return { data: null, errors: [{ message: res.statusText, code: res.status, path: ["fetcher"] }] };
          }
          return res.json();
        })
        .catch((err) => {
          return { data: null, errors: [{ message: err.message, code: err.code, path: ["fetcher"] }] };
        });
    };
  }

  if (!batch) {
    return async (body) => {
      if (!fetcher) {
        throw new Error("fetcher is required");
      }
      return fetcher(body);
    };
  }

  const batcher = new QueryBatcher(
    async (batchedQuery: GraphqlOperation[]) => {
      // console.log(batchedQuery) // [{ query: 'query{user{age}}', variables: {} }, ...]
      if (!fetcher) {
        throw new Error("fetcher is not defined");
      }
      return await fetcher(batchedQuery);
    },
    batch === true ? DEFAULT_BATCH_OPTIONS : batch
  );

  return async ({ query, variables }) => {
    return batcher.fetch(query, variables);
  };
};
