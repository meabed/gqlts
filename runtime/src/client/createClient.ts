import get from "lodash.get";
import { Client as WSClient, ClientOptions as WSClientOptions, createClient as createWSClient } from "graphql-ws";
import { Observable } from "zen-observable-ts";
import { ClientError } from "../error";
import { baseFetch, BaseFetcher, BatchOptions, FetcherRuntimeOptions } from "../fetcher";
import { ExecutionResult, LinkedType } from "../types";
import { chain } from "./chain";
import { generateGraphqlOperation } from "./generateGraphqlOperation";

export type Headers = HeadersInit | (() => HeadersInit) | (() => Promise<HeadersInit>);

export type ClientOptions = {
  url?: string;
  batch?: BatchOptions | boolean;
  fetcher?: BaseFetcher;
  subscription?: { url?: string; headers?: Headers } & WSClientOptions;
  fetchOptions?: FetcherRuntimeOptions;
  queryRoot?: LinkedType;
  mutationRoot?: LinkedType;
  subscriptionRoot?: LinkedType;
};

export function createClient({ queryRoot, mutationRoot, subscriptionRoot, ...options }) {
  const client: {
    setUrl?: Function;
    url?: string;
    setFetchOptions?: Function;
    fetchOptions?: FetcherRuntimeOptions;
    //
    wsClient?: WSClient;
    query?: Function;
    mutation?: Function;
    subscription?: Function;
    chain?: {
      query?: Function;
      mutation?: Function;
      subscription?: Function;
    };
  } = {};

  client.url = options?.url;
  client.setUrl = (newUrl: string) => {
    client.url = newUrl;
  };

  client.fetchOptions = options?.fetchOptions ?? {};
  client.setFetchOptions = (newFetchOptions: FetcherRuntimeOptions) => {
    client.fetchOptions = newFetchOptions;
  };

  if (queryRoot) {
    client.query = (request) => {
      if (!queryRoot) throw new Error("queryRoot argument is missing");

      return baseFetch(generateGraphqlOperation("query", queryRoot, request), client.url, client.fetchOptions);
    };
  }
  if (mutationRoot) {
    client.mutation = (request) => {
      if (!mutationRoot) throw new Error("mutationRoot argument is missing");

      return baseFetch(generateGraphqlOperation("mutation", mutationRoot, request), client.url, client.fetchOptions);
    };
  }

  if (subscriptionRoot) {
    client.subscription = (request) => {
      if (!subscriptionRoot) {
        throw new Error("subscriptionRoot argument is missing");
      }
      const op = generateGraphqlOperation("subscription", subscriptionRoot, request);
      if (!client.wsClient) {
        client.wsClient = getSubscriptionClient(options);
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
        if (val?.errors?.length) {
          throw new ClientError(val?.errors);
        }
        return val?.data;
      });
    };
  }

  client.chain = {
    query: chain((path, request, defaultValue) =>
      client?.query
        ? client.query(request).then(mapResponse(path, defaultValue))
        : () => Promise.reject(new Error("query is not defined"))
    ),
    mutation: chain((path, request, defaultValue) =>
      client?.mutation
        ? client.mutation(request).then(mapResponse(path, defaultValue))
        : () => Promise.reject(new Error("mutation is not defined"))
    ),
    subscription: chain((path, request, defaultValue) => {
      const obs = client?.subscription
        ? client.subscription(request)
        : () => Promise.reject(new Error("subscription is not defined"));
      const mapper = mapResponse(path, defaultValue);
      return Observable.from(obs).map(mapper);
    }),
  };
  return client;
}

const mapResponse =
  (path: string[], defaultValue: any = undefined) =>
  (response: any) => {
    const result = get(response, [...path], defaultValue);

    if (result === undefined) {
      throw new Error(`Response path \`${path.join(".")}\` is empty`);
    }

    return result;
  };

function getSubscriptionClient(opts: ClientOptions = {}): WSClient {
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
  });
}
