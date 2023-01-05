import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from '@gqlts/runtime'
import types from './types.esm'
var typeMap = linkTypeMap(types)
export * from './guards.esm'

export var version = '3.2.15'
assertSameVersion(version)

export var createClient = function (options) {
  options = options || {}
  var optionsCopy = {
    url: 'https://realtime-poll.hasura.app/v1/graphql',
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

export const enumonlineUsersSelectColumn = {
  count: 'count',
}

export const enumoptionConstraint = {
  option_pkey: 'option_pkey',
}

export const enumoptionSelectColumn = {
  id: 'id',
  poll_id: 'poll_id',
  text: 'text',
}

export const enumoptionUpdateColumn = {
  id: 'id',
  poll_id: 'poll_id',
  text: 'text',
}

export const enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last',
}

export const enumpollConstraint = {
  poll_pkey: 'poll_pkey',
}

export const enumpollResultsSelectColumn = {
  option_id: 'option_id',
  poll_id: 'poll_id',
  votes: 'votes',
}

export const enumpollSelectColumn = {
  created_at: 'created_at',
  created_by: 'created_by',
  id: 'id',
  question: 'question',
}

export const enumpollUpdateColumn = {
  created_at: 'created_at',
  created_by: 'created_by',
  id: 'id',
  question: 'question',
}

export const enumuserConstraint = {
  user_pkey: 'user_pkey',
}

export const enumuserSelectColumn = {
  created_at: 'created_at',
  id: 'id',
  last_seen_at: 'last_seen_at',
  online_ping: 'online_ping',
}

export const enumuserUpdateColumn = {
  created_at: 'created_at',
  id: 'id',
  last_seen_at: 'last_seen_at',
  online_ping: 'online_ping',
}

export const enumvoteConstraint = {
  vote_pkey: 'vote_pkey',
}

export const enumvoteSelectColumn = {
  created_at: 'created_at',
  created_by_user_id: 'created_by_user_id',
  id: 'id',
  option_id: 'option_id',
}

export const enumvoteUpdateColumn = {
  created_at: 'created_at',
  created_by_user_id: 'created_by_user_id',
  id: 'id',
  option_id: 'option_id',
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
