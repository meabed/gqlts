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

export declare const enumSortConnectionOrderEnum: {
  readonly _ID_DESC: '_ID_DESC'
  readonly _ID_ASC: '_ID_ASC'
  readonly ORDERID_DESC: 'ORDERID_DESC'
  readonly ORDERID_ASC: 'ORDERID_ASC'
}

export declare const enumSortFindManyOrderInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly ORDERID_ASC: 'ORDERID_ASC'
  readonly ORDERID_DESC: 'ORDERID_DESC'
}

export declare const enumSortFindManyEmployeeInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly EMPLOYEEID_ASC: 'EMPLOYEEID_ASC'
  readonly EMPLOYEEID_DESC: 'EMPLOYEEID_DESC'
  readonly TERRITORYIDS_ASC: 'TERRITORYIDS_ASC'
  readonly TERRITORYIDS_DESC: 'TERRITORYIDS_DESC'
  readonly LASTNAME_ASC: 'LASTNAME_ASC'
  readonly LASTNAME_DESC: 'LASTNAME_DESC'
  readonly LASTNAME__FIRSTNAME_ASC: 'LASTNAME__FIRSTNAME_ASC'
  readonly LASTNAME__FIRSTNAME_DESC: 'LASTNAME__FIRSTNAME_DESC'
}

export declare const enumSortConnectionProductEnum: {
  readonly _ID_DESC: '_ID_DESC'
  readonly _ID_ASC: '_ID_ASC'
  readonly PRODUCTID_DESC: 'PRODUCTID_DESC'
  readonly PRODUCTID_ASC: 'PRODUCTID_ASC'
  readonly NAME__SUPPLIERID_DESC: 'NAME__SUPPLIERID_DESC'
  readonly NAME__SUPPLIERID_ASC: 'NAME__SUPPLIERID_ASC'
}

export declare const enumSortFindManyProductInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly PRODUCTID_ASC: 'PRODUCTID_ASC'
  readonly PRODUCTID_DESC: 'PRODUCTID_DESC'
  readonly UNITPRICE_ASC: 'UNITPRICE_ASC'
  readonly UNITPRICE_DESC: 'UNITPRICE_DESC'
  readonly NAME_ASC: 'NAME_ASC'
  readonly NAME_DESC: 'NAME_DESC'
  readonly NAME__SUPPLIERID_ASC: 'NAME__SUPPLIERID_ASC'
  readonly NAME__SUPPLIERID_DESC: 'NAME__SUPPLIERID_DESC'
}

export declare const enumSortFindOneCategoryInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly CATEGORYID_ASC: 'CATEGORYID_ASC'
  readonly CATEGORYID_DESC: 'CATEGORYID_DESC'
  readonly NAME_ASC: 'NAME_ASC'
  readonly NAME_DESC: 'NAME_DESC'
}

export declare const enumSortFindManyCategoryInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly CATEGORYID_ASC: 'CATEGORYID_ASC'
  readonly CATEGORYID_DESC: 'CATEGORYID_DESC'
  readonly NAME_ASC: 'NAME_ASC'
  readonly NAME_DESC: 'NAME_DESC'
}

export declare const enumSortFindOneCustomerInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly CUSTOMERID_ASC: 'CUSTOMERID_ASC'
  readonly CUSTOMERID_DESC: 'CUSTOMERID_DESC'
  readonly COMPANYNAME_ASC: 'COMPANYNAME_ASC'
  readonly COMPANYNAME_DESC: 'COMPANYNAME_DESC'
}

export declare const enumSortFindManyCustomerInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly CUSTOMERID_ASC: 'CUSTOMERID_ASC'
  readonly CUSTOMERID_DESC: 'CUSTOMERID_DESC'
  readonly COMPANYNAME_ASC: 'COMPANYNAME_ASC'
  readonly COMPANYNAME_DESC: 'COMPANYNAME_DESC'
}

export declare const enumSortConnectionCustomerEnum: {
  readonly _ID_DESC: '_ID_DESC'
  readonly _ID_ASC: '_ID_ASC'
  readonly CUSTOMERID_DESC: 'CUSTOMERID_DESC'
  readonly CUSTOMERID_ASC: 'CUSTOMERID_ASC'
  readonly COMPANYNAME_DESC: 'COMPANYNAME_DESC'
  readonly COMPANYNAME_ASC: 'COMPANYNAME_ASC'
}

export declare const enumSortFindOneEmployeeInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly EMPLOYEEID_ASC: 'EMPLOYEEID_ASC'
  readonly EMPLOYEEID_DESC: 'EMPLOYEEID_DESC'
  readonly TERRITORYIDS_ASC: 'TERRITORYIDS_ASC'
  readonly TERRITORYIDS_DESC: 'TERRITORYIDS_DESC'
  readonly LASTNAME_ASC: 'LASTNAME_ASC'
  readonly LASTNAME_DESC: 'LASTNAME_DESC'
  readonly LASTNAME__FIRSTNAME_ASC: 'LASTNAME__FIRSTNAME_ASC'
  readonly LASTNAME__FIRSTNAME_DESC: 'LASTNAME__FIRSTNAME_DESC'
}

export declare const enumSortFindOneOrderInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly ORDERID_ASC: 'ORDERID_ASC'
  readonly ORDERID_DESC: 'ORDERID_DESC'
}

export declare const enumSortFindOneProductInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly PRODUCTID_ASC: 'PRODUCTID_ASC'
  readonly PRODUCTID_DESC: 'PRODUCTID_DESC'
  readonly UNITPRICE_ASC: 'UNITPRICE_ASC'
  readonly UNITPRICE_DESC: 'UNITPRICE_DESC'
  readonly NAME_ASC: 'NAME_ASC'
  readonly NAME_DESC: 'NAME_DESC'
  readonly NAME__SUPPLIERID_ASC: 'NAME__SUPPLIERID_ASC'
  readonly NAME__SUPPLIERID_DESC: 'NAME__SUPPLIERID_DESC'
}

export declare const enumSortFindOneRegionInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly REGIONID_ASC: 'REGIONID_ASC'
  readonly REGIONID_DESC: 'REGIONID_DESC'
}

export declare const enumSortFindManyRegionInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly REGIONID_ASC: 'REGIONID_ASC'
  readonly REGIONID_DESC: 'REGIONID_DESC'
}

export declare const enumSortFindOneShipperInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly SHIPPERID_ASC: 'SHIPPERID_ASC'
  readonly SHIPPERID_DESC: 'SHIPPERID_DESC'
}

export declare const enumSortFindManyShipperInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly SHIPPERID_ASC: 'SHIPPERID_ASC'
  readonly SHIPPERID_DESC: 'SHIPPERID_DESC'
}

export declare const enumSortFindOneSupplierInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly SUPPLIERID_ASC: 'SUPPLIERID_ASC'
  readonly SUPPLIERID_DESC: 'SUPPLIERID_DESC'
  readonly COMPANYNAME_ASC: 'COMPANYNAME_ASC'
  readonly COMPANYNAME_DESC: 'COMPANYNAME_DESC'
}

export declare const enumSortConnectionSupplierEnum: {
  readonly _ID_DESC: '_ID_DESC'
  readonly _ID_ASC: '_ID_ASC'
  readonly SUPPLIERID_DESC: 'SUPPLIERID_DESC'
  readonly SUPPLIERID_ASC: 'SUPPLIERID_ASC'
  readonly COMPANYNAME_DESC: 'COMPANYNAME_DESC'
  readonly COMPANYNAME_ASC: 'COMPANYNAME_ASC'
}

export declare const enumSortRemoveOneProductInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly PRODUCTID_ASC: 'PRODUCTID_ASC'
  readonly PRODUCTID_DESC: 'PRODUCTID_DESC'
  readonly UNITPRICE_ASC: 'UNITPRICE_ASC'
  readonly UNITPRICE_DESC: 'UNITPRICE_DESC'
  readonly NAME_ASC: 'NAME_ASC'
  readonly NAME_DESC: 'NAME_DESC'
  readonly NAME__SUPPLIERID_ASC: 'NAME__SUPPLIERID_ASC'
  readonly NAME__SUPPLIERID_DESC: 'NAME__SUPPLIERID_DESC'
}

export declare const enumSortRemoveOneOrderInput: {
  readonly _ID_ASC: '_ID_ASC'
  readonly _ID_DESC: '_ID_DESC'
  readonly ORDERID_ASC: 'ORDERID_ASC'
  readonly ORDERID_DESC: 'ORDERID_DESC'
}
