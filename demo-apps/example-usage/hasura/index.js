import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from '@gqlts/runtime'
import types from './types.esm'
var typeMap = linkTypeMap(types)
export * from './guards.esm'

export var version = '3.2.14'
assertSameVersion(version)

export var createClient = function (options) {
  options = options || {}
  var optionsCopy = {
    url: 'https://realtime-chat.hasura.app/v1/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

export const enumcursorOrdering = {
  ASC: 'ASC',
  DESC: 'DESC',
}

export const enummessageConstraint = {
  message_pkey: 'message_pkey',
}

export const enummessageSelectColumn = {
  id: 'id',
  text: 'text',
  timestamp: 'timestamp',
  username: 'username',
}

export const enummessageUpdateColumn = {
  id: 'id',
  text: 'text',
  timestamp: 'timestamp',
  username: 'username',
}

export const enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

export const enumuserConstraint = {
  user_pkey: 'user_pkey',
  user_username_key: 'user_username_key',
}

export const enumuserOnlineSelectColumn = {
  id: 'id',
  last_seen: 'last_seen',
  last_typed: 'last_typed',
  username: 'username',
}

export const enumuserSelectColumn = {
  id: 'id',
  last_seen: 'last_seen',
  last_typed: 'last_typed',
  username: 'username',
}

export const enumuserTypingSelectColumn = {
  id: 'id',
  last_seen: 'last_seen',
  last_typed: 'last_typed',
  username: 'username',
}

export const enumuserUpdateColumn = {
  id: 'id',
  last_seen: 'last_seen',
  last_typed: 'last_typed',
  username: 'username',
}

export var generateQueryOp = function (fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
export var generateMutationOp = function (fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
export var generateSubscriptionOp = function (fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
export var everything = {
  __scalar: true,
}
