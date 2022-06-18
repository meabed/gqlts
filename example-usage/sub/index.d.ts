import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@gqlts/runtime'
import { Client as WSClient } from 'graphql-ws'
import { AxiosRequestConfig, AxiosInstance } from 'axios'
export * from './schema'
import {
  QueryRequest,
  Query,
  MutationRequest,
  Mutation,
  SubscriptionRequest,
  Subscription,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export type Head<T extends unknown | unknown[]> = T extends [
  infer H,
  ...unknown[],
]
  ? H
  : never
export interface GraphQLError {
  message: string
  code?: string
  locations?: {
    line: number
    column: number
  }[]
  path?: string | number[]
  extensions?: {
    [key: string]: unknown
  }
  [key: string]: unknown
}

export interface Extensions {
  [key: string]: unknown
}

export interface GraphqlResponse<D = any, E = GraphQLError[], X = Extensions> {
  data?: D
  errors?: E
  extensions?: X
}

export interface Client<FI = AxiosInstance, RC = AxiosRequestConfig> {
  wsClient?: WSClient
  fetcherInstance?: FI | undefined
  fetcherMethod: (
    operation: GraphqlOperation | GraphqlOperation[],
    config?: RC,
  ) => Promise<any>

  query<R extends QueryRequest>(
    request: R & { __name?: string },
    config?: RC,
  ): Promise<GraphqlResponse<FieldsSelection<Query, R>>>

  mutation<R extends MutationRequest>(
    request: R & { __name?: string },
    config?: RC,
  ): Promise<GraphqlResponse<FieldsSelection<Mutation, R>>>

  subscription<R extends SubscriptionRequest>(
    request: R & { __name?: string },
  ): Observable<GraphqlResponse<FieldsSelection<Subscription, R>>>
}

export type QueryResult<fields extends QueryRequest> = GraphqlResponse<
  FieldsSelection<Query, fields>
>

export declare const generateQueryOp: (
  fields: QueryRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<fields extends MutationRequest> = GraphqlResponse<
  FieldsSelection<Mutation, fields>
>

export declare const generateMutationOp: (
  fields: MutationRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<fields extends SubscriptionRequest> =
  GraphqlResponse<FieldsSelection<Subscription, fields>>

export declare const generateSubscriptionOp: (
  fields: SubscriptionRequest & { __name?: string },
) => GraphqlOperation
