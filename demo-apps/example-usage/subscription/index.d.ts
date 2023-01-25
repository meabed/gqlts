import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  ClientRequestConfig,
  Observable,
} from '@gqlts/runtime'
import { Client as WSClient } from 'graphql-ws'
import { AxiosInstance } from 'axios'
export * from './schema'
import {
  query_rootRequest,
  query_root,
  mutation_rootRequest,
  mutation_root,
  subscription_rootRequest,
  subscription_root,
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

export interface Client<FI = AxiosInstance, RC = ClientRequestConfig> {
  wsClient?: WSClient
  fetcherInstance?: FI | undefined
  fetcherMethod: (
    operation: GraphqlOperation | GraphqlOperation[],
    config?: RC,
  ) => Promise<any>

  query<R extends query_rootRequest>(
    request: R & { __name?: string },
    config?: RC,
  ): Promise<GraphqlResponse<FieldsSelection<query_root, R>>>

  mutation<R extends mutation_rootRequest>(
    request: R & { __name?: string },
    config?: RC,
  ): Promise<GraphqlResponse<FieldsSelection<mutation_root, R>>>

  subscription<R extends subscription_rootRequest>(
    request: R & { __name?: string },
  ): Observable<GraphqlResponse<FieldsSelection<subscription_root, R>>>
}

export type QueryResult<fields extends query_rootRequest> = GraphqlResponse<
  FieldsSelection<query_root, fields>
>

export declare const generateQueryOp: (
  fields: query_rootRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<fields extends mutation_rootRequest> =
  GraphqlResponse<FieldsSelection<mutation_root, fields>>

export declare const generateMutationOp: (
  fields: mutation_rootRequest & { __name?: string },
) => GraphqlOperation
export type SubscriptionResult<fields extends subscription_rootRequest> =
  GraphqlResponse<FieldsSelection<subscription_root, fields>>

export declare const generateSubscriptionOp: (
  fields: subscription_rootRequest & { __name?: string },
) => GraphqlOperation

export declare const enumcursorOrdering: {
  readonly ASC: 'ASC'
  readonly DESC: 'DESC'
}

export declare const enumonlineUsersSelectColumn: {
  readonly count: 'count'
}

export declare const enumoptionConstraint: {
  readonly option_pkey: 'option_pkey'
}

export declare const enumoptionSelectColumn: {
  readonly id: 'id'
  readonly poll_id: 'poll_id'
  readonly text: 'text'
}

export declare const enumoptionUpdateColumn: {
  readonly id: 'id'
  readonly poll_id: 'poll_id'
  readonly text: 'text'
}

export declare const enumorderBy: {
  readonly asc: 'asc'
  readonly asc_nulls_first: 'asc_nulls_first'
  readonly asc_nulls_last: 'asc_nulls_last'
  readonly desc: 'desc'
  readonly desc_nulls_first: 'desc_nulls_first'
  readonly desc_nulls_last: 'desc_nulls_last'
}

export declare const enumpollConstraint: {
  readonly poll_pkey: 'poll_pkey'
}

export declare const enumpollResultsSelectColumn: {
  readonly option_id: 'option_id'
  readonly poll_id: 'poll_id'
  readonly votes: 'votes'
}

export declare const enumpollSelectColumn: {
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly id: 'id'
  readonly question: 'question'
}

export declare const enumpollUpdateColumn: {
  readonly created_at: 'created_at'
  readonly created_by: 'created_by'
  readonly id: 'id'
  readonly question: 'question'
}

export declare const enumuserConstraint: {
  readonly user_pkey: 'user_pkey'
}

export declare const enumuserSelectColumn: {
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly last_seen_at: 'last_seen_at'
  readonly online_ping: 'online_ping'
}

export declare const enumuserUpdateColumn: {
  readonly created_at: 'created_at'
  readonly id: 'id'
  readonly last_seen_at: 'last_seen_at'
  readonly online_ping: 'online_ping'
}

export declare const enumvoteConstraint: {
  readonly vote_pkey: 'vote_pkey'
}

export declare const enumvoteSelectColumn: {
  readonly created_at: 'created_at'
  readonly created_by_user_id: 'created_by_user_id'
  readonly id: 'id'
  readonly option_id: 'option_id'
}

export declare const enumvoteUpdateColumn: {
  readonly created_at: 'created_at'
  readonly created_by_user_id: 'created_by_user_id'
  readonly id: 'id'
  readonly option_id: 'option_id'
}
