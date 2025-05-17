import { QueryBatcher } from './client/batcher';
import { type ClientOptions, ClientRequestConfig } from './client/createClient';
import { type GraphqlOperation } from './client/generateGraphqlOperation';
import { extractFiles } from './extract-files/extract-files';
import axios, { type AxiosInstance } from 'axios';
import FormData from 'form-data';

export interface Fetcher {
  fetcherMethod: (gql: GraphqlOperation, config?: ClientRequestConfig) => Promise<any>;
  fetcherInstance: AxiosInstance | unknown | undefined;
}

export type BatchOptions = {
  batchInterval?: number; // ms
  maxBatchSize?: number;
};

const DEFAULT_BATCH_OPTIONS = {
  maxBatchSize: 10,
  batchInterval: 40,
};

export interface GraphQLErrorResult {
  data: null;
  errors: Array<{
    message: string;
    code?: string | number;
    path?: string[];
    locations?: Array<{ line: number; column: number }>;
  }>;
}

export function createFetcher(params: ClientOptions): Fetcher {
  const { url = '', timeout = 100000, headers = {}, batch = false, ...rest } = params;
  let { fetcherMethod, fetcherInstance } = params;

  if (!url && !fetcherMethod) {
    throw new Error('URL or fetcherMethod is required');
  }

  if (!fetcherInstance) {
    fetcherInstance = axios.create({});
  }

  if (!fetcherMethod) {
    fetcherMethod = async (body, config: ClientRequestConfig = {}) => {
      const { clone, files } = extractFiles(body);

      const hasFiles = files?.size > 0;
      let formData: FormData | undefined = undefined;
      if (hasFiles) {
        formData = new FormData();
        // 1. First document is graphql query with variables
        formData.append('operations', JSON.stringify(clone));
        // 2. Second document maps files to variable locations
        const map: Record<string, string[]> = {};
        let i = 0;
        files.forEach((paths) => {
          map[i++] = paths;
        });
        formData.append('map', JSON.stringify(map));
        // 3. all files not (same index as in map)
        let j = 0;
        for (const [file] of files) {
          formData.append(`${j++}`, file, file.name);
        }
      }

      const headersObject = {
        ...(hasFiles ? {} : { 'Content-Type': 'application/json' }),
        ...(typeof headers == 'function' ? await headers() : headers),
        ...(!!formData?.getHeaders && formData?.getHeaders()),
      };

      const fetchBody = hasFiles && formData ? formData : JSON.stringify(body);
      return (fetcherInstance as AxiosInstance)({
        url,
        data: fetchBody,
        method: 'POST',
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
            errors: [{ message: res.statusText, code: res.status, path: ['clientResponseNotOk'] }],
          };
        })
        .catch((err) => {
          return { data: null, errors: [{ message: err.message, code: err.code, path: ['clientResponseError'] }] };
        });
    };
  }

  if (!batch) {
    return {
      fetcherMethod: async (body, config) => {
        if (!fetcherMethod) {
          throw new Error('fetcher is required');
        }
        return fetcherMethod(body, config);
      },
      fetcherInstance,
    };
  }

  const batcher = new QueryBatcher(
    async (batchedQuery: GraphqlOperation[], config) => {
      if (!fetcherMethod) {
        throw new Error('fetcher is not defined');
      }
      return fetcherMethod(batchedQuery, config);
    },
    batch === true ? DEFAULT_BATCH_OPTIONS : batch,
  );

  return {
    fetcherMethod: async ({ query, variables }, config) => {
      return batcher.fetch({ query, variables, config });
    },
    fetcherInstance,
  };
}
