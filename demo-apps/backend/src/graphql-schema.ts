import { FileUpload } from "graphql-upload-ts";

import type { IGraphQLContext } from "./graphql/graphql-context"
import type { core, connectionPluginCore } from "nexus"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { QueryComplexity } from "nexus/dist/plugins/queryComplexityPlugin"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `File` scalar type represents a file upload.
     */
    file<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "File";
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     */
    bigint<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "BigInt";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    /**
     * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    time<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Time";
    /**
     * A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.
     */
    uuid<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "UUID";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `File` scalar type represents a file upload.
     */
    file<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "File";
    /**
     * The `BigInt` scalar type represents non-fractional signed whole numeric values.
     */
    bigint<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "BigInt";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    time<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Time";
    /**
     * A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.
     */
    uuid<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "UUID";
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  BigInt: number
  DateTime: Date | string
  File: File
  Time: Date | string
  UUID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Query: {};
  Subscription: {};
  v1AddUserOutput: { // root type
    name?: string | null; // String
  }
  v1DeleteUserOutput: { // root type
    name?: string | null; // String
  }
  v1GetUserOutput: { // root type
    name?: string | null; // String
  }
  v1ListUsersOutput: { // root type
    name?: string | null; // String
  }
  v1SatHelloOutput: { // root type
    message?: string | null; // String
  }
  v1UpdateProfileImageOutput: { // root type
    success?: boolean | null; // Boolean
    url?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    v1AddUser: NexusGenRootTypes['v1AddUserOutput']; // v1AddUserOutput!
    v1DeleteUser: NexusGenRootTypes['v1DeleteUserOutput']; // v1DeleteUserOutput!
    v1GetUser: NexusGenRootTypes['v1GetUserOutput']; // v1GetUserOutput!
    v1UpdateProfileImage: NexusGenRootTypes['v1UpdateProfileImageOutput']; // v1UpdateProfileImageOutput!
  }
  Query: { // field return type
    v1SatHello: NexusGenRootTypes['v1SatHelloOutput']; // v1SatHelloOutput!
  }
  Subscription: { // field return type
    v1ListUsers: NexusGenRootTypes['v1ListUsersOutput']; // v1ListUsersOutput!
  }
  v1AddUserOutput: { // field return type
    name: string | null; // String
  }
  v1DeleteUserOutput: { // field return type
    name: string | null; // String
  }
  v1GetUserOutput: { // field return type
    name: string | null; // String
  }
  v1ListUsersOutput: { // field return type
    name: string | null; // String
  }
  v1SatHelloOutput: { // field return type
    message: string | null; // String
  }
  v1UpdateProfileImageOutput: { // field return type
    success: boolean | null; // Boolean
    url: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    v1AddUser: 'v1AddUserOutput'
    v1DeleteUser: 'v1DeleteUserOutput'
    v1GetUser: 'v1GetUserOutput'
    v1UpdateProfileImage: 'v1UpdateProfileImageOutput'
  }
  Query: { // field return type name
    v1SatHello: 'v1SatHelloOutput'
  }
  Subscription: { // field return type name
    v1ListUsers: 'v1ListUsersOutput'
  }
  v1AddUserOutput: { // field return type name
    name: 'String'
  }
  v1DeleteUserOutput: { // field return type name
    name: 'String'
  }
  v1GetUserOutput: { // field return type name
    name: 'String'
  }
  v1ListUsersOutput: { // field return type name
    name: 'String'
  }
  v1SatHelloOutput: { // field return type name
    message: 'String'
  }
  v1UpdateProfileImageOutput: { // field return type name
    success: 'Boolean'
    url: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    v1AddUser: { // args
      name: string; // String!
    }
    v1DeleteUser: { // args
      name: string; // String!
    }
    v1GetUser: { // args
      name: string; // String!
    }
    v1UpdateProfileImage: { // args
      image?: NexusGenScalars['File'] | null; // File
    }
  }
  Query: {
    v1SatHello: { // args
      name: string; // String!
    }
  }
  Subscription: {
    v1ListUsers: { // args
      name: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: IGraphQLContext;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
    
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
    /**
     * The complexity for an individual field. Return a number
     * or a function that returns a number to specify the
     * complexity for this field.
     */
    complexity?: QueryComplexity<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
}