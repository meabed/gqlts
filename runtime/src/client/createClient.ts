import { Client as WSClient, ClientOptions as WSClientOptions, createClient as createWSClient } from "graphql-ws";
import { Observable } from "zen-observable-ts";
import { BatchOptions, createFetcher } from "../fetcher";
import { ExecutionResult, LinkedType } from "../types";
import { generateGraphqlOperation, GraphqlOperation } from "./generateGraphqlOperation";
import { AxiosRequestConfig, AxiosRequestHeaders } from "axios";

export type Headers = AxiosRequestHeaders | (() => AxiosRequestHeaders) | (() => Promise<AxiosRequestHeaders>);
export type BaseFetcher = (
  operation: GraphqlOperation | GraphqlOperation[],
  config?: AxiosRequestConfig
) => Promise<any>;

export type ClientOptions = Omit<AxiosRequestHeaders, "body" | "headers"> & {
  url?: string;
  timeout?: number;
  batch?: BatchOptions | boolean;
  fetcher?: BaseFetcher;
  headers?: Headers;
  subscription?: { url?: string; headers?: Headers } & WSClientOptions;
};

export function createClient({
  queryRoot,
  mutationRoot,
  subscriptionRoot,
  ...options
}: ClientOptions & {
  queryRoot?: LinkedType;
  mutationRoot?: LinkedType;
  subscriptionRoot?: LinkedType;
}) {
  const fetcher = createFetcher(options);
  const client: {
    wsClient?: WSClient;
    setOption?: Function;
    query?: Function;
    mutation?: Function;
    subscription?: Function;
  } = {};

  if (queryRoot) {
    client.query = (request, config) => {
      if (!queryRoot) throw new Error("queryRoot argument is missing");

      return fetcher(generateGraphqlOperation("query", queryRoot, request), config);
    };
  }
  if (mutationRoot) {
    client.mutation = (request, config) => {
      if (!mutationRoot) throw new Error("mutationRoot argument is missing");

      return fetcher(generateGraphqlOperation("mutation", mutationRoot, request), config);
    };
  }
  if (subscriptionRoot) {
    client.subscription = (request, config) => {
      if (!subscriptionRoot) {
        throw new Error("subscriptionRoot argument is missing");
      }
      const op = generateGraphqlOperation("subscription", subscriptionRoot, request);
      if (!client.wsClient) {
        client.wsClient = getSubscriptionClient(options, config);
      }
      return new Observable((observer) => {
        // TODO check that unsubscribing wrapper obs calls unsubscribe on the wrapped one
        const obs = client.wsClient?.subscribe(op, {
          next: (x) => {
            // if (observer.closed) return
            observer.next(x);
          },
          error: (x) => {
            // if (observer.closed) return
            observer.error(x);
          },
          complete: () => {
            observer.complete();
          },
        });
        return () => {
          console.log("unsubscribed");
          client.wsClient?.terminate();
          client.wsClient?.dispose();
        };
      }).map((val: ExecutionResult<any>): any => {
        // todo test subscription
        return val;
      });
    };
  }

  return client;
}

function getSubscriptionClient(opts: ClientOptions = {}, config?: ClientOptions): WSClient {
  let { url, headers = {} } = opts.subscription || {};
  // by default use the top level url
  if (!url) {
    url = opts?.url;
  }
  if (!url) {
    throw new Error("Subscription client error: missing url parameter");
  }

  return createWSClient({
    url,
    lazy: true,
    shouldRetry: () => true,
    retryAttempts: 3,
    connectionParams: async () => {
      let headersObject = typeof headers == "function" ? await headers() : headers;
      headersObject = headersObject || {};
      return {
        headers: headersObject,
      };
    },
    ...opts,
    ...config,
  });
}
