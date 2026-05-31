export type Scalars = {
  Boolean: boolean;
  Float: number;
  Int: number;
  String: string;
  bigint: any;
  timestamptz: any;
  uuid: any;
};

/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC';

/** mutation root */
export interface mutation_root {
  /** delete data from the table: "option" */
  delete_option?: option_mutation_response;
  /** delete single row from the table: "option" */
  delete_option_by_pk?: option;
  /** delete data from the table: "poll" */
  delete_poll?: poll_mutation_response;
  /** delete single row from the table: "poll" */
  delete_poll_by_pk?: poll;
  /** delete data from the table: "user" */
  delete_user?: user_mutation_response;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: user;
  /** delete data from the table: "vote" */
  delete_vote?: vote_mutation_response;
  /** delete single row from the table: "vote" */
  delete_vote_by_pk?: vote;
  /** insert data into the table: "option" */
  insert_option?: option_mutation_response;
  /** insert a single row into the table: "option" */
  insert_option_one?: option;
  /** insert data into the table: "poll" */
  insert_poll?: poll_mutation_response;
  /** insert a single row into the table: "poll" */
  insert_poll_one?: poll;
  /** insert data into the table: "user" */
  insert_user?: user_mutation_response;
  /** insert a single row into the table: "user" */
  insert_user_one?: user;
  /** insert data into the table: "vote" */
  insert_vote?: vote_mutation_response;
  /** insert a single row into the table: "vote" */
  insert_vote_one?: vote;
  /** update data of the table: "option" */
  update_option?: option_mutation_response;
  /** update single row of the table: "option" */
  update_option_by_pk?: option;
  /** update multiples rows of table: "option" */
  update_option_many?: (option_mutation_response | undefined)[];
  /** update data of the table: "poll" */
  update_poll?: poll_mutation_response;
  /** update single row of the table: "poll" */
  update_poll_by_pk?: poll;
  /** update multiples rows of table: "poll" */
  update_poll_many?: (poll_mutation_response | undefined)[];
  /** update data of the table: "user" */
  update_user?: user_mutation_response;
  /** update single row of the table: "user" */
  update_user_by_pk?: user;
  /** update multiples rows of table: "user" */
  update_user_many?: (user_mutation_response | undefined)[];
  /** update data of the table: "vote" */
  update_vote?: vote_mutation_response;
  /** update single row of the table: "vote" */
  update_vote_by_pk?: vote;
  /** update multiples rows of table: "vote" */
  update_vote_many?: (vote_mutation_response | undefined)[];
  __typename: 'mutation_root';
}

/** columns and relationships of "online_users" */
export interface online_users {
  count?: Scalars['bigint'];
  __typename: 'online_users';
}

/** aggregated selection of "online_users" */
export interface online_users_aggregate {
  aggregate?: online_users_aggregate_fields;
  nodes: online_users[];
  __typename: 'online_users_aggregate';
}

/** aggregate fields of "online_users" */
export interface online_users_aggregate_fields {
  avg?: online_users_avg_fields;
  count: Scalars['Int'];
  max?: online_users_max_fields;
  min?: online_users_min_fields;
  stddev?: online_users_stddev_fields;
  stddev_pop?: online_users_stddev_pop_fields;
  stddev_samp?: online_users_stddev_samp_fields;
  sum?: online_users_sum_fields;
  var_pop?: online_users_var_pop_fields;
  var_samp?: online_users_var_samp_fields;
  variance?: online_users_variance_fields;
  __typename: 'online_users_aggregate_fields';
}

/** aggregate avg on columns */
export interface online_users_avg_fields {
  count?: Scalars['Float'];
  __typename: 'online_users_avg_fields';
}

/** aggregate max on columns */
export interface online_users_max_fields {
  count?: Scalars['bigint'];
  __typename: 'online_users_max_fields';
}

/** aggregate min on columns */
export interface online_users_min_fields {
  count?: Scalars['bigint'];
  __typename: 'online_users_min_fields';
}

/** select columns of table "online_users" */
export type online_users_select_column = 'count';

/** aggregate stddev on columns */
export interface online_users_stddev_fields {
  count?: Scalars['Float'];
  __typename: 'online_users_stddev_fields';
}

/** aggregate stddev_pop on columns */
export interface online_users_stddev_pop_fields {
  count?: Scalars['Float'];
  __typename: 'online_users_stddev_pop_fields';
}

/** aggregate stddev_samp on columns */
export interface online_users_stddev_samp_fields {
  count?: Scalars['Float'];
  __typename: 'online_users_stddev_samp_fields';
}

/** aggregate sum on columns */
export interface online_users_sum_fields {
  count?: Scalars['bigint'];
  __typename: 'online_users_sum_fields';
}

/** aggregate var_pop on columns */
export interface online_users_var_pop_fields {
  count?: Scalars['Float'];
  __typename: 'online_users_var_pop_fields';
}

/** aggregate var_samp on columns */
export interface online_users_var_samp_fields {
  count?: Scalars['Float'];
  __typename: 'online_users_var_samp_fields';
}

/** aggregate variance on columns */
export interface online_users_variance_fields {
  count?: Scalars['Float'];
  __typename: 'online_users_variance_fields';
}

/** columns and relationships of "option" */
export interface option {
  id: Scalars['uuid'];
  /** An object relationship */
  poll: poll;
  poll_id: Scalars['uuid'];
  text: Scalars['String'];
  __typename: 'option';
}

/** aggregated selection of "option" */
export interface option_aggregate {
  aggregate?: option_aggregate_fields;
  nodes: option[];
  __typename: 'option_aggregate';
}

/** aggregate fields of "option" */
export interface option_aggregate_fields {
  count: Scalars['Int'];
  max?: option_max_fields;
  min?: option_min_fields;
  __typename: 'option_aggregate_fields';
}

/** unique or primary key constraints on table "option" */
export type option_constraint = 'option_pkey';

/** aggregate max on columns */
export interface option_max_fields {
  id?: Scalars['uuid'];
  poll_id?: Scalars['uuid'];
  text?: Scalars['String'];
  __typename: 'option_max_fields';
}

/** aggregate min on columns */
export interface option_min_fields {
  id?: Scalars['uuid'];
  poll_id?: Scalars['uuid'];
  text?: Scalars['String'];
  __typename: 'option_min_fields';
}

/** response of any mutation on the table "option" */
export interface option_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: option[];
  __typename: 'option_mutation_response';
}

/** select columns of table "option" */
export type option_select_column = 'id' | 'poll_id' | 'text';

/** update columns of table "option" */
export type option_update_column = 'id' | 'poll_id' | 'text';

/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last';

/** columns and relationships of "poll" */
export interface poll {
  created_at: Scalars['timestamptz'];
  created_by?: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An array relationship */
  options: option[];
  /** An aggregate relationship */
  options_aggregate: option_aggregate;
  question: Scalars['String'];
  __typename: 'poll';
}

/** aggregated selection of "poll" */
export interface poll_aggregate {
  aggregate?: poll_aggregate_fields;
  nodes: poll[];
  __typename: 'poll_aggregate';
}

/** aggregate fields of "poll" */
export interface poll_aggregate_fields {
  count: Scalars['Int'];
  max?: poll_max_fields;
  min?: poll_min_fields;
  __typename: 'poll_aggregate_fields';
}

/** unique or primary key constraints on table "poll" */
export type poll_constraint = 'poll_pkey';

/** aggregate max on columns */
export interface poll_max_fields {
  created_at?: Scalars['timestamptz'];
  created_by?: Scalars['uuid'];
  id?: Scalars['uuid'];
  question?: Scalars['String'];
  __typename: 'poll_max_fields';
}

/** aggregate min on columns */
export interface poll_min_fields {
  created_at?: Scalars['timestamptz'];
  created_by?: Scalars['uuid'];
  id?: Scalars['uuid'];
  question?: Scalars['String'];
  __typename: 'poll_min_fields';
}

/** response of any mutation on the table "poll" */
export interface poll_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: poll[];
  __typename: 'poll_mutation_response';
}

/** columns and relationships of "poll_results" */
export interface poll_results {
  /** An object relationship */
  option?: option;
  option_id?: Scalars['uuid'];
  /** An object relationship */
  poll?: poll;
  poll_id?: Scalars['uuid'];
  votes?: Scalars['bigint'];
  __typename: 'poll_results';
}

/** aggregated selection of "poll_results" */
export interface poll_results_aggregate {
  aggregate?: poll_results_aggregate_fields;
  nodes: poll_results[];
  __typename: 'poll_results_aggregate';
}

/** aggregate fields of "poll_results" */
export interface poll_results_aggregate_fields {
  avg?: poll_results_avg_fields;
  count: Scalars['Int'];
  max?: poll_results_max_fields;
  min?: poll_results_min_fields;
  stddev?: poll_results_stddev_fields;
  stddev_pop?: poll_results_stddev_pop_fields;
  stddev_samp?: poll_results_stddev_samp_fields;
  sum?: poll_results_sum_fields;
  var_pop?: poll_results_var_pop_fields;
  var_samp?: poll_results_var_samp_fields;
  variance?: poll_results_variance_fields;
  __typename: 'poll_results_aggregate_fields';
}

/** aggregate avg on columns */
export interface poll_results_avg_fields {
  votes?: Scalars['Float'];
  __typename: 'poll_results_avg_fields';
}

/** aggregate max on columns */
export interface poll_results_max_fields {
  option_id?: Scalars['uuid'];
  poll_id?: Scalars['uuid'];
  votes?: Scalars['bigint'];
  __typename: 'poll_results_max_fields';
}

/** aggregate min on columns */
export interface poll_results_min_fields {
  option_id?: Scalars['uuid'];
  poll_id?: Scalars['uuid'];
  votes?: Scalars['bigint'];
  __typename: 'poll_results_min_fields';
}

/** select columns of table "poll_results" */
export type poll_results_select_column = 'option_id' | 'poll_id' | 'votes';

/** aggregate stddev on columns */
export interface poll_results_stddev_fields {
  votes?: Scalars['Float'];
  __typename: 'poll_results_stddev_fields';
}

/** aggregate stddev_pop on columns */
export interface poll_results_stddev_pop_fields {
  votes?: Scalars['Float'];
  __typename: 'poll_results_stddev_pop_fields';
}

/** aggregate stddev_samp on columns */
export interface poll_results_stddev_samp_fields {
  votes?: Scalars['Float'];
  __typename: 'poll_results_stddev_samp_fields';
}

/** aggregate sum on columns */
export interface poll_results_sum_fields {
  votes?: Scalars['bigint'];
  __typename: 'poll_results_sum_fields';
}

/** aggregate var_pop on columns */
export interface poll_results_var_pop_fields {
  votes?: Scalars['Float'];
  __typename: 'poll_results_var_pop_fields';
}

/** aggregate var_samp on columns */
export interface poll_results_var_samp_fields {
  votes?: Scalars['Float'];
  __typename: 'poll_results_var_samp_fields';
}

/** aggregate variance on columns */
export interface poll_results_variance_fields {
  votes?: Scalars['Float'];
  __typename: 'poll_results_variance_fields';
}

/** select columns of table "poll" */
export type poll_select_column = 'created_at' | 'created_by' | 'id' | 'question';

/** update columns of table "poll" */
export type poll_update_column = 'created_at' | 'created_by' | 'id' | 'question';

export interface query_root {
  /** fetch data from the table: "online_users" */
  online_users: online_users[];
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate: online_users_aggregate;
  /** fetch data from the table: "option" */
  option: option[];
  /** fetch aggregated fields from the table: "option" */
  option_aggregate: option_aggregate;
  /** fetch data from the table: "option" using primary key columns */
  option_by_pk?: option;
  /** fetch data from the table: "poll" */
  poll: poll[];
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: poll_aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: poll;
  /** fetch data from the table: "poll_results" */
  poll_results: poll_results[];
  /** fetch aggregated fields from the table: "poll_results" */
  poll_results_aggregate: poll_results_aggregate;
  /** fetch data from the table: "user" */
  user: user[];
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: user_aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: user;
  /** fetch data from the table: "vote" */
  vote: vote[];
  /** fetch aggregated fields from the table: "vote" */
  vote_aggregate: vote_aggregate;
  /** fetch data from the table: "vote" using primary key columns */
  vote_by_pk?: vote;
  __typename: 'query_root';
}

export interface subscription_root {
  /** fetch data from the table: "online_users" */
  online_users: online_users[];
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate: online_users_aggregate;
  /** fetch data from the table in a streaming manner: "online_users" */
  online_users_stream: online_users[];
  /** fetch data from the table: "option" */
  option: option[];
  /** fetch aggregated fields from the table: "option" */
  option_aggregate: option_aggregate;
  /** fetch data from the table: "option" using primary key columns */
  option_by_pk?: option;
  /** fetch data from the table in a streaming manner: "option" */
  option_stream: option[];
  /** fetch data from the table: "poll" */
  poll: poll[];
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate: poll_aggregate;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: poll;
  /** fetch data from the table: "poll_results" */
  poll_results: poll_results[];
  /** fetch aggregated fields from the table: "poll_results" */
  poll_results_aggregate: poll_results_aggregate;
  /** fetch data from the table in a streaming manner: "poll_results" */
  poll_results_stream: poll_results[];
  /** fetch data from the table in a streaming manner: "poll" */
  poll_stream: poll[];
  /** fetch data from the table: "user" */
  user: user[];
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: user_aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: user;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: user[];
  /** fetch data from the table: "vote" */
  vote: vote[];
  /** fetch aggregated fields from the table: "vote" */
  vote_aggregate: vote_aggregate;
  /** fetch data from the table: "vote" using primary key columns */
  vote_by_pk?: vote;
  /** fetch data from the table in a streaming manner: "vote" */
  vote_stream: vote[];
  __typename: 'subscription_root';
}

/** columns and relationships of "user" */
export interface user {
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  last_seen_at?: Scalars['timestamptz'];
  online_ping?: Scalars['Boolean'];
  __typename: 'user';
}

/** aggregated selection of "user" */
export interface user_aggregate {
  aggregate?: user_aggregate_fields;
  nodes: user[];
  __typename: 'user_aggregate';
}

/** aggregate fields of "user" */
export interface user_aggregate_fields {
  count: Scalars['Int'];
  max?: user_max_fields;
  min?: user_min_fields;
  __typename: 'user_aggregate_fields';
}

/** unique or primary key constraints on table "user" */
export type user_constraint = 'user_pkey';

/** aggregate max on columns */
export interface user_max_fields {
  created_at?: Scalars['timestamptz'];
  id?: Scalars['uuid'];
  last_seen_at?: Scalars['timestamptz'];
  __typename: 'user_max_fields';
}

/** aggregate min on columns */
export interface user_min_fields {
  created_at?: Scalars['timestamptz'];
  id?: Scalars['uuid'];
  last_seen_at?: Scalars['timestamptz'];
  __typename: 'user_min_fields';
}

/** response of any mutation on the table "user" */
export interface user_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: user[];
  __typename: 'user_mutation_response';
}

/** select columns of table "user" */
export type user_select_column = 'created_at' | 'id' | 'last_seen_at' | 'online_ping';

/** update columns of table "user" */
export type user_update_column = 'created_at' | 'id' | 'last_seen_at' | 'online_ping';

/** columns and relationships of "vote" */
export interface vote {
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  created_by_user: user;
  created_by_user_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  option: option;
  option_id: Scalars['uuid'];
  __typename: 'vote';
}

/** aggregated selection of "vote" */
export interface vote_aggregate {
  aggregate?: vote_aggregate_fields;
  nodes: vote[];
  __typename: 'vote_aggregate';
}

/** aggregate fields of "vote" */
export interface vote_aggregate_fields {
  count: Scalars['Int'];
  max?: vote_max_fields;
  min?: vote_min_fields;
  __typename: 'vote_aggregate_fields';
}

/** unique or primary key constraints on table "vote" */
export type vote_constraint = 'vote_pkey';

/** aggregate max on columns */
export interface vote_max_fields {
  created_at?: Scalars['timestamptz'];
  created_by_user_id?: Scalars['uuid'];
  id?: Scalars['uuid'];
  option_id?: Scalars['uuid'];
  __typename: 'vote_max_fields';
}

/** aggregate min on columns */
export interface vote_min_fields {
  created_at?: Scalars['timestamptz'];
  created_by_user_id?: Scalars['uuid'];
  id?: Scalars['uuid'];
  option_id?: Scalars['uuid'];
  __typename: 'vote_min_fields';
}

/** response of any mutation on the table "vote" */
export interface vote_mutation_response {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: vote[];
  __typename: 'vote_mutation_response';
}

/** select columns of table "vote" */
export type vote_select_column = 'created_at' | 'created_by_user_id' | 'id' | 'option_id';

/** update columns of table "vote" */
export type vote_update_column = 'created_at' | 'created_by_user_id' | 'id' | 'option_id';

export type Query = query_root;
export type Mutation = mutation_root;
export type Subscription = subscription_root;

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {
  _eq?: Scalars['Boolean'] | null;
  _gt?: Scalars['Boolean'] | null;
  _gte?: Scalars['Boolean'] | null;
  _in?: Scalars['Boolean'][] | null;
  _is_null?: Scalars['Boolean'] | null;
  _lt?: Scalars['Boolean'] | null;
  _lte?: Scalars['Boolean'] | null;
  _neq?: Scalars['Boolean'] | null;
  _nin?: Scalars['Boolean'][] | null;
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {
  _eq?: Scalars['Int'] | null;
  _gt?: Scalars['Int'] | null;
  _gte?: Scalars['Int'] | null;
  _in?: Scalars['Int'][] | null;
  _is_null?: Scalars['Boolean'] | null;
  _lt?: Scalars['Int'] | null;
  _lte?: Scalars['Int'] | null;
  _neq?: Scalars['Int'] | null;
  _nin?: Scalars['Int'][] | null;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: Scalars['String'] | null;
  _gt?: Scalars['String'] | null;
  _gte?: Scalars['String'] | null;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Scalars['String'] | null;
  _in?: Scalars['String'][] | null;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Scalars['String'] | null;
  _is_null?: Scalars['Boolean'] | null;
  /** does the column match the given pattern */
  _like?: Scalars['String'] | null;
  _lt?: Scalars['String'] | null;
  _lte?: Scalars['String'] | null;
  _neq?: Scalars['String'] | null;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Scalars['String'] | null;
  _nin?: Scalars['String'][] | null;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Scalars['String'] | null;
  /** does the column NOT match the given pattern */
  _nlike?: Scalars['String'] | null;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Scalars['String'] | null;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Scalars['String'] | null;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Scalars['String'] | null;
  /** does the column match the given SQL regular expression */
  _similar?: Scalars['String'] | null;
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export interface bigint_comparison_exp {
  _eq?: Scalars['bigint'] | null;
  _gt?: Scalars['bigint'] | null;
  _gte?: Scalars['bigint'] | null;
  _in?: Scalars['bigint'][] | null;
  _is_null?: Scalars['Boolean'] | null;
  _lt?: Scalars['bigint'] | null;
  _lte?: Scalars['bigint'] | null;
  _neq?: Scalars['bigint'] | null;
  _nin?: Scalars['bigint'][] | null;
}

/** mutation root */
export interface mutation_rootRequest {
  /** delete data from the table: "option" */
  delete_option?: [
    {
      /** filter the rows which have to be deleted */
      where: option_bool_exp;
    },
    option_mutation_responseRequest,
  ];
  /** delete single row from the table: "option" */
  delete_option_by_pk?: [{ id: Scalars['uuid'] }, optionRequest];
  /** delete data from the table: "poll" */
  delete_poll?: [
    {
      /** filter the rows which have to be deleted */
      where: poll_bool_exp;
    },
    poll_mutation_responseRequest,
  ];
  /** delete single row from the table: "poll" */
  delete_poll_by_pk?: [{ id: Scalars['uuid'] }, pollRequest];
  /** delete data from the table: "user" */
  delete_user?: [
    {
      /** filter the rows which have to be deleted */
      where: user_bool_exp;
    },
    user_mutation_responseRequest,
  ];
  /** delete single row from the table: "user" */
  delete_user_by_pk?: [{ id: Scalars['uuid'] }, userRequest];
  /** delete data from the table: "vote" */
  delete_vote?: [
    {
      /** filter the rows which have to be deleted */
      where: vote_bool_exp;
    },
    vote_mutation_responseRequest,
  ];
  /** delete single row from the table: "vote" */
  delete_vote_by_pk?: [{ id: Scalars['uuid'] }, voteRequest];
  /** insert data into the table: "option" */
  insert_option?: [
    {
      /** the rows to be inserted */
      objects: option_insert_input[];
      /** upsert condition */
      on_conflict?: option_on_conflict | null;
    },
    option_mutation_responseRequest,
  ];
  /** insert a single row into the table: "option" */
  insert_option_one?: [
    {
      /** the row to be inserted */
      object: option_insert_input;
      /** upsert condition */
      on_conflict?: option_on_conflict | null;
    },
    optionRequest,
  ];
  /** insert data into the table: "poll" */
  insert_poll?: [
    {
      /** the rows to be inserted */
      objects: poll_insert_input[];
      /** upsert condition */
      on_conflict?: poll_on_conflict | null;
    },
    poll_mutation_responseRequest,
  ];
  /** insert a single row into the table: "poll" */
  insert_poll_one?: [
    {
      /** the row to be inserted */
      object: poll_insert_input;
      /** upsert condition */
      on_conflict?: poll_on_conflict | null;
    },
    pollRequest,
  ];
  /** insert data into the table: "user" */
  insert_user?: [
    {
      /** the rows to be inserted */
      objects: user_insert_input[];
      /** upsert condition */
      on_conflict?: user_on_conflict | null;
    },
    user_mutation_responseRequest,
  ];
  /** insert a single row into the table: "user" */
  insert_user_one?: [
    {
      /** the row to be inserted */
      object: user_insert_input;
      /** upsert condition */
      on_conflict?: user_on_conflict | null;
    },
    userRequest,
  ];
  /** insert data into the table: "vote" */
  insert_vote?: [
    {
      /** the rows to be inserted */
      objects: vote_insert_input[];
      /** upsert condition */
      on_conflict?: vote_on_conflict | null;
    },
    vote_mutation_responseRequest,
  ];
  /** insert a single row into the table: "vote" */
  insert_vote_one?: [
    {
      /** the row to be inserted */
      object: vote_insert_input;
      /** upsert condition */
      on_conflict?: vote_on_conflict | null;
    },
    voteRequest,
  ];
  /** update data of the table: "option" */
  update_option?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: option_set_input | null;
      /** filter the rows which have to be updated */
      where: option_bool_exp;
    },
    option_mutation_responseRequest,
  ];
  /** update single row of the table: "option" */
  update_option_by_pk?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: option_set_input | null;
      pk_columns: option_pk_columns_input;
    },
    optionRequest,
  ];
  /** update multiples rows of table: "option" */
  update_option_many?: [
    {
      /** updates to execute, in order */
      updates: option_updates[];
    },
    option_mutation_responseRequest,
  ];
  /** update data of the table: "poll" */
  update_poll?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: poll_set_input | null;
      /** filter the rows which have to be updated */
      where: poll_bool_exp;
    },
    poll_mutation_responseRequest,
  ];
  /** update single row of the table: "poll" */
  update_poll_by_pk?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: poll_set_input | null;
      pk_columns: poll_pk_columns_input;
    },
    pollRequest,
  ];
  /** update multiples rows of table: "poll" */
  update_poll_many?: [
    {
      /** updates to execute, in order */
      updates: poll_updates[];
    },
    poll_mutation_responseRequest,
  ];
  /** update data of the table: "user" */
  update_user?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: user_set_input | null;
      /** filter the rows which have to be updated */
      where: user_bool_exp;
    },
    user_mutation_responseRequest,
  ];
  /** update single row of the table: "user" */
  update_user_by_pk?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: user_set_input | null;
      pk_columns: user_pk_columns_input;
    },
    userRequest,
  ];
  /** update multiples rows of table: "user" */
  update_user_many?: [
    {
      /** updates to execute, in order */
      updates: user_updates[];
    },
    user_mutation_responseRequest,
  ];
  /** update data of the table: "vote" */
  update_vote?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: vote_set_input | null;
      /** filter the rows which have to be updated */
      where: vote_bool_exp;
    },
    vote_mutation_responseRequest,
  ];
  /** update single row of the table: "vote" */
  update_vote_by_pk?: [
    {
      /** sets the columns of the filtered rows to the given values */
      _set?: vote_set_input | null;
      pk_columns: vote_pk_columns_input;
    },
    voteRequest,
  ];
  /** update multiples rows of table: "vote" */
  update_vote_many?: [
    {
      /** updates to execute, in order */
      updates: vote_updates[];
    },
    vote_mutation_responseRequest,
  ];
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** columns and relationships of "online_users" */
export interface online_usersRequest {
  count?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregated selection of "online_users" */
export interface online_users_aggregateRequest {
  aggregate?: online_users_aggregate_fieldsRequest;
  nodes?: online_usersRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate fields of "online_users" */
export interface online_users_aggregate_fieldsRequest {
  avg?: online_users_avg_fieldsRequest;
  count?: [{ columns?: online_users_select_column[] | null; distinct?: Scalars['Boolean'] | null }] | boolean | number;
  max?: online_users_max_fieldsRequest;
  min?: online_users_min_fieldsRequest;
  stddev?: online_users_stddev_fieldsRequest;
  stddev_pop?: online_users_stddev_pop_fieldsRequest;
  stddev_samp?: online_users_stddev_samp_fieldsRequest;
  sum?: online_users_sum_fieldsRequest;
  var_pop?: online_users_var_pop_fieldsRequest;
  var_samp?: online_users_var_samp_fieldsRequest;
  variance?: online_users_variance_fieldsRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate avg on columns */
export interface online_users_avg_fieldsRequest {
  count?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Boolean expression to filter rows from the table "online_users". All fields are combined with a logical 'AND'. */
export interface online_users_bool_exp {
  _and?: online_users_bool_exp[] | null;
  _not?: online_users_bool_exp | null;
  _or?: online_users_bool_exp[] | null;
  count?: bigint_comparison_exp | null;
}

/** aggregate max on columns */
export interface online_users_max_fieldsRequest {
  count?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate min on columns */
export interface online_users_min_fieldsRequest {
  count?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Ordering options when selecting data from "online_users". */
export interface online_users_order_by {
  count?: order_by | null;
}

/** aggregate stddev on columns */
export interface online_users_stddev_fieldsRequest {
  count?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate stddev_pop on columns */
export interface online_users_stddev_pop_fieldsRequest {
  count?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate stddev_samp on columns */
export interface online_users_stddev_samp_fieldsRequest {
  count?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Streaming cursor of the table "online_users" */
export interface online_users_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: online_users_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: cursor_ordering | null;
}

/** Initial value of the column from where the streaming should start */
export interface online_users_stream_cursor_value_input {
  count?: Scalars['bigint'] | null;
}

/** aggregate sum on columns */
export interface online_users_sum_fieldsRequest {
  count?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate var_pop on columns */
export interface online_users_var_pop_fieldsRequest {
  count?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate var_samp on columns */
export interface online_users_var_samp_fieldsRequest {
  count?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate variance on columns */
export interface online_users_variance_fieldsRequest {
  count?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** columns and relationships of "option" */
export interface optionRequest {
  id?: boolean | number;
  /** An object relationship */
  poll?: pollRequest;
  poll_id?: boolean | number;
  text?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregated selection of "option" */
export interface option_aggregateRequest {
  aggregate?: option_aggregate_fieldsRequest;
  nodes?: optionRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface option_aggregate_bool_exp {
  count?: option_aggregate_bool_exp_count | null;
}

export interface option_aggregate_bool_exp_count {
  arguments?: option_select_column[] | null;
  distinct?: Scalars['Boolean'] | null;
  filter?: option_bool_exp | null;
  predicate: Int_comparison_exp;
}

/** aggregate fields of "option" */
export interface option_aggregate_fieldsRequest {
  count?: [{ columns?: option_select_column[] | null; distinct?: Scalars['Boolean'] | null }] | boolean | number;
  max?: option_max_fieldsRequest;
  min?: option_min_fieldsRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by aggregate values of table "option" */
export interface option_aggregate_order_by {
  count?: order_by | null;
  max?: option_max_order_by | null;
  min?: option_min_order_by | null;
}

/** input type for inserting array relation for remote table "option" */
export interface option_arr_rel_insert_input {
  data: option_insert_input[];
  /** upsert condition */
  on_conflict?: option_on_conflict | null;
}

/** Boolean expression to filter rows from the table "option". All fields are combined with a logical 'AND'. */
export interface option_bool_exp {
  _and?: option_bool_exp[] | null;
  _not?: option_bool_exp | null;
  _or?: option_bool_exp[] | null;
  id?: uuid_comparison_exp | null;
  poll?: poll_bool_exp | null;
  poll_id?: uuid_comparison_exp | null;
  text?: String_comparison_exp | null;
}

/** input type for inserting data into table "option" */
export interface option_insert_input {
  id?: Scalars['uuid'] | null;
  poll?: poll_obj_rel_insert_input | null;
  poll_id?: Scalars['uuid'] | null;
  text?: Scalars['String'] | null;
}

/** aggregate max on columns */
export interface option_max_fieldsRequest {
  id?: boolean | number;
  poll_id?: boolean | number;
  text?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by max() on columns of table "option" */
export interface option_max_order_by {
  id?: order_by | null;
  poll_id?: order_by | null;
  text?: order_by | null;
}

/** aggregate min on columns */
export interface option_min_fieldsRequest {
  id?: boolean | number;
  poll_id?: boolean | number;
  text?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** order by min() on columns of table "option" */
export interface option_min_order_by {
  id?: order_by | null;
  poll_id?: order_by | null;
  text?: order_by | null;
}

/** response of any mutation on the table "option" */
export interface option_mutation_responseRequest {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number;
  /** data from the rows affected by the mutation */
  returning?: optionRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** input type for inserting object relation for remote table "option" */
export interface option_obj_rel_insert_input {
  data: option_insert_input;
  /** upsert condition */
  on_conflict?: option_on_conflict | null;
}

/** on_conflict condition type for table "option" */
export interface option_on_conflict {
  constraint: option_constraint;
  update_columns: option_update_column[];
  where?: option_bool_exp | null;
}

/** Ordering options when selecting data from "option". */
export interface option_order_by {
  id?: order_by | null;
  poll?: poll_order_by | null;
  poll_id?: order_by | null;
  text?: order_by | null;
}

/** primary key columns input for table: option */
export interface option_pk_columns_input {
  id: Scalars['uuid'];
}

/** input type for updating data in table "option" */
export interface option_set_input {
  id?: Scalars['uuid'] | null;
  poll_id?: Scalars['uuid'] | null;
  text?: Scalars['String'] | null;
}

/** Streaming cursor of the table "option" */
export interface option_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: option_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: cursor_ordering | null;
}

/** Initial value of the column from where the streaming should start */
export interface option_stream_cursor_value_input {
  id?: Scalars['uuid'] | null;
  poll_id?: Scalars['uuid'] | null;
  text?: Scalars['String'] | null;
}

export interface option_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: option_set_input | null;
  /** filter the rows which have to be updated */
  where: option_bool_exp;
}

/** columns and relationships of "poll" */
export interface pollRequest {
  created_at?: boolean | number;
  created_by?: boolean | number;
  id?: boolean | number;
  /** An array relationship */
  options?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: option_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: option_order_by[] | null;
          /** filter the rows returned */
          where?: option_bool_exp | null;
        },
        optionRequest,
      ]
    | optionRequest;
  /** An aggregate relationship */
  options_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: option_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: option_order_by[] | null;
          /** filter the rows returned */
          where?: option_bool_exp | null;
        },
        option_aggregateRequest,
      ]
    | option_aggregateRequest;
  question?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregated selection of "poll" */
export interface poll_aggregateRequest {
  aggregate?: poll_aggregate_fieldsRequest;
  nodes?: pollRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate fields of "poll" */
export interface poll_aggregate_fieldsRequest {
  count?: [{ columns?: poll_select_column[] | null; distinct?: Scalars['Boolean'] | null }] | boolean | number;
  max?: poll_max_fieldsRequest;
  min?: poll_min_fieldsRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Boolean expression to filter rows from the table "poll". All fields are combined with a logical 'AND'. */
export interface poll_bool_exp {
  _and?: poll_bool_exp[] | null;
  _not?: poll_bool_exp | null;
  _or?: poll_bool_exp[] | null;
  created_at?: timestamptz_comparison_exp | null;
  created_by?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  options?: option_bool_exp | null;
  options_aggregate?: option_aggregate_bool_exp | null;
  question?: String_comparison_exp | null;
}

/** input type for inserting data into table "poll" */
export interface poll_insert_input {
  created_at?: Scalars['timestamptz'] | null;
  created_by?: Scalars['uuid'] | null;
  id?: Scalars['uuid'] | null;
  options?: option_arr_rel_insert_input | null;
  question?: Scalars['String'] | null;
}

/** aggregate max on columns */
export interface poll_max_fieldsRequest {
  created_at?: boolean | number;
  created_by?: boolean | number;
  id?: boolean | number;
  question?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate min on columns */
export interface poll_min_fieldsRequest {
  created_at?: boolean | number;
  created_by?: boolean | number;
  id?: boolean | number;
  question?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** response of any mutation on the table "poll" */
export interface poll_mutation_responseRequest {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number;
  /** data from the rows affected by the mutation */
  returning?: pollRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** input type for inserting object relation for remote table "poll" */
export interface poll_obj_rel_insert_input {
  data: poll_insert_input;
  /** upsert condition */
  on_conflict?: poll_on_conflict | null;
}

/** on_conflict condition type for table "poll" */
export interface poll_on_conflict {
  constraint: poll_constraint;
  update_columns: poll_update_column[];
  where?: poll_bool_exp | null;
}

/** Ordering options when selecting data from "poll". */
export interface poll_order_by {
  created_at?: order_by | null;
  created_by?: order_by | null;
  id?: order_by | null;
  options_aggregate?: option_aggregate_order_by | null;
  question?: order_by | null;
}

/** primary key columns input for table: poll */
export interface poll_pk_columns_input {
  id: Scalars['uuid'];
}

/** columns and relationships of "poll_results" */
export interface poll_resultsRequest {
  /** An object relationship */
  option?: optionRequest;
  option_id?: boolean | number;
  /** An object relationship */
  poll?: pollRequest;
  poll_id?: boolean | number;
  votes?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregated selection of "poll_results" */
export interface poll_results_aggregateRequest {
  aggregate?: poll_results_aggregate_fieldsRequest;
  nodes?: poll_resultsRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate fields of "poll_results" */
export interface poll_results_aggregate_fieldsRequest {
  avg?: poll_results_avg_fieldsRequest;
  count?: [{ columns?: poll_results_select_column[] | null; distinct?: Scalars['Boolean'] | null }] | boolean | number;
  max?: poll_results_max_fieldsRequest;
  min?: poll_results_min_fieldsRequest;
  stddev?: poll_results_stddev_fieldsRequest;
  stddev_pop?: poll_results_stddev_pop_fieldsRequest;
  stddev_samp?: poll_results_stddev_samp_fieldsRequest;
  sum?: poll_results_sum_fieldsRequest;
  var_pop?: poll_results_var_pop_fieldsRequest;
  var_samp?: poll_results_var_samp_fieldsRequest;
  variance?: poll_results_variance_fieldsRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate avg on columns */
export interface poll_results_avg_fieldsRequest {
  votes?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Boolean expression to filter rows from the table "poll_results". All fields are combined with a logical 'AND'. */
export interface poll_results_bool_exp {
  _and?: poll_results_bool_exp[] | null;
  _not?: poll_results_bool_exp | null;
  _or?: poll_results_bool_exp[] | null;
  option?: option_bool_exp | null;
  option_id?: uuid_comparison_exp | null;
  poll?: poll_bool_exp | null;
  poll_id?: uuid_comparison_exp | null;
  votes?: bigint_comparison_exp | null;
}

/** aggregate max on columns */
export interface poll_results_max_fieldsRequest {
  option_id?: boolean | number;
  poll_id?: boolean | number;
  votes?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate min on columns */
export interface poll_results_min_fieldsRequest {
  option_id?: boolean | number;
  poll_id?: boolean | number;
  votes?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Ordering options when selecting data from "poll_results". */
export interface poll_results_order_by {
  option?: option_order_by | null;
  option_id?: order_by | null;
  poll?: poll_order_by | null;
  poll_id?: order_by | null;
  votes?: order_by | null;
}

/** aggregate stddev on columns */
export interface poll_results_stddev_fieldsRequest {
  votes?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate stddev_pop on columns */
export interface poll_results_stddev_pop_fieldsRequest {
  votes?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate stddev_samp on columns */
export interface poll_results_stddev_samp_fieldsRequest {
  votes?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Streaming cursor of the table "poll_results" */
export interface poll_results_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: poll_results_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: cursor_ordering | null;
}

/** Initial value of the column from where the streaming should start */
export interface poll_results_stream_cursor_value_input {
  option_id?: Scalars['uuid'] | null;
  poll_id?: Scalars['uuid'] | null;
  votes?: Scalars['bigint'] | null;
}

/** aggregate sum on columns */
export interface poll_results_sum_fieldsRequest {
  votes?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate var_pop on columns */
export interface poll_results_var_pop_fieldsRequest {
  votes?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate var_samp on columns */
export interface poll_results_var_samp_fieldsRequest {
  votes?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate variance on columns */
export interface poll_results_variance_fieldsRequest {
  votes?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** input type for updating data in table "poll" */
export interface poll_set_input {
  created_at?: Scalars['timestamptz'] | null;
  created_by?: Scalars['uuid'] | null;
  id?: Scalars['uuid'] | null;
  question?: Scalars['String'] | null;
}

/** Streaming cursor of the table "poll" */
export interface poll_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: poll_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: cursor_ordering | null;
}

/** Initial value of the column from where the streaming should start */
export interface poll_stream_cursor_value_input {
  created_at?: Scalars['timestamptz'] | null;
  created_by?: Scalars['uuid'] | null;
  id?: Scalars['uuid'] | null;
  question?: Scalars['String'] | null;
}

export interface poll_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: poll_set_input | null;
  /** filter the rows which have to be updated */
  where: poll_bool_exp;
}

export interface query_rootRequest {
  /** fetch data from the table: "online_users" */
  online_users?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: online_users_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: online_users_order_by[] | null;
          /** filter the rows returned */
          where?: online_users_bool_exp | null;
        },
        online_usersRequest,
      ]
    | online_usersRequest;
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: online_users_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: online_users_order_by[] | null;
          /** filter the rows returned */
          where?: online_users_bool_exp | null;
        },
        online_users_aggregateRequest,
      ]
    | online_users_aggregateRequest;
  /** fetch data from the table: "option" */
  option?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: option_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: option_order_by[] | null;
          /** filter the rows returned */
          where?: option_bool_exp | null;
        },
        optionRequest,
      ]
    | optionRequest;
  /** fetch aggregated fields from the table: "option" */
  option_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: option_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: option_order_by[] | null;
          /** filter the rows returned */
          where?: option_bool_exp | null;
        },
        option_aggregateRequest,
      ]
    | option_aggregateRequest;
  /** fetch data from the table: "option" using primary key columns */
  option_by_pk?: [{ id: Scalars['uuid'] }, optionRequest];
  /** fetch data from the table: "poll" */
  poll?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: poll_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: poll_order_by[] | null;
          /** filter the rows returned */
          where?: poll_bool_exp | null;
        },
        pollRequest,
      ]
    | pollRequest;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: poll_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: poll_order_by[] | null;
          /** filter the rows returned */
          where?: poll_bool_exp | null;
        },
        poll_aggregateRequest,
      ]
    | poll_aggregateRequest;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: [{ id: Scalars['uuid'] }, pollRequest];
  /** fetch data from the table: "poll_results" */
  poll_results?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: poll_results_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: poll_results_order_by[] | null;
          /** filter the rows returned */
          where?: poll_results_bool_exp | null;
        },
        poll_resultsRequest,
      ]
    | poll_resultsRequest;
  /** fetch aggregated fields from the table: "poll_results" */
  poll_results_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: poll_results_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: poll_results_order_by[] | null;
          /** filter the rows returned */
          where?: poll_results_bool_exp | null;
        },
        poll_results_aggregateRequest,
      ]
    | poll_results_aggregateRequest;
  /** fetch data from the table: "user" */
  user?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: user_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: user_order_by[] | null;
          /** filter the rows returned */
          where?: user_bool_exp | null;
        },
        userRequest,
      ]
    | userRequest;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: user_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: user_order_by[] | null;
          /** filter the rows returned */
          where?: user_bool_exp | null;
        },
        user_aggregateRequest,
      ]
    | user_aggregateRequest;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: [{ id: Scalars['uuid'] }, userRequest];
  /** fetch data from the table: "vote" */
  vote?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: vote_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: vote_order_by[] | null;
          /** filter the rows returned */
          where?: vote_bool_exp | null;
        },
        voteRequest,
      ]
    | voteRequest;
  /** fetch aggregated fields from the table: "vote" */
  vote_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: vote_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: vote_order_by[] | null;
          /** filter the rows returned */
          where?: vote_bool_exp | null;
        },
        vote_aggregateRequest,
      ]
    | vote_aggregateRequest;
  /** fetch data from the table: "vote" using primary key columns */
  vote_by_pk?: [{ id: Scalars['uuid'] }, voteRequest];
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface subscription_rootRequest {
  /** fetch data from the table: "online_users" */
  online_users?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: online_users_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: online_users_order_by[] | null;
          /** filter the rows returned */
          where?: online_users_bool_exp | null;
        },
        online_usersRequest,
      ]
    | online_usersRequest;
  /** fetch aggregated fields from the table: "online_users" */
  online_users_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: online_users_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: online_users_order_by[] | null;
          /** filter the rows returned */
          where?: online_users_bool_exp | null;
        },
        online_users_aggregateRequest,
      ]
    | online_users_aggregateRequest;
  /** fetch data from the table in a streaming manner: "online_users" */
  online_users_stream?: [
    {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int'];
      /** cursor to stream the results returned by the query */
      cursor: (online_users_stream_cursor_input | null)[];
      /** filter the rows returned */
      where?: online_users_bool_exp | null;
    },
    online_usersRequest,
  ];
  /** fetch data from the table: "option" */
  option?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: option_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: option_order_by[] | null;
          /** filter the rows returned */
          where?: option_bool_exp | null;
        },
        optionRequest,
      ]
    | optionRequest;
  /** fetch aggregated fields from the table: "option" */
  option_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: option_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: option_order_by[] | null;
          /** filter the rows returned */
          where?: option_bool_exp | null;
        },
        option_aggregateRequest,
      ]
    | option_aggregateRequest;
  /** fetch data from the table: "option" using primary key columns */
  option_by_pk?: [{ id: Scalars['uuid'] }, optionRequest];
  /** fetch data from the table in a streaming manner: "option" */
  option_stream?: [
    {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int'];
      /** cursor to stream the results returned by the query */
      cursor: (option_stream_cursor_input | null)[];
      /** filter the rows returned */
      where?: option_bool_exp | null;
    },
    optionRequest,
  ];
  /** fetch data from the table: "poll" */
  poll?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: poll_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: poll_order_by[] | null;
          /** filter the rows returned */
          where?: poll_bool_exp | null;
        },
        pollRequest,
      ]
    | pollRequest;
  /** fetch aggregated fields from the table: "poll" */
  poll_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: poll_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: poll_order_by[] | null;
          /** filter the rows returned */
          where?: poll_bool_exp | null;
        },
        poll_aggregateRequest,
      ]
    | poll_aggregateRequest;
  /** fetch data from the table: "poll" using primary key columns */
  poll_by_pk?: [{ id: Scalars['uuid'] }, pollRequest];
  /** fetch data from the table: "poll_results" */
  poll_results?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: poll_results_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: poll_results_order_by[] | null;
          /** filter the rows returned */
          where?: poll_results_bool_exp | null;
        },
        poll_resultsRequest,
      ]
    | poll_resultsRequest;
  /** fetch aggregated fields from the table: "poll_results" */
  poll_results_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: poll_results_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: poll_results_order_by[] | null;
          /** filter the rows returned */
          where?: poll_results_bool_exp | null;
        },
        poll_results_aggregateRequest,
      ]
    | poll_results_aggregateRequest;
  /** fetch data from the table in a streaming manner: "poll_results" */
  poll_results_stream?: [
    {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int'];
      /** cursor to stream the results returned by the query */
      cursor: (poll_results_stream_cursor_input | null)[];
      /** filter the rows returned */
      where?: poll_results_bool_exp | null;
    },
    poll_resultsRequest,
  ];
  /** fetch data from the table in a streaming manner: "poll" */
  poll_stream?: [
    {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int'];
      /** cursor to stream the results returned by the query */
      cursor: (poll_stream_cursor_input | null)[];
      /** filter the rows returned */
      where?: poll_bool_exp | null;
    },
    pollRequest,
  ];
  /** fetch data from the table: "user" */
  user?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: user_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: user_order_by[] | null;
          /** filter the rows returned */
          where?: user_bool_exp | null;
        },
        userRequest,
      ]
    | userRequest;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: user_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: user_order_by[] | null;
          /** filter the rows returned */
          where?: user_bool_exp | null;
        },
        user_aggregateRequest,
      ]
    | user_aggregateRequest;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: [{ id: Scalars['uuid'] }, userRequest];
  /** fetch data from the table in a streaming manner: "user" */
  user_stream?: [
    {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int'];
      /** cursor to stream the results returned by the query */
      cursor: (user_stream_cursor_input | null)[];
      /** filter the rows returned */
      where?: user_bool_exp | null;
    },
    userRequest,
  ];
  /** fetch data from the table: "vote" */
  vote?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: vote_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: vote_order_by[] | null;
          /** filter the rows returned */
          where?: vote_bool_exp | null;
        },
        voteRequest,
      ]
    | voteRequest;
  /** fetch aggregated fields from the table: "vote" */
  vote_aggregate?:
    | [
        {
          /** distinct select on columns */
          distinct_on?: vote_select_column[] | null;
          /** limit the number of rows returned */
          limit?: Scalars['Int'] | null;
          /** skip the first n rows. Use only with order_by */
          offset?: Scalars['Int'] | null;
          /** sort the rows by one or more columns */
          order_by?: vote_order_by[] | null;
          /** filter the rows returned */
          where?: vote_bool_exp | null;
        },
        vote_aggregateRequest,
      ]
    | vote_aggregateRequest;
  /** fetch data from the table: "vote" using primary key columns */
  vote_by_pk?: [{ id: Scalars['uuid'] }, voteRequest];
  /** fetch data from the table in a streaming manner: "vote" */
  vote_stream?: [
    {
      /** maximum number of rows returned in a single batch */
      batch_size: Scalars['Int'];
      /** cursor to stream the results returned by the query */
      cursor: (vote_stream_cursor_input | null)[];
      /** filter the rows returned */
      where?: vote_bool_exp | null;
    },
    voteRequest,
  ];
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {
  _eq?: Scalars['timestamptz'] | null;
  _gt?: Scalars['timestamptz'] | null;
  _gte?: Scalars['timestamptz'] | null;
  _in?: Scalars['timestamptz'][] | null;
  _is_null?: Scalars['Boolean'] | null;
  _lt?: Scalars['timestamptz'] | null;
  _lte?: Scalars['timestamptz'] | null;
  _neq?: Scalars['timestamptz'] | null;
  _nin?: Scalars['timestamptz'][] | null;
}

/** columns and relationships of "user" */
export interface userRequest {
  created_at?: boolean | number;
  id?: boolean | number;
  last_seen_at?: boolean | number;
  online_ping?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregated selection of "user" */
export interface user_aggregateRequest {
  aggregate?: user_aggregate_fieldsRequest;
  nodes?: userRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate fields of "user" */
export interface user_aggregate_fieldsRequest {
  count?: [{ columns?: user_select_column[] | null; distinct?: Scalars['Boolean'] | null }] | boolean | number;
  max?: user_max_fieldsRequest;
  min?: user_min_fieldsRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface user_bool_exp {
  _and?: user_bool_exp[] | null;
  _not?: user_bool_exp | null;
  _or?: user_bool_exp[] | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  last_seen_at?: timestamptz_comparison_exp | null;
  online_ping?: Boolean_comparison_exp | null;
}

/** input type for inserting data into table "user" */
export interface user_insert_input {
  created_at?: Scalars['timestamptz'] | null;
  id?: Scalars['uuid'] | null;
  last_seen_at?: Scalars['timestamptz'] | null;
  online_ping?: Scalars['Boolean'] | null;
}

/** aggregate max on columns */
export interface user_max_fieldsRequest {
  created_at?: boolean | number;
  id?: boolean | number;
  last_seen_at?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate min on columns */
export interface user_min_fieldsRequest {
  created_at?: boolean | number;
  id?: boolean | number;
  last_seen_at?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** response of any mutation on the table "user" */
export interface user_mutation_responseRequest {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number;
  /** data from the rows affected by the mutation */
  returning?: userRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** input type for inserting object relation for remote table "user" */
export interface user_obj_rel_insert_input {
  data: user_insert_input;
  /** upsert condition */
  on_conflict?: user_on_conflict | null;
}

/** on_conflict condition type for table "user" */
export interface user_on_conflict {
  constraint: user_constraint;
  update_columns: user_update_column[];
  where?: user_bool_exp | null;
}

/** Ordering options when selecting data from "user". */
export interface user_order_by {
  created_at?: order_by | null;
  id?: order_by | null;
  last_seen_at?: order_by | null;
  online_ping?: order_by | null;
}

/** primary key columns input for table: user */
export interface user_pk_columns_input {
  id: Scalars['uuid'];
}

/** input type for updating data in table "user" */
export interface user_set_input {
  created_at?: Scalars['timestamptz'] | null;
  id?: Scalars['uuid'] | null;
  last_seen_at?: Scalars['timestamptz'] | null;
  online_ping?: Scalars['Boolean'] | null;
}

/** Streaming cursor of the table "user" */
export interface user_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: user_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: cursor_ordering | null;
}

/** Initial value of the column from where the streaming should start */
export interface user_stream_cursor_value_input {
  created_at?: Scalars['timestamptz'] | null;
  id?: Scalars['uuid'] | null;
  last_seen_at?: Scalars['timestamptz'] | null;
  online_ping?: Scalars['Boolean'] | null;
}

export interface user_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: user_set_input | null;
  /** filter the rows which have to be updated */
  where: user_bool_exp;
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  _eq?: Scalars['uuid'] | null;
  _gt?: Scalars['uuid'] | null;
  _gte?: Scalars['uuid'] | null;
  _in?: Scalars['uuid'][] | null;
  _is_null?: Scalars['Boolean'] | null;
  _lt?: Scalars['uuid'] | null;
  _lte?: Scalars['uuid'] | null;
  _neq?: Scalars['uuid'] | null;
  _nin?: Scalars['uuid'][] | null;
}

/** columns and relationships of "vote" */
export interface voteRequest {
  created_at?: boolean | number;
  /** An object relationship */
  created_by_user?: userRequest;
  created_by_user_id?: boolean | number;
  id?: boolean | number;
  /** An object relationship */
  option?: optionRequest;
  option_id?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregated selection of "vote" */
export interface vote_aggregateRequest {
  aggregate?: vote_aggregate_fieldsRequest;
  nodes?: voteRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate fields of "vote" */
export interface vote_aggregate_fieldsRequest {
  count?: [{ columns?: vote_select_column[] | null; distinct?: Scalars['Boolean'] | null }] | boolean | number;
  max?: vote_max_fieldsRequest;
  min?: vote_min_fieldsRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** Boolean expression to filter rows from the table "vote". All fields are combined with a logical 'AND'. */
export interface vote_bool_exp {
  _and?: vote_bool_exp[] | null;
  _not?: vote_bool_exp | null;
  _or?: vote_bool_exp[] | null;
  created_at?: timestamptz_comparison_exp | null;
  created_by_user?: user_bool_exp | null;
  created_by_user_id?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  option?: option_bool_exp | null;
  option_id?: uuid_comparison_exp | null;
}

/** input type for inserting data into table "vote" */
export interface vote_insert_input {
  created_at?: Scalars['timestamptz'] | null;
  created_by_user?: user_obj_rel_insert_input | null;
  created_by_user_id?: Scalars['uuid'] | null;
  id?: Scalars['uuid'] | null;
  option?: option_obj_rel_insert_input | null;
  option_id?: Scalars['uuid'] | null;
}

/** aggregate max on columns */
export interface vote_max_fieldsRequest {
  created_at?: boolean | number;
  created_by_user_id?: boolean | number;
  id?: boolean | number;
  option_id?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** aggregate min on columns */
export interface vote_min_fieldsRequest {
  created_at?: boolean | number;
  created_by_user_id?: boolean | number;
  id?: boolean | number;
  option_id?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** response of any mutation on the table "vote" */
export interface vote_mutation_responseRequest {
  /** number of rows affected by the mutation */
  affected_rows?: boolean | number;
  /** data from the rows affected by the mutation */
  returning?: voteRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

/** on_conflict condition type for table "vote" */
export interface vote_on_conflict {
  constraint: vote_constraint;
  update_columns: vote_update_column[];
  where?: vote_bool_exp | null;
}

/** Ordering options when selecting data from "vote". */
export interface vote_order_by {
  created_at?: order_by | null;
  created_by_user?: user_order_by | null;
  created_by_user_id?: order_by | null;
  id?: order_by | null;
  option?: option_order_by | null;
  option_id?: order_by | null;
}

/** primary key columns input for table: vote */
export interface vote_pk_columns_input {
  id: Scalars['uuid'];
}

/** input type for updating data in table "vote" */
export interface vote_set_input {
  created_at?: Scalars['timestamptz'] | null;
  created_by_user_id?: Scalars['uuid'] | null;
  id?: Scalars['uuid'] | null;
  option_id?: Scalars['uuid'] | null;
}

/** Streaming cursor of the table "vote" */
export interface vote_stream_cursor_input {
  /** Stream column input with initial value */
  initial_value: vote_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: cursor_ordering | null;
}

/** Initial value of the column from where the streaming should start */
export interface vote_stream_cursor_value_input {
  created_at?: Scalars['timestamptz'] | null;
  created_by_user_id?: Scalars['uuid'] | null;
  id?: Scalars['uuid'] | null;
  option_id?: Scalars['uuid'] | null;
}

export interface vote_updates {
  /** sets the columns of the filtered rows to the given values */
  _set?: vote_set_input | null;
  /** filter the rows which have to be updated */
  where: vote_bool_exp;
}

export type QueryRequest = query_rootRequest;
export type MutationRequest = mutation_rootRequest;
export type SubscriptionRequest = subscription_rootRequest;

const mutation_root_possibleTypes: string[] = ['mutation_root'];
export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"');
  return mutation_root_possibleTypes.includes(obj.__typename);
};

const online_users_possibleTypes: string[] = ['online_users'];
export const isonline_users = (obj?: { __typename?: any } | null): obj is online_users => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users"');
  return online_users_possibleTypes.includes(obj.__typename);
};

const online_users_aggregate_possibleTypes: string[] = ['online_users_aggregate'];
export const isonline_users_aggregate = (obj?: { __typename?: any } | null): obj is online_users_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_aggregate"');
  return online_users_aggregate_possibleTypes.includes(obj.__typename);
};

const online_users_aggregate_fields_possibleTypes: string[] = ['online_users_aggregate_fields'];
export const isonline_users_aggregate_fields = (
  obj?: { __typename?: any } | null,
): obj is online_users_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_aggregate_fields"');
  return online_users_aggregate_fields_possibleTypes.includes(obj.__typename);
};

const online_users_avg_fields_possibleTypes: string[] = ['online_users_avg_fields'];
export const isonline_users_avg_fields = (obj?: { __typename?: any } | null): obj is online_users_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_avg_fields"');
  return online_users_avg_fields_possibleTypes.includes(obj.__typename);
};

const online_users_max_fields_possibleTypes: string[] = ['online_users_max_fields'];
export const isonline_users_max_fields = (obj?: { __typename?: any } | null): obj is online_users_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_max_fields"');
  return online_users_max_fields_possibleTypes.includes(obj.__typename);
};

const online_users_min_fields_possibleTypes: string[] = ['online_users_min_fields'];
export const isonline_users_min_fields = (obj?: { __typename?: any } | null): obj is online_users_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_min_fields"');
  return online_users_min_fields_possibleTypes.includes(obj.__typename);
};

const online_users_stddev_fields_possibleTypes: string[] = ['online_users_stddev_fields'];
export const isonline_users_stddev_fields = (obj?: { __typename?: any } | null): obj is online_users_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_stddev_fields"');
  return online_users_stddev_fields_possibleTypes.includes(obj.__typename);
};

const online_users_stddev_pop_fields_possibleTypes: string[] = ['online_users_stddev_pop_fields'];
export const isonline_users_stddev_pop_fields = (
  obj?: { __typename?: any } | null,
): obj is online_users_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_stddev_pop_fields"');
  return online_users_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};

const online_users_stddev_samp_fields_possibleTypes: string[] = ['online_users_stddev_samp_fields'];
export const isonline_users_stddev_samp_fields = (
  obj?: { __typename?: any } | null,
): obj is online_users_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_stddev_samp_fields"');
  return online_users_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};

const online_users_sum_fields_possibleTypes: string[] = ['online_users_sum_fields'];
export const isonline_users_sum_fields = (obj?: { __typename?: any } | null): obj is online_users_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_sum_fields"');
  return online_users_sum_fields_possibleTypes.includes(obj.__typename);
};

const online_users_var_pop_fields_possibleTypes: string[] = ['online_users_var_pop_fields'];
export const isonline_users_var_pop_fields = (
  obj?: { __typename?: any } | null,
): obj is online_users_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_var_pop_fields"');
  return online_users_var_pop_fields_possibleTypes.includes(obj.__typename);
};

const online_users_var_samp_fields_possibleTypes: string[] = ['online_users_var_samp_fields'];
export const isonline_users_var_samp_fields = (
  obj?: { __typename?: any } | null,
): obj is online_users_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_var_samp_fields"');
  return online_users_var_samp_fields_possibleTypes.includes(obj.__typename);
};

const online_users_variance_fields_possibleTypes: string[] = ['online_users_variance_fields'];
export const isonline_users_variance_fields = (
  obj?: { __typename?: any } | null,
): obj is online_users_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isonline_users_variance_fields"');
  return online_users_variance_fields_possibleTypes.includes(obj.__typename);
};

const option_possibleTypes: string[] = ['option'];
export const isoption = (obj?: { __typename?: any } | null): obj is option => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoption"');
  return option_possibleTypes.includes(obj.__typename);
};

const option_aggregate_possibleTypes: string[] = ['option_aggregate'];
export const isoption_aggregate = (obj?: { __typename?: any } | null): obj is option_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoption_aggregate"');
  return option_aggregate_possibleTypes.includes(obj.__typename);
};

const option_aggregate_fields_possibleTypes: string[] = ['option_aggregate_fields'];
export const isoption_aggregate_fields = (obj?: { __typename?: any } | null): obj is option_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoption_aggregate_fields"');
  return option_aggregate_fields_possibleTypes.includes(obj.__typename);
};

const option_max_fields_possibleTypes: string[] = ['option_max_fields'];
export const isoption_max_fields = (obj?: { __typename?: any } | null): obj is option_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoption_max_fields"');
  return option_max_fields_possibleTypes.includes(obj.__typename);
};

const option_min_fields_possibleTypes: string[] = ['option_min_fields'];
export const isoption_min_fields = (obj?: { __typename?: any } | null): obj is option_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoption_min_fields"');
  return option_min_fields_possibleTypes.includes(obj.__typename);
};

const option_mutation_response_possibleTypes: string[] = ['option_mutation_response'];
export const isoption_mutation_response = (obj?: { __typename?: any } | null): obj is option_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isoption_mutation_response"');
  return option_mutation_response_possibleTypes.includes(obj.__typename);
};

const poll_possibleTypes: string[] = ['poll'];
export const ispoll = (obj?: { __typename?: any } | null): obj is poll => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll"');
  return poll_possibleTypes.includes(obj.__typename);
};

const poll_aggregate_possibleTypes: string[] = ['poll_aggregate'];
export const ispoll_aggregate = (obj?: { __typename?: any } | null): obj is poll_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_aggregate"');
  return poll_aggregate_possibleTypes.includes(obj.__typename);
};

const poll_aggregate_fields_possibleTypes: string[] = ['poll_aggregate_fields'];
export const ispoll_aggregate_fields = (obj?: { __typename?: any } | null): obj is poll_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_aggregate_fields"');
  return poll_aggregate_fields_possibleTypes.includes(obj.__typename);
};

const poll_max_fields_possibleTypes: string[] = ['poll_max_fields'];
export const ispoll_max_fields = (obj?: { __typename?: any } | null): obj is poll_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_max_fields"');
  return poll_max_fields_possibleTypes.includes(obj.__typename);
};

const poll_min_fields_possibleTypes: string[] = ['poll_min_fields'];
export const ispoll_min_fields = (obj?: { __typename?: any } | null): obj is poll_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_min_fields"');
  return poll_min_fields_possibleTypes.includes(obj.__typename);
};

const poll_mutation_response_possibleTypes: string[] = ['poll_mutation_response'];
export const ispoll_mutation_response = (obj?: { __typename?: any } | null): obj is poll_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_mutation_response"');
  return poll_mutation_response_possibleTypes.includes(obj.__typename);
};

const poll_results_possibleTypes: string[] = ['poll_results'];
export const ispoll_results = (obj?: { __typename?: any } | null): obj is poll_results => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results"');
  return poll_results_possibleTypes.includes(obj.__typename);
};

const poll_results_aggregate_possibleTypes: string[] = ['poll_results_aggregate'];
export const ispoll_results_aggregate = (obj?: { __typename?: any } | null): obj is poll_results_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_aggregate"');
  return poll_results_aggregate_possibleTypes.includes(obj.__typename);
};

const poll_results_aggregate_fields_possibleTypes: string[] = ['poll_results_aggregate_fields'];
export const ispoll_results_aggregate_fields = (
  obj?: { __typename?: any } | null,
): obj is poll_results_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_aggregate_fields"');
  return poll_results_aggregate_fields_possibleTypes.includes(obj.__typename);
};

const poll_results_avg_fields_possibleTypes: string[] = ['poll_results_avg_fields'];
export const ispoll_results_avg_fields = (obj?: { __typename?: any } | null): obj is poll_results_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_avg_fields"');
  return poll_results_avg_fields_possibleTypes.includes(obj.__typename);
};

const poll_results_max_fields_possibleTypes: string[] = ['poll_results_max_fields'];
export const ispoll_results_max_fields = (obj?: { __typename?: any } | null): obj is poll_results_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_max_fields"');
  return poll_results_max_fields_possibleTypes.includes(obj.__typename);
};

const poll_results_min_fields_possibleTypes: string[] = ['poll_results_min_fields'];
export const ispoll_results_min_fields = (obj?: { __typename?: any } | null): obj is poll_results_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_min_fields"');
  return poll_results_min_fields_possibleTypes.includes(obj.__typename);
};

const poll_results_stddev_fields_possibleTypes: string[] = ['poll_results_stddev_fields'];
export const ispoll_results_stddev_fields = (obj?: { __typename?: any } | null): obj is poll_results_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_stddev_fields"');
  return poll_results_stddev_fields_possibleTypes.includes(obj.__typename);
};

const poll_results_stddev_pop_fields_possibleTypes: string[] = ['poll_results_stddev_pop_fields'];
export const ispoll_results_stddev_pop_fields = (
  obj?: { __typename?: any } | null,
): obj is poll_results_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_stddev_pop_fields"');
  return poll_results_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};

const poll_results_stddev_samp_fields_possibleTypes: string[] = ['poll_results_stddev_samp_fields'];
export const ispoll_results_stddev_samp_fields = (
  obj?: { __typename?: any } | null,
): obj is poll_results_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_stddev_samp_fields"');
  return poll_results_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};

const poll_results_sum_fields_possibleTypes: string[] = ['poll_results_sum_fields'];
export const ispoll_results_sum_fields = (obj?: { __typename?: any } | null): obj is poll_results_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_sum_fields"');
  return poll_results_sum_fields_possibleTypes.includes(obj.__typename);
};

const poll_results_var_pop_fields_possibleTypes: string[] = ['poll_results_var_pop_fields'];
export const ispoll_results_var_pop_fields = (
  obj?: { __typename?: any } | null,
): obj is poll_results_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_var_pop_fields"');
  return poll_results_var_pop_fields_possibleTypes.includes(obj.__typename);
};

const poll_results_var_samp_fields_possibleTypes: string[] = ['poll_results_var_samp_fields'];
export const ispoll_results_var_samp_fields = (
  obj?: { __typename?: any } | null,
): obj is poll_results_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_var_samp_fields"');
  return poll_results_var_samp_fields_possibleTypes.includes(obj.__typename);
};

const poll_results_variance_fields_possibleTypes: string[] = ['poll_results_variance_fields'];
export const ispoll_results_variance_fields = (
  obj?: { __typename?: any } | null,
): obj is poll_results_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ispoll_results_variance_fields"');
  return poll_results_variance_fields_possibleTypes.includes(obj.__typename);
};

const query_root_possibleTypes: string[] = ['query_root'];
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"');
  return query_root_possibleTypes.includes(obj.__typename);
};

const subscription_root_possibleTypes: string[] = ['subscription_root'];
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"');
  return subscription_root_possibleTypes.includes(obj.__typename);
};

const user_possibleTypes: string[] = ['user'];
export const isuser = (obj?: { __typename?: any } | null): obj is user => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser"');
  return user_possibleTypes.includes(obj.__typename);
};

const user_aggregate_possibleTypes: string[] = ['user_aggregate'];
export const isuser_aggregate = (obj?: { __typename?: any } | null): obj is user_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_aggregate"');
  return user_aggregate_possibleTypes.includes(obj.__typename);
};

const user_aggregate_fields_possibleTypes: string[] = ['user_aggregate_fields'];
export const isuser_aggregate_fields = (obj?: { __typename?: any } | null): obj is user_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_aggregate_fields"');
  return user_aggregate_fields_possibleTypes.includes(obj.__typename);
};

const user_max_fields_possibleTypes: string[] = ['user_max_fields'];
export const isuser_max_fields = (obj?: { __typename?: any } | null): obj is user_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_max_fields"');
  return user_max_fields_possibleTypes.includes(obj.__typename);
};

const user_min_fields_possibleTypes: string[] = ['user_min_fields'];
export const isuser_min_fields = (obj?: { __typename?: any } | null): obj is user_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_min_fields"');
  return user_min_fields_possibleTypes.includes(obj.__typename);
};

const user_mutation_response_possibleTypes: string[] = ['user_mutation_response'];
export const isuser_mutation_response = (obj?: { __typename?: any } | null): obj is user_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_mutation_response"');
  return user_mutation_response_possibleTypes.includes(obj.__typename);
};

const vote_possibleTypes: string[] = ['vote'];
export const isvote = (obj?: { __typename?: any } | null): obj is vote => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isvote"');
  return vote_possibleTypes.includes(obj.__typename);
};

const vote_aggregate_possibleTypes: string[] = ['vote_aggregate'];
export const isvote_aggregate = (obj?: { __typename?: any } | null): obj is vote_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isvote_aggregate"');
  return vote_aggregate_possibleTypes.includes(obj.__typename);
};

const vote_aggregate_fields_possibleTypes: string[] = ['vote_aggregate_fields'];
export const isvote_aggregate_fields = (obj?: { __typename?: any } | null): obj is vote_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isvote_aggregate_fields"');
  return vote_aggregate_fields_possibleTypes.includes(obj.__typename);
};

const vote_max_fields_possibleTypes: string[] = ['vote_max_fields'];
export const isvote_max_fields = (obj?: { __typename?: any } | null): obj is vote_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isvote_max_fields"');
  return vote_max_fields_possibleTypes.includes(obj.__typename);
};

const vote_min_fields_possibleTypes: string[] = ['vote_min_fields'];
export const isvote_min_fields = (obj?: { __typename?: any } | null): obj is vote_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isvote_min_fields"');
  return vote_min_fields_possibleTypes.includes(obj.__typename);
};

const vote_mutation_response_possibleTypes: string[] = ['vote_mutation_response'];
export const isvote_mutation_response = (obj?: { __typename?: any } | null): obj is vote_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isvote_mutation_response"');
  return vote_mutation_response_possibleTypes.includes(obj.__typename);
};
