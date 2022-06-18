import { GraphQLSchema } from "graphql";
import { RenderContext } from "../common/RenderContext";
import { requestTypeName } from "../requestTypes/requestTypeName";
import { RUNTIME_LIB_NAME } from "../../config";
import { renderEnumsMaps } from "./renderClient";

export function renderClientDefinition(schema: GraphQLSchema, ctx: RenderContext) {
  const queryType = schema.getQueryType();
  const mutationType = schema.getMutationType();
  const subscriptionType = schema.getSubscriptionType();
  const prefix = ctx.config?.methodPrefix || "";
  const suffix = ctx.config?.methodSuffix || "";

  ctx.addCodeBlock(`
    import { FieldsSelection, GraphqlOperation, ClientOptions, Observable } from '${RUNTIME_LIB_NAME}'
    import { Client as WSClient } from "graphql-ws"
    import { AxiosRequestConfig, AxiosInstance } from 'axios'
    export * from './schema'
    ${renderClientTypesImports({ mutationType, queryType, subscriptionType })}
    export declare const ${prefix}createClient${suffix}:(options?: ClientOptions) => Client
    export declare const everything: { __scalar: boolean }
    export declare const version: string
  `);

  // Client interface
  ctx.addCodeBlock(renderClientType({ mutationType, queryType, subscriptionType }));

  // generateQueryOp and QueryResult types
  ctx.addCodeBlock(
    renderSupportFunctionsTypes({
      mutationType,
      queryType,
      subscriptionType,
    })
  );

  ctx.addCodeBlock(renderEnumsMaps(schema, "type"));
}

function renderClientTypesImports({ queryType, mutationType, subscriptionType }) {
  const imports: string[] = [];
  if (queryType) {
    imports.push(requestTypeName(queryType), queryType.name);
  }

  if (mutationType) {
    imports.push(requestTypeName(mutationType), mutationType.name);
  }
  if (subscriptionType) {
    imports.push(requestTypeName(subscriptionType), subscriptionType.name);
  }
  if (imports.length > 0) {
    return `import {${imports.join(",")}} from './schema'`;
  }
  return "";
}

function renderClientType({ queryType, mutationType, subscriptionType }) {
  let interfaceContent = "";

  if (queryType) {
    interfaceContent += `
        query<R extends ${requestTypeName(queryType)}>(
            request: R & { __name?: string },
            config?: RC,
        ): Promise<GraphqlResponse<FieldsSelection<${queryType.name}, R>>>
        `;
  }

  if (mutationType) {
    interfaceContent += `
        mutation<R extends ${requestTypeName(mutationType)}>(
            request: R & { __name?: string },
            config?: RC,
        ): Promise<GraphqlResponse<FieldsSelection<${mutationType.name}, R>>>
        `;
  }

  if (subscriptionType) {
    interfaceContent += `
        subscription<R extends ${requestTypeName(subscriptionType)}>(
            request: R & { __name?: string },
        ): Observable<GraphqlResponse<FieldsSelection<${subscriptionType.name}, R>>>
        `;
  }

  return `
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

    export interface Client<FI =AxiosInstance, RC =AxiosRequestConfig> {
        wsClient?: WSClient
        fetcherInstance?: FI | undefined
        fetcherMethod: (operation: GraphqlOperation | GraphqlOperation[], config?: RC) => Promise<any>
        ${interfaceContent}
    }
    `;
}

// TODO add the close method that closes the ws client

function renderSupportFunctionsTypes({ queryType, mutationType, subscriptionType }) {
  let code = "";
  if (queryType) {
    code += `
        export type QueryResult<fields extends ${requestTypeName(queryType)}> = GraphqlResponse<FieldsSelection<${
      queryType.name
    }, fields>>

        export declare const generateQueryOp: (fields: ${requestTypeName(
          queryType
        )} & { __name?: string }) => GraphqlOperation`;
  }
  if (mutationType) {
    code += `
        export type MutationResult<fields extends ${requestTypeName(mutationType)}> = GraphqlResponse<FieldsSelection<${
      mutationType.name
    }, fields>>

        export declare const generateMutationOp: (fields: ${requestTypeName(
          mutationType
        )} & { __name?: string }) => GraphqlOperation`;
  }
  if (subscriptionType) {
    code += `
        export type SubscriptionResult<fields extends ${requestTypeName(
          subscriptionType
        )}> = GraphqlResponse<FieldsSelection<${subscriptionType.name}, fields>>

        export declare const generateSubscriptionOp: (fields: ${requestTypeName(
          subscriptionType
        )} & { __name?: string }) => GraphqlOperation`;
  }

  return code;
}
