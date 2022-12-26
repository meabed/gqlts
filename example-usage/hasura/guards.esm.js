
var message_possibleTypes = ['message']
export var ismessage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage"')
  return message_possibleTypes.includes(obj.__typename)
}



var message_aggregate_possibleTypes = ['message_aggregate']
export var ismessage_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_aggregate"')
  return message_aggregate_possibleTypes.includes(obj.__typename)
}



var message_aggregate_fields_possibleTypes = ['message_aggregate_fields']
export var ismessage_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_aggregate_fields"')
  return message_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var message_avg_fields_possibleTypes = ['message_avg_fields']
export var ismessage_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_avg_fields"')
  return message_avg_fields_possibleTypes.includes(obj.__typename)
}



var message_max_fields_possibleTypes = ['message_max_fields']
export var ismessage_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_max_fields"')
  return message_max_fields_possibleTypes.includes(obj.__typename)
}



var message_min_fields_possibleTypes = ['message_min_fields']
export var ismessage_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_min_fields"')
  return message_min_fields_possibleTypes.includes(obj.__typename)
}



var message_mutation_response_possibleTypes = ['message_mutation_response']
export var ismessage_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_mutation_response"')
  return message_mutation_response_possibleTypes.includes(obj.__typename)
}



var message_stddev_fields_possibleTypes = ['message_stddev_fields']
export var ismessage_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_stddev_fields"')
  return message_stddev_fields_possibleTypes.includes(obj.__typename)
}



var message_stddev_pop_fields_possibleTypes = ['message_stddev_pop_fields']
export var ismessage_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_stddev_pop_fields"')
  return message_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var message_stddev_samp_fields_possibleTypes = ['message_stddev_samp_fields']
export var ismessage_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_stddev_samp_fields"')
  return message_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var message_sum_fields_possibleTypes = ['message_sum_fields']
export var ismessage_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_sum_fields"')
  return message_sum_fields_possibleTypes.includes(obj.__typename)
}



var message_var_pop_fields_possibleTypes = ['message_var_pop_fields']
export var ismessage_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_var_pop_fields"')
  return message_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var message_var_samp_fields_possibleTypes = ['message_var_samp_fields']
export var ismessage_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_var_samp_fields"')
  return message_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var message_variance_fields_possibleTypes = ['message_variance_fields']
export var ismessage_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismessage_variance_fields"')
  return message_variance_fields_possibleTypes.includes(obj.__typename)
}



var mutation_root_possibleTypes = ['mutation_root']
export var ismutation_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



var query_root_possibleTypes = ['query_root']
export var isquery_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



var subscription_root_possibleTypes = ['subscription_root']
export var issubscription_root = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



var user_possibleTypes = ['user']
export var isuser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser"')
  return user_possibleTypes.includes(obj.__typename)
}



var user_aggregate_possibleTypes = ['user_aggregate']
export var isuser_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_aggregate"')
  return user_aggregate_possibleTypes.includes(obj.__typename)
}



var user_aggregate_fields_possibleTypes = ['user_aggregate_fields']
export var isuser_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_aggregate_fields"')
  return user_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var user_avg_fields_possibleTypes = ['user_avg_fields']
export var isuser_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_avg_fields"')
  return user_avg_fields_possibleTypes.includes(obj.__typename)
}



var user_max_fields_possibleTypes = ['user_max_fields']
export var isuser_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_max_fields"')
  return user_max_fields_possibleTypes.includes(obj.__typename)
}



var user_min_fields_possibleTypes = ['user_min_fields']
export var isuser_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_min_fields"')
  return user_min_fields_possibleTypes.includes(obj.__typename)
}



var user_mutation_response_possibleTypes = ['user_mutation_response']
export var isuser_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_mutation_response"')
  return user_mutation_response_possibleTypes.includes(obj.__typename)
}



var user_online_possibleTypes = ['user_online']
export var isuser_online = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online"')
  return user_online_possibleTypes.includes(obj.__typename)
}



var user_online_aggregate_possibleTypes = ['user_online_aggregate']
export var isuser_online_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_aggregate"')
  return user_online_aggregate_possibleTypes.includes(obj.__typename)
}



var user_online_aggregate_fields_possibleTypes = ['user_online_aggregate_fields']
export var isuser_online_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_aggregate_fields"')
  return user_online_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var user_online_avg_fields_possibleTypes = ['user_online_avg_fields']
export var isuser_online_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_avg_fields"')
  return user_online_avg_fields_possibleTypes.includes(obj.__typename)
}



var user_online_max_fields_possibleTypes = ['user_online_max_fields']
export var isuser_online_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_max_fields"')
  return user_online_max_fields_possibleTypes.includes(obj.__typename)
}



var user_online_min_fields_possibleTypes = ['user_online_min_fields']
export var isuser_online_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_min_fields"')
  return user_online_min_fields_possibleTypes.includes(obj.__typename)
}



var user_online_mutation_response_possibleTypes = ['user_online_mutation_response']
export var isuser_online_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_mutation_response"')
  return user_online_mutation_response_possibleTypes.includes(obj.__typename)
}



var user_online_stddev_fields_possibleTypes = ['user_online_stddev_fields']
export var isuser_online_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_stddev_fields"')
  return user_online_stddev_fields_possibleTypes.includes(obj.__typename)
}



var user_online_stddev_pop_fields_possibleTypes = ['user_online_stddev_pop_fields']
export var isuser_online_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_stddev_pop_fields"')
  return user_online_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var user_online_stddev_samp_fields_possibleTypes = ['user_online_stddev_samp_fields']
export var isuser_online_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_stddev_samp_fields"')
  return user_online_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var user_online_sum_fields_possibleTypes = ['user_online_sum_fields']
export var isuser_online_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_sum_fields"')
  return user_online_sum_fields_possibleTypes.includes(obj.__typename)
}



var user_online_var_pop_fields_possibleTypes = ['user_online_var_pop_fields']
export var isuser_online_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_var_pop_fields"')
  return user_online_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var user_online_var_samp_fields_possibleTypes = ['user_online_var_samp_fields']
export var isuser_online_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_var_samp_fields"')
  return user_online_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var user_online_variance_fields_possibleTypes = ['user_online_variance_fields']
export var isuser_online_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_online_variance_fields"')
  return user_online_variance_fields_possibleTypes.includes(obj.__typename)
}



var user_stddev_fields_possibleTypes = ['user_stddev_fields']
export var isuser_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_stddev_fields"')
  return user_stddev_fields_possibleTypes.includes(obj.__typename)
}



var user_stddev_pop_fields_possibleTypes = ['user_stddev_pop_fields']
export var isuser_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_stddev_pop_fields"')
  return user_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var user_stddev_samp_fields_possibleTypes = ['user_stddev_samp_fields']
export var isuser_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_stddev_samp_fields"')
  return user_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var user_sum_fields_possibleTypes = ['user_sum_fields']
export var isuser_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_sum_fields"')
  return user_sum_fields_possibleTypes.includes(obj.__typename)
}



var user_typing_possibleTypes = ['user_typing']
export var isuser_typing = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing"')
  return user_typing_possibleTypes.includes(obj.__typename)
}



var user_typing_aggregate_possibleTypes = ['user_typing_aggregate']
export var isuser_typing_aggregate = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_aggregate"')
  return user_typing_aggregate_possibleTypes.includes(obj.__typename)
}



var user_typing_aggregate_fields_possibleTypes = ['user_typing_aggregate_fields']
export var isuser_typing_aggregate_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_aggregate_fields"')
  return user_typing_aggregate_fields_possibleTypes.includes(obj.__typename)
}



var user_typing_avg_fields_possibleTypes = ['user_typing_avg_fields']
export var isuser_typing_avg_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_avg_fields"')
  return user_typing_avg_fields_possibleTypes.includes(obj.__typename)
}



var user_typing_max_fields_possibleTypes = ['user_typing_max_fields']
export var isuser_typing_max_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_max_fields"')
  return user_typing_max_fields_possibleTypes.includes(obj.__typename)
}



var user_typing_min_fields_possibleTypes = ['user_typing_min_fields']
export var isuser_typing_min_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_min_fields"')
  return user_typing_min_fields_possibleTypes.includes(obj.__typename)
}



var user_typing_mutation_response_possibleTypes = ['user_typing_mutation_response']
export var isuser_typing_mutation_response = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_mutation_response"')
  return user_typing_mutation_response_possibleTypes.includes(obj.__typename)
}



var user_typing_stddev_fields_possibleTypes = ['user_typing_stddev_fields']
export var isuser_typing_stddev_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_stddev_fields"')
  return user_typing_stddev_fields_possibleTypes.includes(obj.__typename)
}



var user_typing_stddev_pop_fields_possibleTypes = ['user_typing_stddev_pop_fields']
export var isuser_typing_stddev_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_stddev_pop_fields"')
  return user_typing_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



var user_typing_stddev_samp_fields_possibleTypes = ['user_typing_stddev_samp_fields']
export var isuser_typing_stddev_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_stddev_samp_fields"')
  return user_typing_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



var user_typing_sum_fields_possibleTypes = ['user_typing_sum_fields']
export var isuser_typing_sum_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_sum_fields"')
  return user_typing_sum_fields_possibleTypes.includes(obj.__typename)
}



var user_typing_var_pop_fields_possibleTypes = ['user_typing_var_pop_fields']
export var isuser_typing_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_var_pop_fields"')
  return user_typing_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var user_typing_var_samp_fields_possibleTypes = ['user_typing_var_samp_fields']
export var isuser_typing_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_var_samp_fields"')
  return user_typing_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var user_typing_variance_fields_possibleTypes = ['user_typing_variance_fields']
export var isuser_typing_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_typing_variance_fields"')
  return user_typing_variance_fields_possibleTypes.includes(obj.__typename)
}



var user_var_pop_fields_possibleTypes = ['user_var_pop_fields']
export var isuser_var_pop_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_var_pop_fields"')
  return user_var_pop_fields_possibleTypes.includes(obj.__typename)
}



var user_var_samp_fields_possibleTypes = ['user_var_samp_fields']
export var isuser_var_samp_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_var_samp_fields"')
  return user_var_samp_fields_possibleTypes.includes(obj.__typename)
}



var user_variance_fields_possibleTypes = ['user_variance_fields']
export var isuser_variance_fields = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isuser_variance_fields"')
  return user_variance_fields_possibleTypes.includes(obj.__typename)
}
