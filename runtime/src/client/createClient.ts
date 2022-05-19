import get from "lodash.get";
import { Client as WSClient, ClientOptions as WSClientOptions, createClient as createWSClient } from "graphql-ws";
import { Observable } from "zen-observable-ts";
import { ClientError } from "../error";
import { BatchOptions, createFetcher } from "../fetcher";
import { ExecutionResult, LinkedType } from "../types";
import { chain } from "./chain";
import { generateGraphqlOperation, GraphqlOperation } from "./generateGraphqlOperation";
import { AxiosRequestHeaders } from "axios";

export type Headers = HeadersInit | (() => AxiosRequestHeaders) | (() => Promise<AxiosRequestHeaders>);
export type BaseFetcher = (operation: GraphqlOperation | GraphqlOperation[]) => Promise<any>;

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
    chain?: {
      query?: Function;
      mutation?: Function;
      subscription?: Function;
    };
  } = {};

  if (queryRoot) {
    client.query = (request) => {
      if (!queryRoot) throw new Error("queryRoot argument is missing");

      return fetcher(generateGraphqlOperation("query", queryRoot, request));
    };
  }
  if (mutationRoot) {
    client.mutation = (request) => {
      if (!mutationRoot) throw new Error("mutationRoot argument is missing");

      return fetcher(generateGraphqlOperation("mutation", mutationRoot, request));
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
