
  const {
      linkTypeMap,
      createClient: createClientOriginal,
      generateGraphqlOperation,
      assertSameVersion,
  } = require('@gqlts/runtime')
  var typeMap = linkTypeMap(require('./types.cjs'))

  var version = '3.3.0'
  assertSameVersion(version)

  module.exports.version = version

  module.exports.createClient = 
function(options) {
    options = options || {}
    var optionsCopy = {
      url: "https://realtime-chat.hasura.app/v1/graphql",
      queryRoot: typeMap.Query,
      mutationRoot: typeMap.Mutation,
      subscriptionRoot: typeMap.Subscription,
    }
    for (var name in options) {
      optionsCopy[name] = options[name];
    }
    return createClientOriginal(optionsCopy)
}

  module.exports.enumcursorOrdering = {
  ASC: 'ASC',
  DESC: 'DESC'
}

module.exports.enummessageConstraint = {
  message_pkey: 'message_pkey'
}

module.exports.enummessageSelectColumn = {
  id: 'id',
  text: 'text',
  timestamp: 'timestamp',
  username: 'username'
}

module.exports.enummessageUpdateColumn = {
  id: 'id',
  text: 'text',
  timestamp: 'timestamp',
  username: 'username'
}

module.exports.enumorderBy = {
  asc: 'asc',
  asc_nulls_first: 'asc_nulls_first',
  asc_nulls_last: 'asc_nulls_last',
  desc: 'desc',
  desc_nulls_first: 'desc_nulls_first',
  desc_nulls_last: 'desc_nulls_last'
}

module.exports.enumuserConstraint = {
  user_pkey: 'user_pkey',
  user_username_key: 'user_username_key'
}

module.exports.enumuserOnlineSelectColumn = {
  id: 'id',
  last_seen: 'last_seen',
  last_typed: 'last_typed',
  username: 'username'
}

module.exports.enumuserSelectColumn = {
  id: 'id',
  last_seen: 'last_seen',
  last_typed: 'last_typed',
  username: 'username'
}

module.exports.enumuserTypingSelectColumn = {
  id: 'id',
  last_seen: 'last_seen',
  last_typed: 'last_typed',
  username: 'username'
}

module.exports.enumuserUpdateColumn = {
  id: 'id',
  last_seen: 'last_seen',
  last_typed: 'last_typed',
  username: 'username'
}


  module.exports.generateQueryOp = function(fields) {
    return generateGraphqlOperation('query', typeMap.Query, fields)
  }
  module.exports.generateMutationOp = function(fields) {
    return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
  }
  module.exports.generateSubscriptionOp = function(fields) {
    return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
  }
  module.exports.everything = {
    __scalar: true
  }

  var schemaExports = require('./guards.cjs')
  for (var k in schemaExports) {
    module.exports[k] = schemaExports[k];
  }
  