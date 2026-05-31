export default {
  scalars: [0, 1, 2, 4, 6, 12, 21, 29, 34, 35, 42, 60, 74, 93, 105],
  types: {
    Boolean: {},
    Float: {},
    Int: {},
    Int_comparison_exp: {
      _eq: [2],
      _gt: [2],
      _gte: [2],
      _in: [2],
      _is_null: [0],
      _lt: [2],
      _lte: [2],
      _neq: [2],
      _nin: [2],
      __typename: [4],
    },
    String: {},
    String_comparison_exp: {
      _eq: [4],
      _gt: [4],
      _gte: [4],
      _ilike: [4],
      _in: [4],
      _iregex: [4],
      _is_null: [0],
      _like: [4],
      _lt: [4],
      _lte: [4],
      _neq: [4],
      _nilike: [4],
      _nin: [4],
      _niregex: [4],
      _nlike: [4],
      _nregex: [4],
      _nsimilar: [4],
      _regex: [4],
      _similar: [4],
      __typename: [4],
    },
    cursor_ordering: {},
    message: {
      id: [2],
      text: [4],
      timestamp: [35],
      username: [4],
      __typename: [4],
    },
    message_aggregate: {
      aggregate: [9],
      nodes: [7],
      __typename: [4],
    },
    message_aggregate_fields: {
      avg: [10],
      count: [
        2,
        {
          columns: [21, '[message_select_column!]'],
          distinct: [0],
        },
      ],
      max: [15],
      min: [16],
      stddev: [23],
      stddev_pop: [24],
      stddev_samp: [25],
      sum: [28],
      var_pop: [31],
      var_samp: [32],
      variance: [33],
      __typename: [4],
    },
    message_avg_fields: {
      id: [1],
      __typename: [4],
    },
    message_bool_exp: {
      _and: [11],
      _not: [11],
      _or: [11],
      id: [3],
      text: [5],
      timestamp: [36],
      username: [5],
      __typename: [4],
    },
    message_constraint: {},
    message_inc_input: {
      id: [2],
      __typename: [4],
    },
    message_insert_input: {
      id: [2],
      text: [4],
      timestamp: [35],
      username: [4],
      __typename: [4],
    },
    message_max_fields: {
      id: [2],
      text: [4],
      timestamp: [35],
      username: [4],
      __typename: [4],
    },
    message_min_fields: {
      id: [2],
      text: [4],
      timestamp: [35],
      username: [4],
      __typename: [4],
    },
    message_mutation_response: {
      affected_rows: [2],
      returning: [7],
      __typename: [4],
    },
    message_on_conflict: {
      constraint: [12],
      update_columns: [29],
      where: [11],
      __typename: [4],
    },
    message_order_by: {
      id: [34],
      text: [34],
      timestamp: [34],
      username: [34],
      __typename: [4],
    },
    message_pk_columns_input: {
      id: [2],
      __typename: [4],
    },
    message_select_column: {},
    message_set_input: {
      id: [2],
      text: [4],
      timestamp: [35],
      username: [4],
      __typename: [4],
    },
    message_stddev_fields: {
      id: [1],
      __typename: [4],
    },
    message_stddev_pop_fields: {
      id: [1],
      __typename: [4],
    },
    message_stddev_samp_fields: {
      id: [1],
      __typename: [4],
    },
    message_stream_cursor_input: {
      initial_value: [27],
      ordering: [6],
      __typename: [4],
    },
    message_stream_cursor_value_input: {
      id: [2],
      text: [4],
      timestamp: [35],
      username: [4],
      __typename: [4],
    },
    message_sum_fields: {
      id: [2],
      __typename: [4],
    },
    message_update_column: {},
    message_updates: {
      _inc: [13],
      _set: [22],
      where: [11],
      __typename: [4],
    },
    message_var_pop_fields: {
      id: [1],
      __typename: [4],
    },
    message_var_samp_fields: {
      id: [1],
      __typename: [4],
    },
    message_variance_fields: {
      id: [1],
      __typename: [4],
    },
    order_by: {},
    timestamptz: {},
    timestamptz_comparison_exp: {
      _eq: [35],
      _gt: [35],
      _gte: [35],
      _in: [35],
      _is_null: [0],
      _lt: [35],
      _lte: [35],
      _neq: [35],
      _nin: [35],
      __typename: [4],
    },
    user: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_aggregate: {
      aggregate: [39],
      nodes: [37],
      __typename: [4],
    },
    user_aggregate_fields: {
      avg: [40],
      count: [
        2,
        {
          columns: [74, '[user_select_column!]'],
          distinct: [0],
        },
      ],
      max: [45],
      min: [46],
      stddev: [76],
      stddev_pop: [77],
      stddev_samp: [78],
      sum: [81],
      var_pop: [107],
      var_samp: [108],
      variance: [109],
      __typename: [4],
    },
    user_avg_fields: {
      id: [1],
      __typename: [4],
    },
    user_bool_exp: {
      _and: [41],
      _not: [41],
      _or: [41],
      id: [3],
      last_seen: [36],
      last_typed: [36],
      username: [5],
      __typename: [4],
    },
    user_constraint: {},
    user_inc_input: {
      id: [2],
      __typename: [4],
    },
    user_insert_input: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_max_fields: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_min_fields: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_mutation_response: {
      affected_rows: [2],
      returning: [37],
      __typename: [4],
    },
    user_on_conflict: {
      constraint: [42],
      update_columns: [105],
      where: [41],
      __typename: [4],
    },
    user_online: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_online_aggregate: {
      aggregate: [51],
      nodes: [49],
      __typename: [4],
    },
    user_online_aggregate_fields: {
      avg: [52],
      count: [
        2,
        {
          columns: [60, '[user_online_select_column!]'],
          distinct: [0],
        },
      ],
      max: [56],
      min: [57],
      stddev: [62],
      stddev_pop: [63],
      stddev_samp: [64],
      sum: [67],
      var_pop: [69],
      var_samp: [70],
      variance: [71],
      __typename: [4],
    },
    user_online_avg_fields: {
      id: [1],
      __typename: [4],
    },
    user_online_bool_exp: {
      _and: [53],
      _not: [53],
      _or: [53],
      id: [3],
      last_seen: [36],
      last_typed: [36],
      username: [5],
      __typename: [4],
    },
    user_online_inc_input: {
      id: [2],
      __typename: [4],
    },
    user_online_insert_input: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_online_max_fields: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_online_min_fields: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_online_mutation_response: {
      affected_rows: [2],
      returning: [49],
      __typename: [4],
    },
    user_online_order_by: {
      id: [34],
      last_seen: [34],
      last_typed: [34],
      username: [34],
      __typename: [4],
    },
    user_online_select_column: {},
    user_online_set_input: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_online_stddev_fields: {
      id: [1],
      __typename: [4],
    },
    user_online_stddev_pop_fields: {
      id: [1],
      __typename: [4],
    },
    user_online_stddev_samp_fields: {
      id: [1],
      __typename: [4],
    },
    user_online_stream_cursor_input: {
      initial_value: [66],
      ordering: [6],
      __typename: [4],
    },
    user_online_stream_cursor_value_input: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_online_sum_fields: {
      id: [2],
      __typename: [4],
    },
    user_online_updates: {
      _inc: [54],
      _set: [61],
      where: [53],
      __typename: [4],
    },
    user_online_var_pop_fields: {
      id: [1],
      __typename: [4],
    },
    user_online_var_samp_fields: {
      id: [1],
      __typename: [4],
    },
    user_online_variance_fields: {
      id: [1],
      __typename: [4],
    },
    user_order_by: {
      id: [34],
      last_seen: [34],
      last_typed: [34],
      username: [34],
      __typename: [4],
    },
    user_pk_columns_input: {
      id: [2],
      __typename: [4],
    },
    user_select_column: {},
    user_set_input: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_stddev_fields: {
      id: [1],
      __typename: [4],
    },
    user_stddev_pop_fields: {
      id: [1],
      __typename: [4],
    },
    user_stddev_samp_fields: {
      id: [1],
      __typename: [4],
    },
    user_stream_cursor_input: {
      initial_value: [80],
      ordering: [6],
      __typename: [4],
    },
    user_stream_cursor_value_input: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_sum_fields: {
      id: [2],
      __typename: [4],
    },
    user_typing: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_typing_aggregate: {
      aggregate: [84],
      nodes: [82],
      __typename: [4],
    },
    user_typing_aggregate_fields: {
      avg: [85],
      count: [
        2,
        {
          columns: [93, '[user_typing_select_column!]'],
          distinct: [0],
        },
      ],
      max: [89],
      min: [90],
      stddev: [95],
      stddev_pop: [96],
      stddev_samp: [97],
      sum: [100],
      var_pop: [102],
      var_samp: [103],
      variance: [104],
      __typename: [4],
    },
    user_typing_avg_fields: {
      id: [1],
      __typename: [4],
    },
    user_typing_bool_exp: {
      _and: [86],
      _not: [86],
      _or: [86],
      id: [3],
      last_seen: [36],
      last_typed: [36],
      username: [5],
      __typename: [4],
    },
    user_typing_inc_input: {
      id: [2],
      __typename: [4],
    },
    user_typing_insert_input: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_typing_max_fields: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_typing_min_fields: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_typing_mutation_response: {
      affected_rows: [2],
      returning: [82],
      __typename: [4],
    },
    user_typing_order_by: {
      id: [34],
      last_seen: [34],
      last_typed: [34],
      username: [34],
      __typename: [4],
    },
    user_typing_select_column: {},
    user_typing_set_input: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_typing_stddev_fields: {
      id: [1],
      __typename: [4],
    },
    user_typing_stddev_pop_fields: {
      id: [1],
      __typename: [4],
    },
    user_typing_stddev_samp_fields: {
      id: [1],
      __typename: [4],
    },
    user_typing_stream_cursor_input: {
      initial_value: [99],
      ordering: [6],
      __typename: [4],
    },
    user_typing_stream_cursor_value_input: {
      id: [2],
      last_seen: [35],
      last_typed: [35],
      username: [4],
      __typename: [4],
    },
    user_typing_sum_fields: {
      id: [2],
      __typename: [4],
    },
    user_typing_updates: {
      _inc: [87],
      _set: [94],
      where: [86],
      __typename: [4],
    },
    user_typing_var_pop_fields: {
      id: [1],
      __typename: [4],
    },
    user_typing_var_samp_fields: {
      id: [1],
      __typename: [4],
    },
    user_typing_variance_fields: {
      id: [1],
      __typename: [4],
    },
    user_update_column: {},
    user_updates: {
      _inc: [43],
      _set: [75],
      where: [41],
      __typename: [4],
    },
    user_var_pop_fields: {
      id: [1],
      __typename: [4],
    },
    user_var_samp_fields: {
      id: [1],
      __typename: [4],
    },
    user_variance_fields: {
      id: [1],
      __typename: [4],
    },
    Query: {
      message: [
        7,
        {
          distinct_on: [21, '[message_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [19, '[message_order_by!]'],
          where: [11],
        },
      ],
      message_aggregate: [
        8,
        {
          distinct_on: [21, '[message_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [19, '[message_order_by!]'],
          where: [11],
        },
      ],
      message_by_pk: [
        7,
        {
          id: [2, 'Int!'],
        },
      ],
      user: [
        37,
        {
          distinct_on: [74, '[user_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [72, '[user_order_by!]'],
          where: [41],
        },
      ],
      user_aggregate: [
        38,
        {
          distinct_on: [74, '[user_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [72, '[user_order_by!]'],
          where: [41],
        },
      ],
      user_by_pk: [
        37,
        {
          id: [2, 'Int!'],
        },
      ],
      user_online: [
        49,
        {
          distinct_on: [60, '[user_online_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [59, '[user_online_order_by!]'],
          where: [53],
        },
      ],
      user_online_aggregate: [
        50,
        {
          distinct_on: [60, '[user_online_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [59, '[user_online_order_by!]'],
          where: [53],
        },
      ],
      user_typing: [
        82,
        {
          distinct_on: [93, '[user_typing_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [92, '[user_typing_order_by!]'],
          where: [86],
        },
      ],
      user_typing_aggregate: [
        83,
        {
          distinct_on: [93, '[user_typing_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [92, '[user_typing_order_by!]'],
          where: [86],
        },
      ],
      __typename: [4],
    },
    Mutation: {
      delete_message: [
        17,
        {
          where: [11, 'message_bool_exp!'],
        },
      ],
      delete_message_by_pk: [
        7,
        {
          id: [2, 'Int!'],
        },
      ],
      delete_user: [
        47,
        {
          where: [41, 'user_bool_exp!'],
        },
      ],
      delete_user_by_pk: [
        37,
        {
          id: [2, 'Int!'],
        },
      ],
      delete_user_online: [
        58,
        {
          where: [53, 'user_online_bool_exp!'],
        },
      ],
      delete_user_typing: [
        91,
        {
          where: [86, 'user_typing_bool_exp!'],
        },
      ],
      insert_message: [
        17,
        {
          objects: [14, '[message_insert_input!]!'],
          on_conflict: [18],
        },
      ],
      insert_message_one: [
        7,
        {
          object: [14, 'message_insert_input!'],
          on_conflict: [18],
        },
      ],
      insert_user: [
        47,
        {
          objects: [44, '[user_insert_input!]!'],
          on_conflict: [48],
        },
      ],
      insert_user_one: [
        37,
        {
          object: [44, 'user_insert_input!'],
          on_conflict: [48],
        },
      ],
      insert_user_online: [
        58,
        {
          objects: [55, '[user_online_insert_input!]!'],
        },
      ],
      insert_user_online_one: [
        49,
        {
          object: [55, 'user_online_insert_input!'],
        },
      ],
      insert_user_typing: [
        91,
        {
          objects: [88, '[user_typing_insert_input!]!'],
        },
      ],
      insert_user_typing_one: [
        82,
        {
          object: [88, 'user_typing_insert_input!'],
        },
      ],
      update_message: [
        17,
        {
          _inc: [13],
          _set: [22],
          where: [11, 'message_bool_exp!'],
        },
      ],
      update_message_by_pk: [
        7,
        {
          _inc: [13],
          _set: [22],
          pk_columns: [20, 'message_pk_columns_input!'],
        },
      ],
      update_message_many: [
        17,
        {
          updates: [30, '[message_updates!]!'],
        },
      ],
      update_user: [
        47,
        {
          _inc: [43],
          _set: [75],
          where: [41, 'user_bool_exp!'],
        },
      ],
      update_user_by_pk: [
        37,
        {
          _inc: [43],
          _set: [75],
          pk_columns: [73, 'user_pk_columns_input!'],
        },
      ],
      update_user_many: [
        47,
        {
          updates: [106, '[user_updates!]!'],
        },
      ],
      update_user_online: [
        58,
        {
          _inc: [54],
          _set: [61],
          where: [53, 'user_online_bool_exp!'],
        },
      ],
      update_user_online_many: [
        58,
        {
          updates: [68, '[user_online_updates!]!'],
        },
      ],
      update_user_typing: [
        91,
        {
          _inc: [87],
          _set: [94],
          where: [86, 'user_typing_bool_exp!'],
        },
      ],
      update_user_typing_many: [
        91,
        {
          updates: [101, '[user_typing_updates!]!'],
        },
      ],
      __typename: [4],
    },
    Subscription: {
      message: [
        7,
        {
          distinct_on: [21, '[message_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [19, '[message_order_by!]'],
          where: [11],
        },
      ],
      message_aggregate: [
        8,
        {
          distinct_on: [21, '[message_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [19, '[message_order_by!]'],
          where: [11],
        },
      ],
      message_by_pk: [
        7,
        {
          id: [2, 'Int!'],
        },
      ],
      message_stream: [
        7,
        {
          batch_size: [2, 'Int!'],
          cursor: [26, '[message_stream_cursor_input]!'],
          where: [11],
        },
      ],
      user: [
        37,
        {
          distinct_on: [74, '[user_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [72, '[user_order_by!]'],
          where: [41],
        },
      ],
      user_aggregate: [
        38,
        {
          distinct_on: [74, '[user_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [72, '[user_order_by!]'],
          where: [41],
        },
      ],
      user_by_pk: [
        37,
        {
          id: [2, 'Int!'],
        },
      ],
      user_online: [
        49,
        {
          distinct_on: [60, '[user_online_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [59, '[user_online_order_by!]'],
          where: [53],
        },
      ],
      user_online_aggregate: [
        50,
        {
          distinct_on: [60, '[user_online_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [59, '[user_online_order_by!]'],
          where: [53],
        },
      ],
      user_online_stream: [
        49,
        {
          batch_size: [2, 'Int!'],
          cursor: [65, '[user_online_stream_cursor_input]!'],
          where: [53],
        },
      ],
      user_stream: [
        37,
        {
          batch_size: [2, 'Int!'],
          cursor: [79, '[user_stream_cursor_input]!'],
          where: [41],
        },
      ],
      user_typing: [
        82,
        {
          distinct_on: [93, '[user_typing_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [92, '[user_typing_order_by!]'],
          where: [86],
        },
      ],
      user_typing_aggregate: [
        83,
        {
          distinct_on: [93, '[user_typing_select_column!]'],
          limit: [2],
          offset: [2],
          order_by: [92, '[user_typing_order_by!]'],
          where: [86],
        },
      ],
      user_typing_stream: [
        82,
        {
          batch_size: [2, 'Int!'],
          cursor: [98, '[user_typing_stream_cursor_input]!'],
          where: [86],
        },
      ],
      __typename: [4],
    },
  },
};
