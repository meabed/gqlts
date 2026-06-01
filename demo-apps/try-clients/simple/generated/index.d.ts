
    import type {
      FieldsSelection as RuntimeFieldsSelection,
      GraphqlOperation as RuntimeGraphqlOperation,
      ClientOptions as RuntimeClientOptions,
      ClientRequestConfig as RuntimeClientRequestConfig,
      Observable as RuntimeObservable,
    } from '@gqlts/runtime'
    import type { Client as RuntimeWSClient } from "graphql-ws"
    import type { AxiosInstance as RuntimeAxiosInstance } from 'axios'
    export * from './schema'
    import {QueryRequest,Query} from './schema'
    export type FieldsSelection<SRC, DST> = RuntimeFieldsSelection<SRC, DST>
    export interface GraphqlOperation extends RuntimeGraphqlOperation {}
    export interface ClientOptions extends RuntimeClientOptions {}
    export interface ClientRequestConfig<D = any> extends RuntimeClientRequestConfig<D> {}
    export interface Observable<T> extends RuntimeObservable<T> {}
    export interface WSClient extends RuntimeWSClient {}
    export interface AxiosInstance extends RuntimeAxiosInstance {}
    export declare const createClient:(options?: ClientOptions) => Client
    export declare const everything: { __scalar: boolean }
    export declare const version: string
  


    export type Head<T extends unknown | unknown[]> = T extends [infer H, ...unknown[]] ? H : never
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
      data?: D;
      errors?: E;
      extensions?: X;
    }

    export interface Client<FI =AxiosInstance, RC =ClientRequestConfig> {
        wsClient?: WSClient
        fetcherInstance?: FI | undefined
        fetcherMethod: (operation: GraphqlOperation | GraphqlOperation[], config?: RC) => Promise<any>
        
        query<R extends QueryRequest>(
            request: R & { __name?: string },
            config?: RC,
        ): Promise<GraphqlResponse<FieldsSelection<Query, R>>>
        
    }
    


        export type QueryResult<fields extends QueryRequest> = GraphqlResponse<FieldsSelection<Query, fields>>

        export declare const generateQueryOp: (fields: QueryRequest & { __name?: string }) => GraphqlOperation