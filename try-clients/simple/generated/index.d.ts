import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genqlx/runtime'
import { Client as WSClient } from 'graphql-ws'
export * from './schema'
import { QueryRequest, QueryPromiseChain, Query } from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: WSClient

  query<R extends QueryRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>

  chain: {
    query: QueryPromiseChain
  }
}

export type QueryResult<fields extends QueryRequest> = FieldsSelection<
  Query,
  fields
>

export declare const generateQueryOp: (
  fields: QueryRequest & { __name?: string },
) => GraphqlOperation
