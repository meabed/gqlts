import { ClientOptions } from "./client/createClient";
import { GraphqlOperation } from "./client/generateGraphqlOperation";
import { extractFiles } from "./extract-files/extract-files";
import { QueryBatcher } from "./client/batcher";
import axios, { AxiosRequestConfig } from "axios";
import FormData from "form-data";

export interface Fetcher {
  (gql: GraphqlOperation, config?: AxiosRequestConfig): Promise<any>;
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
    fetcher = async (body, config: AxiosRequestConfig) => {
      const { clone, files } = extractFiles(body);

      let formData: FormData | undefined = undefined;
      if (files.size > 0) {
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

      const headersObject = {
        "Content-Type": "application/json",
        ...(typeof headers == "function" ? await headers() : headers),
        ...(!!formData?.getHeaders && formData?.getHeaders()),
      };
      const fetchBody = files.size && formData ? formData : JSON.stringify(body);

      return axios
        .post(url, fetchBody, {
          method: "POST",
          headers: headersObject,
          timeout,
          withCredentials: true,
          ...rest,
          ...config,
        })
        .then((res) => {
          if (res.status === 200) {
            return res.data;
          }
          return {
            data: null,
            errors: [{ message: res.statusText, code: res.status, path: ["clientResponseNotOk"] }],
          };
        })
        .catch((err) => {
          return { data: null, errors: [{ message: err.message, code: err.code, path: ["clientResponseError"] }] };
        });
    };
  }

  if (!batch) {
    return async (body, config) => {
      if (!fetcher) {
        throw new Error("fetcher is required");
      }
      return fetcher(body, config);
    };
  }

  // todo test batcher
  const batcher = new QueryBatcher(
    async (batchedQuery: GraphqlOperation[], config) => {
      // console.log(batchedQuery) // [{ query: 'query{user{age}}', variables: {} }, ...]
      if (!fetcher) {
        throw new Error("fetcher is not defined");
      }
      return fetcher(batchedQuery, config);
    },
    batch === true ? DEFAULT_BATCH_OPTIONS : batch
  );

  return async ({ query, variables }, config) => {
    return batcher.fetch({ query, variables, config });
  };
};
