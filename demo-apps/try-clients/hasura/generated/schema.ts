export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    timestamptz: any,
}


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** columns and relationships of "message" */
export interface message {
    id: Scalars['Int']
    text: Scalars['String']
    timestamp: Scalars['timestamptz']
    username: Scalars['String']
    __typename: 'message'
}


/** aggregated selection of "message" */
export interface message_aggregate {
    aggregate?: message_aggregate_fields
    nodes: message[]
    __typename: 'message_aggregate'
}


/** aggregate fields of "message" */
export interface message_aggregate_fields {
    avg?: message_avg_fields
    count: Scalars['Int']
    max?: message_max_fields
    min?: message_min_fields
    stddev?: message_stddev_fields
    stddev_pop?: message_stddev_pop_fields
    stddev_samp?: message_stddev_samp_fields
    sum?: message_sum_fields
    var_pop?: message_var_pop_fields
    var_samp?: message_var_samp_fields
    variance?: message_variance_fields
    __typename: 'message_aggregate_fields'
}


/** aggregate avg on columns */
export interface message_avg_fields {
    id?: Scalars['Float']
    __typename: 'message_avg_fields'
}


/** unique or primary key constraints on table "message" */
export type message_constraint = 'message_pkey'


/** aggregate max on columns */
export interface message_max_fields {
    id?: Scalars['Int']
    text?: Scalars['String']
    timestamp?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'message_max_fields'
}


/** aggregate min on columns */
export interface message_min_fields {
    id?: Scalars['Int']
    text?: Scalars['String']
    timestamp?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'message_min_fields'
}


/** response of any mutation on the table "message" */
export interface message_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: message[]
    __typename: 'message_mutation_response'
}


/** select columns of table "message" */
export type message_select_column = 'id' | 'text' | 'timestamp' | 'username'


/** aggregate stddev on columns */
export interface message_stddev_fields {
    id?: Scalars['Float']
    __typename: 'message_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface message_stddev_pop_fields {
    id?: Scalars['Float']
    __typename: 'message_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface message_stddev_samp_fields {
    id?: Scalars['Float']
    __typename: 'message_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface message_sum_fields {
    id?: Scalars['Int']
    __typename: 'message_sum_fields'
}


/** update columns of table "message" */
export type message_update_column = 'id' | 'text' | 'timestamp' | 'username'


/** aggregate var_pop on columns */
export interface message_var_pop_fields {
    id?: Scalars['Float']
    __typename: 'message_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface message_var_samp_fields {
    id?: Scalars['Float']
    __typename: 'message_var_samp_fields'
}


/** aggregate variance on columns */
export interface message_variance_fields {
    id?: Scalars['Float']
    __typename: 'message_variance_fields'
}


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "message" */
    delete_message?: message_mutation_response
    /** delete single row from the table: "message" */
    delete_message_by_pk?: message
    /** delete data from the table: "user" */
    delete_user?: user_mutation_response
    /** delete single row from the table: "user" */
    delete_user_by_pk?: user
    /** delete data from the table: "user_online" */
    delete_user_online?: user_online_mutation_response
    /** delete data from the table: "user_typing" */
    delete_user_typing?: user_typing_mutation_response
    /** insert data into the table: "message" */
    insert_message?: message_mutation_response
    /** insert a single row into the table: "message" */
    insert_message_one?: message
    /** insert data into the table: "user" */
    insert_user?: user_mutation_response
    /** insert a single row into the table: "user" */
    insert_user_one?: user
    /** insert data into the table: "user_online" */
    insert_user_online?: user_online_mutation_response
    /** insert a single row into the table: "user_online" */
    insert_user_online_one?: user_online
    /** insert data into the table: "user_typing" */
    insert_user_typing?: user_typing_mutation_response
    /** insert a single row into the table: "user_typing" */
    insert_user_typing_one?: user_typing
    /** update data of the table: "message" */
    update_message?: message_mutation_response
    /** update single row of the table: "message" */
    update_message_by_pk?: message
    /** update multiples rows of table: "message" */
    update_message_many?: (message_mutation_response | undefined)[]
    /** update data of the table: "user" */
    update_user?: user_mutation_response
    /** update single row of the table: "user" */
    update_user_by_pk?: user
    /** update multiples rows of table: "user" */
    update_user_many?: (user_mutation_response | undefined)[]
    /** update data of the table: "user_online" */
    update_user_online?: user_online_mutation_response
    /** update multiples rows of table: "user_online" */
    update_user_online_many?: (user_online_mutation_response | undefined)[]
    /** update data of the table: "user_typing" */
    update_user_typing?: user_typing_mutation_response
    /** update multiples rows of table: "user_typing" */
    update_user_typing_many?: (user_typing_mutation_response | undefined)[]
    __typename: 'mutation_root'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
    /** fetch data from the table: "message" */
    message: message[]
    /** fetch aggregated fields from the table: "message" */
    message_aggregate: message_aggregate
    /** fetch data from the table: "message" using primary key columns */
    message_by_pk?: message
    /** fetch data from the table: "user" */
    user: user[]
    /** fetch aggregated fields from the table: "user" */
    user_aggregate: user_aggregate
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: user
    /** fetch data from the table: "user_online" */
    user_online: user_online[]
    /** fetch aggregated fields from the table: "user_online" */
    user_online_aggregate: user_online_aggregate
    /** fetch data from the table: "user_typing" */
    user_typing: user_typing[]
    /** fetch aggregated fields from the table: "user_typing" */
    user_typing_aggregate: user_typing_aggregate
    __typename: 'query_root'
}

export interface subscription_root {
    /** fetch data from the table: "message" */
    message: message[]
    /** fetch aggregated fields from the table: "message" */
    message_aggregate: message_aggregate
    /** fetch data from the table: "message" using primary key columns */
    message_by_pk?: message
    /** fetch data from the table in a streaming manner: "message" */
    message_stream: message[]
    /** fetch data from the table: "user" */
    user: user[]
    /** fetch aggregated fields from the table: "user" */
    user_aggregate: user_aggregate
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: user
    /** fetch data from the table: "user_online" */
    user_online: user_online[]
    /** fetch aggregated fields from the table: "user_online" */
    user_online_aggregate: user_online_aggregate
    /** fetch data from the table in a streaming manner: "user_online" */
    user_online_stream: user_online[]
    /** fetch data from the table in a streaming manner: "user" */
    user_stream: user[]
    /** fetch data from the table: "user_typing" */
    user_typing: user_typing[]
    /** fetch aggregated fields from the table: "user_typing" */
    user_typing_aggregate: user_typing_aggregate
    /** fetch data from the table in a streaming manner: "user_typing" */
    user_typing_stream: user_typing[]
    __typename: 'subscription_root'
}


/** This table stores user data */
export interface user {
    id: Scalars['Int']
    last_seen?: Scalars['timestamptz']
    last_typed?: Scalars['timestamptz']
    username: Scalars['String']
    __typename: 'user'
}


/** aggregated selection of "user" */
export interface user_aggregate {
    aggregate?: user_aggregate_fields
    nodes: user[]
    __typename: 'user_aggregate'
}


/** aggregate fields of "user" */
export interface user_aggregate_fields {
    avg?: user_avg_fields
    count: Scalars['Int']
    max?: user_max_fields
    min?: user_min_fields
    stddev?: user_stddev_fields
    stddev_pop?: user_stddev_pop_fields
    stddev_samp?: user_stddev_samp_fields
    sum?: user_sum_fields
    var_pop?: user_var_pop_fields
    var_samp?: user_var_samp_fields
    variance?: user_variance_fields
    __typename: 'user_aggregate_fields'
}


/** aggregate avg on columns */
export interface user_avg_fields {
    id?: Scalars['Float']
    __typename: 'user_avg_fields'
}


/** unique or primary key constraints on table "user" */
export type user_constraint = 'user_pkey' | 'user_username_key'


/** aggregate max on columns */
export interface user_max_fields {
    id?: Scalars['Int']
    last_seen?: Scalars['timestamptz']
    last_typed?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'user_max_fields'
}


/** aggregate min on columns */
export interface user_min_fields {
    id?: Scalars['Int']
    last_seen?: Scalars['timestamptz']
    last_typed?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'user_min_fields'
}


/** response of any mutation on the table "user" */
export interface user_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: user[]
    __typename: 'user_mutation_response'
}


/** columns and relationships of "user_online" */
export interface user_online {
    id?: Scalars['Int']
    last_seen?: Scalars['timestamptz']
    last_typed?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'user_online'
}


/** aggregated selection of "user_online" */
export interface user_online_aggregate {
    aggregate?: user_online_aggregate_fields
    nodes: user_online[]
    __typename: 'user_online_aggregate'
}


/** aggregate fields of "user_online" */
export interface user_online_aggregate_fields {
    avg?: user_online_avg_fields
    count: Scalars['Int']
    max?: user_online_max_fields
    min?: user_online_min_fields
    stddev?: user_online_stddev_fields
    stddev_pop?: user_online_stddev_pop_fields
    stddev_samp?: user_online_stddev_samp_fields
    sum?: user_online_sum_fields
    var_pop?: user_online_var_pop_fields
    var_samp?: user_online_var_samp_fields
    variance?: user_online_variance_fields
    __typename: 'user_online_aggregate_fields'
}


/** aggregate avg on columns */
export interface user_online_avg_fields {
    id?: Scalars['Float']
    __typename: 'user_online_avg_fields'
}


/** aggregate max on columns */
export interface user_online_max_fields {
    id?: Scalars['Int']
    last_seen?: Scalars['timestamptz']
    last_typed?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'user_online_max_fields'
}


/** aggregate min on columns */
export interface user_online_min_fields {
    id?: Scalars['Int']
    last_seen?: Scalars['timestamptz']
    last_typed?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'user_online_min_fields'
}


/** response of any mutation on the table "user_online" */
export interface user_online_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: user_online[]
    __typename: 'user_online_mutation_response'
}


/** select columns of table "user_online" */
export type user_online_select_column = 'id' | 'last_seen' | 'last_typed' | 'username'


/** aggregate stddev on columns */
export interface user_online_stddev_fields {
    id?: Scalars['Float']
    __typename: 'user_online_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface user_online_stddev_pop_fields {
    id?: Scalars['Float']
    __typename: 'user_online_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface user_online_stddev_samp_fields {
    id?: Scalars['Float']
    __typename: 'user_online_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface user_online_sum_fields {
    id?: Scalars['Int']
    __typename: 'user_online_sum_fields'
}


/** aggregate var_pop on columns */
export interface user_online_var_pop_fields {
    id?: Scalars['Float']
    __typename: 'user_online_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface user_online_var_samp_fields {
    id?: Scalars['Float']
    __typename: 'user_online_var_samp_fields'
}


/** aggregate variance on columns */
export interface user_online_variance_fields {
    id?: Scalars['Float']
    __typename: 'user_online_variance_fields'
}


/** select columns of table "user" */
export type user_select_column = 'id' | 'last_seen' | 'last_typed' | 'username'


/** aggregate stddev on columns */
export interface user_stddev_fields {
    id?: Scalars['Float']
    __typename: 'user_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface user_stddev_pop_fields {
    id?: Scalars['Float']
    __typename: 'user_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface user_stddev_samp_fields {
    id?: Scalars['Float']
    __typename: 'user_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface user_sum_fields {
    id?: Scalars['Int']
    __typename: 'user_sum_fields'
}


/** columns and relationships of "user_typing" */
export interface user_typing {
    id?: Scalars['Int']
    last_seen?: Scalars['timestamptz']
    last_typed?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'user_typing'
}


/** aggregated selection of "user_typing" */
export interface user_typing_aggregate {
    aggregate?: user_typing_aggregate_fields
    nodes: user_typing[]
    __typename: 'user_typing_aggregate'
}


/** aggregate fields of "user_typing" */
export interface user_typing_aggregate_fields {
    avg?: user_typing_avg_fields
    count: Scalars['Int']
    max?: user_typing_max_fields
    min?: user_typing_min_fields
    stddev?: user_typing_stddev_fields
    stddev_pop?: user_typing_stddev_pop_fields
    stddev_samp?: user_typing_stddev_samp_fields
    sum?: user_typing_sum_fields
    var_pop?: user_typing_var_pop_fields
    var_samp?: user_typing_var_samp_fields
    variance?: user_typing_variance_fields
    __typename: 'user_typing_aggregate_fields'
}


/** aggregate avg on columns */
export interface user_typing_avg_fields {
    id?: Scalars['Float']
    __typename: 'user_typing_avg_fields'
}


/** aggregate max on columns */
export interface user_typing_max_fields {
    id?: Scalars['Int']
    last_seen?: Scalars['timestamptz']
    last_typed?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'user_typing_max_fields'
}


/** aggregate min on columns */
export interface user_typing_min_fields {
    id?: Scalars['Int']
    last_seen?: Scalars['timestamptz']
    last_typed?: Scalars['timestamptz']
    username?: Scalars['String']
    __typename: 'user_typing_min_fields'
}


/** response of any mutation on the table "user_typing" */
export interface user_typing_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: user_typing[]
    __typename: 'user_typing_mutation_response'
}


/** select columns of table "user_typing" */
export type user_typing_select_column = 'id' | 'last_seen' | 'last_typed' | 'username'


/** aggregate stddev on columns */
export interface user_typing_stddev_fields {
    id?: Scalars['Float']
    __typename: 'user_typing_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface user_typing_stddev_pop_fields {
    id?: Scalars['Float']
    __typename: 'user_typing_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface user_typing_stddev_samp_fields {
    id?: Scalars['Float']
    __typename: 'user_typing_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface user_typing_sum_fields {
    id?: Scalars['Int']
    __typename: 'user_typing_sum_fields'
}


/** aggregate var_pop on columns */
export interface user_typing_var_pop_fields {
    id?: Scalars['Float']
    __typename: 'user_typing_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface user_typing_var_samp_fields {
    id?: Scalars['Float']
    __typename: 'user_typing_var_samp_fields'
}


/** aggregate variance on columns */
export interface user_typing_variance_fields {
    id?: Scalars['Float']
    __typename: 'user_typing_variance_fields'
}


/** update columns of table "user" */
export type user_update_column = 'id' | 'last_seen' | 'last_typed' | 'username'


/** aggregate var_pop on columns */
export interface user_var_pop_fields {
    id?: Scalars['Float']
    __typename: 'user_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface user_var_samp_fields {
    id?: Scalars['Float']
    __typename: 'user_var_samp_fields'
}


/** aggregate variance on columns */
export interface user_variance_fields {
    id?: Scalars['Float']
    __typename: 'user_variance_fields'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** columns and relationships of "message" */
export interface messageRequest{
    id?: boolean | number
    text?: boolean | number
    timestamp?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "message" */
export interface message_aggregateRequest{
    aggregate?: message_aggregate_fieldsRequest
    nodes?: messageRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "message" */
export interface message_aggregate_fieldsRequest{
    avg?: message_avg_fieldsRequest
    count?: [{columns?: (message_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: message_max_fieldsRequest
    min?: message_min_fieldsRequest
    stddev?: message_stddev_fieldsRequest
    stddev_pop?: message_stddev_pop_fieldsRequest
    stddev_samp?: message_stddev_samp_fieldsRequest
    sum?: message_sum_fieldsRequest
    var_pop?: message_var_pop_fieldsRequest
    var_samp?: message_var_samp_fieldsRequest
    variance?: message_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface message_avg_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "message". All fields are combined with a logical 'AND'. */
export interface message_bool_exp {_and?: (message_bool_exp[] | null),_not?: (message_bool_exp | null),_or?: (message_bool_exp[] | null),id?: (Int_comparison_exp | null),text?: (String_comparison_exp | null),timestamp?: (timestamptz_comparison_exp | null),username?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "message" */
export interface message_inc_input {id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "message" */
export interface message_insert_input {id?: (Scalars['Int'] | null),text?: (Scalars['String'] | null),timestamp?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface message_max_fieldsRequest{
    id?: boolean | number
    text?: boolean | number
    timestamp?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface message_min_fieldsRequest{
    id?: boolean | number
    text?: boolean | number
    timestamp?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "message" */
export interface message_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: messageRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "message" */
export interface message_on_conflict {constraint: message_constraint,update_columns: message_update_column[],where?: (message_bool_exp | null)}


/** Ordering options when selecting data from "message". */
export interface message_order_by {id?: (order_by | null),text?: (order_by | null),timestamp?: (order_by | null),username?: (order_by | null)}


/** primary key columns input for table: message */
export interface message_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "message" */
export interface message_set_input {id?: (Scalars['Int'] | null),text?: (Scalars['String'] | null),timestamp?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface message_stddev_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface message_stddev_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface message_stddev_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "message" */
export interface message_stream_cursor_input {
/** Stream column input with initial value */
initial_value: message_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface message_stream_cursor_value_input {id?: (Scalars['Int'] | null),text?: (Scalars['String'] | null),timestamp?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface message_sum_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface message_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (message_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (message_set_input | null),where: message_bool_exp}


/** aggregate var_pop on columns */
export interface message_var_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface message_var_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface message_variance_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** mutation root */
export interface mutation_rootRequest{
    /** delete data from the table: "message" */
    delete_message?: [{
    /** filter the rows which have to be deleted */
    where: message_bool_exp},message_mutation_responseRequest]
    /** delete single row from the table: "message" */
    delete_message_by_pk?: [{id: Scalars['Int']},messageRequest]
    /** delete data from the table: "user" */
    delete_user?: [{
    /** filter the rows which have to be deleted */
    where: user_bool_exp},user_mutation_responseRequest]
    /** delete single row from the table: "user" */
    delete_user_by_pk?: [{id: Scalars['Int']},userRequest]
    /** delete data from the table: "user_online" */
    delete_user_online?: [{
    /** filter the rows which have to be deleted */
    where: user_online_bool_exp},user_online_mutation_responseRequest]
    /** delete data from the table: "user_typing" */
    delete_user_typing?: [{
    /** filter the rows which have to be deleted */
    where: user_typing_bool_exp},user_typing_mutation_responseRequest]
    /** insert data into the table: "message" */
    insert_message?: [{
    /** the rows to be inserted */
    objects: message_insert_input[],
    /** upsert condition */
    on_conflict?: (message_on_conflict | null)},message_mutation_responseRequest]
    /** insert a single row into the table: "message" */
    insert_message_one?: [{
    /** the row to be inserted */
    object: message_insert_input,
    /** upsert condition */
    on_conflict?: (message_on_conflict | null)},messageRequest]
    /** insert data into the table: "user" */
    insert_user?: [{
    /** the rows to be inserted */
    objects: user_insert_input[],
    /** upsert condition */
    on_conflict?: (user_on_conflict | null)},user_mutation_responseRequest]
    /** insert a single row into the table: "user" */
    insert_user_one?: [{
    /** the row to be inserted */
    object: user_insert_input,
    /** upsert condition */
    on_conflict?: (user_on_conflict | null)},userRequest]
    /** insert data into the table: "user_online" */
    insert_user_online?: [{
    /** the rows to be inserted */
    objects: user_online_insert_input[]},user_online_mutation_responseRequest]
    /** insert a single row into the table: "user_online" */
    insert_user_online_one?: [{
    /** the row to be inserted */
    object: user_online_insert_input},user_onlineRequest]
    /** insert data into the table: "user_typing" */
    insert_user_typing?: [{
    /** the rows to be inserted */
    objects: user_typing_insert_input[]},user_typing_mutation_responseRequest]
    /** insert a single row into the table: "user_typing" */
    insert_user_typing_one?: [{
    /** the row to be inserted */
    object: user_typing_insert_input},user_typingRequest]
    /** update data of the table: "message" */
    update_message?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (message_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (message_set_input | null),
    /** filter the rows which have to be updated */
    where: message_bool_exp},message_mutation_responseRequest]
    /** update single row of the table: "message" */
    update_message_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (message_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (message_set_input | null),pk_columns: message_pk_columns_input},messageRequest]
    /** update multiples rows of table: "message" */
    update_message_many?: [{
    /** updates to execute, in order */
    updates: message_updates[]},message_mutation_responseRequest]
    /** update data of the table: "user" */
    update_user?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (user_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (user_set_input | null),
    /** filter the rows which have to be updated */
    where: user_bool_exp},user_mutation_responseRequest]
    /** update single row of the table: "user" */
    update_user_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (user_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (user_set_input | null),pk_columns: user_pk_columns_input},userRequest]
    /** update multiples rows of table: "user" */
    update_user_many?: [{
    /** updates to execute, in order */
    updates: user_updates[]},user_mutation_responseRequest]
    /** update data of the table: "user_online" */
    update_user_online?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (user_online_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (user_online_set_input | null),
    /** filter the rows which have to be updated */
    where: user_online_bool_exp},user_online_mutation_responseRequest]
    /** update multiples rows of table: "user_online" */
    update_user_online_many?: [{
    /** updates to execute, in order */
    updates: user_online_updates[]},user_online_mutation_responseRequest]
    /** update data of the table: "user_typing" */
    update_user_typing?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (user_typing_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (user_typing_set_input | null),
    /** filter the rows which have to be updated */
    where: user_typing_bool_exp},user_typing_mutation_responseRequest]
    /** update multiples rows of table: "user_typing" */
    update_user_typing_many?: [{
    /** updates to execute, in order */
    updates: user_typing_updates[]},user_typing_mutation_responseRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface query_rootRequest{
    /** fetch data from the table: "message" */
    message?: [{
    /** distinct select on columns */
    distinct_on?: (message_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (message_order_by[] | null),
    /** filter the rows returned */
    where?: (message_bool_exp | null)},messageRequest] | messageRequest
    /** fetch aggregated fields from the table: "message" */
    message_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (message_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (message_order_by[] | null),
    /** filter the rows returned */
    where?: (message_bool_exp | null)},message_aggregateRequest] | message_aggregateRequest
    /** fetch data from the table: "message" using primary key columns */
    message_by_pk?: [{id: Scalars['Int']},messageRequest]
    /** fetch data from the table: "user" */
    user?: [{
    /** distinct select on columns */
    distinct_on?: (user_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_order_by[] | null),
    /** filter the rows returned */
    where?: (user_bool_exp | null)},userRequest] | userRequest
    /** fetch aggregated fields from the table: "user" */
    user_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (user_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_order_by[] | null),
    /** filter the rows returned */
    where?: (user_bool_exp | null)},user_aggregateRequest] | user_aggregateRequest
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: [{id: Scalars['Int']},userRequest]
    /** fetch data from the table: "user_online" */
    user_online?: [{
    /** distinct select on columns */
    distinct_on?: (user_online_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_online_order_by[] | null),
    /** filter the rows returned */
    where?: (user_online_bool_exp | null)},user_onlineRequest] | user_onlineRequest
    /** fetch aggregated fields from the table: "user_online" */
    user_online_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (user_online_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_online_order_by[] | null),
    /** filter the rows returned */
    where?: (user_online_bool_exp | null)},user_online_aggregateRequest] | user_online_aggregateRequest
    /** fetch data from the table: "user_typing" */
    user_typing?: [{
    /** distinct select on columns */
    distinct_on?: (user_typing_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_typing_order_by[] | null),
    /** filter the rows returned */
    where?: (user_typing_bool_exp | null)},user_typingRequest] | user_typingRequest
    /** fetch aggregated fields from the table: "user_typing" */
    user_typing_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (user_typing_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_typing_order_by[] | null),
    /** filter the rows returned */
    where?: (user_typing_bool_exp | null)},user_typing_aggregateRequest] | user_typing_aggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootRequest{
    /** fetch data from the table: "message" */
    message?: [{
    /** distinct select on columns */
    distinct_on?: (message_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (message_order_by[] | null),
    /** filter the rows returned */
    where?: (message_bool_exp | null)},messageRequest] | messageRequest
    /** fetch aggregated fields from the table: "message" */
    message_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (message_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (message_order_by[] | null),
    /** filter the rows returned */
    where?: (message_bool_exp | null)},message_aggregateRequest] | message_aggregateRequest
    /** fetch data from the table: "message" using primary key columns */
    message_by_pk?: [{id: Scalars['Int']},messageRequest]
    /** fetch data from the table in a streaming manner: "message" */
    message_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (message_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (message_bool_exp | null)},messageRequest]
    /** fetch data from the table: "user" */
    user?: [{
    /** distinct select on columns */
    distinct_on?: (user_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_order_by[] | null),
    /** filter the rows returned */
    where?: (user_bool_exp | null)},userRequest] | userRequest
    /** fetch aggregated fields from the table: "user" */
    user_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (user_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_order_by[] | null),
    /** filter the rows returned */
    where?: (user_bool_exp | null)},user_aggregateRequest] | user_aggregateRequest
    /** fetch data from the table: "user" using primary key columns */
    user_by_pk?: [{id: Scalars['Int']},userRequest]
    /** fetch data from the table: "user_online" */
    user_online?: [{
    /** distinct select on columns */
    distinct_on?: (user_online_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_online_order_by[] | null),
    /** filter the rows returned */
    where?: (user_online_bool_exp | null)},user_onlineRequest] | user_onlineRequest
    /** fetch aggregated fields from the table: "user_online" */
    user_online_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (user_online_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_online_order_by[] | null),
    /** filter the rows returned */
    where?: (user_online_bool_exp | null)},user_online_aggregateRequest] | user_online_aggregateRequest
    /** fetch data from the table in a streaming manner: "user_online" */
    user_online_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (user_online_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (user_online_bool_exp | null)},user_onlineRequest]
    /** fetch data from the table in a streaming manner: "user" */
    user_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (user_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (user_bool_exp | null)},userRequest]
    /** fetch data from the table: "user_typing" */
    user_typing?: [{
    /** distinct select on columns */
    distinct_on?: (user_typing_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_typing_order_by[] | null),
    /** filter the rows returned */
    where?: (user_typing_bool_exp | null)},user_typingRequest] | user_typingRequest
    /** fetch aggregated fields from the table: "user_typing" */
    user_typing_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (user_typing_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (user_typing_order_by[] | null),
    /** filter the rows returned */
    where?: (user_typing_bool_exp | null)},user_typing_aggregateRequest] | user_typing_aggregateRequest
    /** fetch data from the table in a streaming manner: "user_typing" */
    user_typing_stream?: [{
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'],
    /** cursor to stream the results returned by the query */
    cursor: (user_typing_stream_cursor_input | null)[],
    /** filter the rows returned */
    where?: (user_typing_bool_exp | null)},user_typingRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** This table stores user data */
export interface userRequest{
    id?: boolean | number
    last_seen?: boolean | number
    last_typed?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "user" */
export interface user_aggregateRequest{
    aggregate?: user_aggregate_fieldsRequest
    nodes?: userRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "user" */
export interface user_aggregate_fieldsRequest{
    avg?: user_avg_fieldsRequest
    count?: [{columns?: (user_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: user_max_fieldsRequest
    min?: user_min_fieldsRequest
    stddev?: user_stddev_fieldsRequest
    stddev_pop?: user_stddev_pop_fieldsRequest
    stddev_samp?: user_stddev_samp_fieldsRequest
    sum?: user_sum_fieldsRequest
    var_pop?: user_var_pop_fieldsRequest
    var_samp?: user_var_samp_fieldsRequest
    variance?: user_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface user_avg_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export interface user_bool_exp {_and?: (user_bool_exp[] | null),_not?: (user_bool_exp | null),_or?: (user_bool_exp[] | null),id?: (Int_comparison_exp | null),last_seen?: (timestamptz_comparison_exp | null),last_typed?: (timestamptz_comparison_exp | null),username?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "user" */
export interface user_inc_input {id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "user" */
export interface user_insert_input {id?: (Scalars['Int'] | null),last_seen?: (Scalars['timestamptz'] | null),last_typed?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface user_max_fieldsRequest{
    id?: boolean | number
    last_seen?: boolean | number
    last_typed?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface user_min_fieldsRequest{
    id?: boolean | number
    last_seen?: boolean | number
    last_typed?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "user" */
export interface user_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: userRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "user" */
export interface user_on_conflict {constraint: user_constraint,update_columns: user_update_column[],where?: (user_bool_exp | null)}


/** columns and relationships of "user_online" */
export interface user_onlineRequest{
    id?: boolean | number
    last_seen?: boolean | number
    last_typed?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "user_online" */
export interface user_online_aggregateRequest{
    aggregate?: user_online_aggregate_fieldsRequest
    nodes?: user_onlineRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "user_online" */
export interface user_online_aggregate_fieldsRequest{
    avg?: user_online_avg_fieldsRequest
    count?: [{columns?: (user_online_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: user_online_max_fieldsRequest
    min?: user_online_min_fieldsRequest
    stddev?: user_online_stddev_fieldsRequest
    stddev_pop?: user_online_stddev_pop_fieldsRequest
    stddev_samp?: user_online_stddev_samp_fieldsRequest
    sum?: user_online_sum_fieldsRequest
    var_pop?: user_online_var_pop_fieldsRequest
    var_samp?: user_online_var_samp_fieldsRequest
    variance?: user_online_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface user_online_avg_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "user_online". All fields are combined with a logical 'AND'. */
export interface user_online_bool_exp {_and?: (user_online_bool_exp[] | null),_not?: (user_online_bool_exp | null),_or?: (user_online_bool_exp[] | null),id?: (Int_comparison_exp | null),last_seen?: (timestamptz_comparison_exp | null),last_typed?: (timestamptz_comparison_exp | null),username?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "user_online" */
export interface user_online_inc_input {id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "user_online" */
export interface user_online_insert_input {id?: (Scalars['Int'] | null),last_seen?: (Scalars['timestamptz'] | null),last_typed?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface user_online_max_fieldsRequest{
    id?: boolean | number
    last_seen?: boolean | number
    last_typed?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface user_online_min_fieldsRequest{
    id?: boolean | number
    last_seen?: boolean | number
    last_typed?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "user_online" */
export interface user_online_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: user_onlineRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "user_online". */
export interface user_online_order_by {id?: (order_by | null),last_seen?: (order_by | null),last_typed?: (order_by | null),username?: (order_by | null)}


/** input type for updating data in table "user_online" */
export interface user_online_set_input {id?: (Scalars['Int'] | null),last_seen?: (Scalars['timestamptz'] | null),last_typed?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface user_online_stddev_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface user_online_stddev_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface user_online_stddev_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "user_online" */
export interface user_online_stream_cursor_input {
/** Stream column input with initial value */
initial_value: user_online_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface user_online_stream_cursor_value_input {id?: (Scalars['Int'] | null),last_seen?: (Scalars['timestamptz'] | null),last_typed?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface user_online_sum_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface user_online_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (user_online_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (user_online_set_input | null),where: user_online_bool_exp}


/** aggregate var_pop on columns */
export interface user_online_var_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface user_online_var_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface user_online_variance_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "user". */
export interface user_order_by {id?: (order_by | null),last_seen?: (order_by | null),last_typed?: (order_by | null),username?: (order_by | null)}


/** primary key columns input for table: user */
export interface user_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "user" */
export interface user_set_input {id?: (Scalars['Int'] | null),last_seen?: (Scalars['timestamptz'] | null),last_typed?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface user_stddev_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface user_stddev_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface user_stddev_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "user" */
export interface user_stream_cursor_input {
/** Stream column input with initial value */
initial_value: user_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface user_stream_cursor_value_input {id?: (Scalars['Int'] | null),last_seen?: (Scalars['timestamptz'] | null),last_typed?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface user_sum_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "user_typing" */
export interface user_typingRequest{
    id?: boolean | number
    last_seen?: boolean | number
    last_typed?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "user_typing" */
export interface user_typing_aggregateRequest{
    aggregate?: user_typing_aggregate_fieldsRequest
    nodes?: user_typingRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "user_typing" */
export interface user_typing_aggregate_fieldsRequest{
    avg?: user_typing_avg_fieldsRequest
    count?: [{columns?: (user_typing_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: user_typing_max_fieldsRequest
    min?: user_typing_min_fieldsRequest
    stddev?: user_typing_stddev_fieldsRequest
    stddev_pop?: user_typing_stddev_pop_fieldsRequest
    stddev_samp?: user_typing_stddev_samp_fieldsRequest
    sum?: user_typing_sum_fieldsRequest
    var_pop?: user_typing_var_pop_fieldsRequest
    var_samp?: user_typing_var_samp_fieldsRequest
    variance?: user_typing_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface user_typing_avg_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "user_typing". All fields are combined with a logical 'AND'. */
export interface user_typing_bool_exp {_and?: (user_typing_bool_exp[] | null),_not?: (user_typing_bool_exp | null),_or?: (user_typing_bool_exp[] | null),id?: (Int_comparison_exp | null),last_seen?: (timestamptz_comparison_exp | null),last_typed?: (timestamptz_comparison_exp | null),username?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "user_typing" */
export interface user_typing_inc_input {id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "user_typing" */
export interface user_typing_insert_input {id?: (Scalars['Int'] | null),last_seen?: (Scalars['timestamptz'] | null),last_typed?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface user_typing_max_fieldsRequest{
    id?: boolean | number
    last_seen?: boolean | number
    last_typed?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface user_typing_min_fieldsRequest{
    id?: boolean | number
    last_seen?: boolean | number
    last_typed?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "user_typing" */
export interface user_typing_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: user_typingRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Ordering options when selecting data from "user_typing". */
export interface user_typing_order_by {id?: (order_by | null),last_seen?: (order_by | null),last_typed?: (order_by | null),username?: (order_by | null)}


/** input type for updating data in table "user_typing" */
export interface user_typing_set_input {id?: (Scalars['Int'] | null),last_seen?: (Scalars['timestamptz'] | null),last_typed?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface user_typing_stddev_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface user_typing_stddev_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface user_typing_stddev_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "user_typing" */
export interface user_typing_stream_cursor_input {
/** Stream column input with initial value */
initial_value: user_typing_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface user_typing_stream_cursor_value_input {id?: (Scalars['Int'] | null),last_seen?: (Scalars['timestamptz'] | null),last_typed?: (Scalars['timestamptz'] | null),username?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface user_typing_sum_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface user_typing_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (user_typing_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (user_typing_set_input | null),where: user_typing_bool_exp}


/** aggregate var_pop on columns */
export interface user_typing_var_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface user_typing_var_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface user_typing_variance_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface user_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (user_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (user_set_input | null),where: user_bool_exp}


/** aggregate var_pop on columns */
export interface user_var_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface user_var_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface user_variance_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export type QueryRequest = query_rootRequest
export type MutationRequest = mutation_rootRequest
export type SubscriptionRequest = subscription_rootRequest


const message_possibleTypes: string[] = ['message']
export const ismessage = (obj?: { __typename?: any } | null): obj is message => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage"')
  return message_possibleTypes.includes(obj.__typename)
}



const message_aggregate_possibleTypes: string[] = ['message_aggregate']
export const ismessage_aggregate = (obj?: { __typename?: any } | null): obj is message_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_aggregate"')
  return message_aggregate_possibleTypes.includes(obj.__typename)
}



const message_aggregate_fields_possibleTypes: string[] = ['message_aggregate_fields']
export const ismessage_aggregate_fields = (obj?: { __typename?: any } | null): obj is message_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_aggregate_fields"')
  return message_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const message_avg_fields_possibleTypes: string[] = ['message_avg_fields']
export const ismessage_avg_fields = (obj?: { __typename?: any } | null): obj is message_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_avg_fields"')
  return message_avg_fields_possibleTypes.includes(obj.__typename)
}



const message_max_fields_possibleTypes: string[] = ['message_max_fields']
export const ismessage_max_fields = (obj?: { __typename?: any } | null): obj is message_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_max_fields"')
  return message_max_fields_possibleTypes.includes(obj.__typename)
}



const message_min_fields_possibleTypes: string[] = ['message_min_fields']
export const ismessage_min_fields = (obj?: { __typename?: any } | null): obj is message_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_min_fields"')
  return message_min_fields_possibleTypes.includes(obj.__typename)
}



const message_mutation_response_possibleTypes: string[] = ['message_mutation_response']
export const ismessage_mutation_response = (obj?: { __typename?: any } | null): obj is message_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_mutation_response"')
  return message_mutation_response_possibleTypes.includes(obj.__typename)
}



const message_stddev_fields_possibleTypes: string[] = ['message_stddev_fields']
export const ismessage_stddev_fields = (obj?: { __typename?: any } | null): obj is message_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_stddev_fields"')
  return message_stddev_fields_possibleTypes.includes(obj.__typename)
}



const message_stddev_pop_fields_possibleTypes: string[] = ['message_stddev_pop_fields']
export const ismessage_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is message_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_stddev_pop_fields"')
  return message_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const message_stddev_samp_fields_possibleTypes: string[] = ['message_stddev_samp_fields']
export const ismessage_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is message_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_stddev_samp_fields"')
  return message_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const message_sum_fields_possibleTypes: string[] = ['message_sum_fields']
export const ismessage_sum_fields = (obj?: { __typename?: any } | null): obj is message_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_sum_fields"')
  return message_sum_fields_possibleTypes.includes(obj.__typename)
}



const message_var_pop_fields_possibleTypes: string[] = ['message_var_pop_fields']
export const ismessage_var_pop_fields = (obj?: { __typename?: any } | null): obj is message_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_var_pop_fields"')
  return message_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const message_var_samp_fields_possibleTypes: string[] = ['message_var_samp_fields']
export const ismessage_var_samp_fields = (obj?: { __typename?: any } | null): obj is message_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_var_samp_fields"')
  return message_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const message_variance_fields_possibleTypes: string[] = ['message_variance_fields']
export const ismessage_variance_fields = (obj?: { __typename?: any } | null): obj is message_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessage_variance_fields"')
  return message_variance_fields_possibleTypes.includes(obj.__typename)
}



const mutation_root_possibleTypes: string[] = ['mutation_root']
export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes: string[] = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes: string[] = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



const user_possibleTypes: string[] = ['user']
export const isuser = (obj?: { __typename?: any } | null): obj is user => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser"')
  return user_possibleTypes.includes(obj.__typename)
}



const user_aggregate_possibleTypes: string[] = ['user_aggregate']
export const isuser_aggregate = (obj?: { __typename?: any } | null): obj is user_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_aggregate"')
  return user_aggregate_possibleTypes.includes(obj.__typename)
}



const user_aggregate_fields_possibleTypes: string[] = ['user_aggregate_fields']
export const isuser_aggregate_fields = (obj?: { __typename?: any } | null): obj is user_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_aggregate_fields"')
  return user_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const user_avg_fields_possibleTypes: string[] = ['user_avg_fields']
export const isuser_avg_fields = (obj?: { __typename?: any } | null): obj is user_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_avg_fields"')
  return user_avg_fields_possibleTypes.includes(obj.__typename)
}



const user_max_fields_possibleTypes: string[] = ['user_max_fields']
export const isuser_max_fields = (obj?: { __typename?: any } | null): obj is user_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_max_fields"')
  return user_max_fields_possibleTypes.includes(obj.__typename)
}



const user_min_fields_possibleTypes: string[] = ['user_min_fields']
export const isuser_min_fields = (obj?: { __typename?: any } | null): obj is user_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_min_fields"')
  return user_min_fields_possibleTypes.includes(obj.__typename)
}



const user_mutation_response_possibleTypes: string[] = ['user_mutation_response']
export const isuser_mutation_response = (obj?: { __typename?: any } | null): obj is user_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_mutation_response"')
  return user_mutation_response_possibleTypes.includes(obj.__typename)
}



const user_online_possibleTypes: string[] = ['user_online']
export const isuser_online = (obj?: { __typename?: any } | null): obj is user_online => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online"')
  return user_online_possibleTypes.includes(obj.__typename)
}



const user_online_aggregate_possibleTypes: string[] = ['user_online_aggregate']
export const isuser_online_aggregate = (obj?: { __typename?: any } | null): obj is user_online_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_aggregate"')
  return user_online_aggregate_possibleTypes.includes(obj.__typename)
}



const user_online_aggregate_fields_possibleTypes: string[] = ['user_online_aggregate_fields']
export const isuser_online_aggregate_fields = (obj?: { __typename?: any } | null): obj is user_online_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_aggregate_fields"')
  return user_online_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const user_online_avg_fields_possibleTypes: string[] = ['user_online_avg_fields']
export const isuser_online_avg_fields = (obj?: { __typename?: any } | null): obj is user_online_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_avg_fields"')
  return user_online_avg_fields_possibleTypes.includes(obj.__typename)
}



const user_online_max_fields_possibleTypes: string[] = ['user_online_max_fields']
export const isuser_online_max_fields = (obj?: { __typename?: any } | null): obj is user_online_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_max_fields"')
  return user_online_max_fields_possibleTypes.includes(obj.__typename)
}



const user_online_min_fields_possibleTypes: string[] = ['user_online_min_fields']
export const isuser_online_min_fields = (obj?: { __typename?: any } | null): obj is user_online_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_min_fields"')
  return user_online_min_fields_possibleTypes.includes(obj.__typename)
}



const user_online_mutation_response_possibleTypes: string[] = ['user_online_mutation_response']
export const isuser_online_mutation_response = (obj?: { __typename?: any } | null): obj is user_online_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_mutation_response"')
  return user_online_mutation_response_possibleTypes.includes(obj.__typename)
}



const user_online_stddev_fields_possibleTypes: string[] = ['user_online_stddev_fields']
export const isuser_online_stddev_fields = (obj?: { __typename?: any } | null): obj is user_online_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_stddev_fields"')
  return user_online_stddev_fields_possibleTypes.includes(obj.__typename)
}



const user_online_stddev_pop_fields_possibleTypes: string[] = ['user_online_stddev_pop_fields']
export const isuser_online_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is user_online_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_stddev_pop_fields"')
  return user_online_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const user_online_stddev_samp_fields_possibleTypes: string[] = ['user_online_stddev_samp_fields']
export const isuser_online_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is user_online_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_stddev_samp_fields"')
  return user_online_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const user_online_sum_fields_possibleTypes: string[] = ['user_online_sum_fields']
export const isuser_online_sum_fields = (obj?: { __typename?: any } | null): obj is user_online_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_sum_fields"')
  return user_online_sum_fields_possibleTypes.includes(obj.__typename)
}



const user_online_var_pop_fields_possibleTypes: string[] = ['user_online_var_pop_fields']
export const isuser_online_var_pop_fields = (obj?: { __typename?: any } | null): obj is user_online_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_var_pop_fields"')
  return user_online_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const user_online_var_samp_fields_possibleTypes: string[] = ['user_online_var_samp_fields']
export const isuser_online_var_samp_fields = (obj?: { __typename?: any } | null): obj is user_online_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_var_samp_fields"')
  return user_online_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const user_online_variance_fields_possibleTypes: string[] = ['user_online_variance_fields']
export const isuser_online_variance_fields = (obj?: { __typename?: any } | null): obj is user_online_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_online_variance_fields"')
  return user_online_variance_fields_possibleTypes.includes(obj.__typename)
}



const user_stddev_fields_possibleTypes: string[] = ['user_stddev_fields']
export const isuser_stddev_fields = (obj?: { __typename?: any } | null): obj is user_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_stddev_fields"')
  return user_stddev_fields_possibleTypes.includes(obj.__typename)
}



const user_stddev_pop_fields_possibleTypes: string[] = ['user_stddev_pop_fields']
export const isuser_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is user_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_stddev_pop_fields"')
  return user_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const user_stddev_samp_fields_possibleTypes: string[] = ['user_stddev_samp_fields']
export const isuser_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is user_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_stddev_samp_fields"')
  return user_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const user_sum_fields_possibleTypes: string[] = ['user_sum_fields']
export const isuser_sum_fields = (obj?: { __typename?: any } | null): obj is user_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_sum_fields"')
  return user_sum_fields_possibleTypes.includes(obj.__typename)
}



const user_typing_possibleTypes: string[] = ['user_typing']
export const isuser_typing = (obj?: { __typename?: any } | null): obj is user_typing => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing"')
  return user_typing_possibleTypes.includes(obj.__typename)
}



const user_typing_aggregate_possibleTypes: string[] = ['user_typing_aggregate']
export const isuser_typing_aggregate = (obj?: { __typename?: any } | null): obj is user_typing_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_aggregate"')
  return user_typing_aggregate_possibleTypes.includes(obj.__typename)
}



const user_typing_aggregate_fields_possibleTypes: string[] = ['user_typing_aggregate_fields']
export const isuser_typing_aggregate_fields = (obj?: { __typename?: any } | null): obj is user_typing_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_aggregate_fields"')
  return user_typing_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const user_typing_avg_fields_possibleTypes: string[] = ['user_typing_avg_fields']
export const isuser_typing_avg_fields = (obj?: { __typename?: any } | null): obj is user_typing_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_avg_fields"')
  return user_typing_avg_fields_possibleTypes.includes(obj.__typename)
}



const user_typing_max_fields_possibleTypes: string[] = ['user_typing_max_fields']
export const isuser_typing_max_fields = (obj?: { __typename?: any } | null): obj is user_typing_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_max_fields"')
  return user_typing_max_fields_possibleTypes.includes(obj.__typename)
}



const user_typing_min_fields_possibleTypes: string[] = ['user_typing_min_fields']
export const isuser_typing_min_fields = (obj?: { __typename?: any } | null): obj is user_typing_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_min_fields"')
  return user_typing_min_fields_possibleTypes.includes(obj.__typename)
}



const user_typing_mutation_response_possibleTypes: string[] = ['user_typing_mutation_response']
export const isuser_typing_mutation_response = (obj?: { __typename?: any } | null): obj is user_typing_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_mutation_response"')
  return user_typing_mutation_response_possibleTypes.includes(obj.__typename)
}



const user_typing_stddev_fields_possibleTypes: string[] = ['user_typing_stddev_fields']
export const isuser_typing_stddev_fields = (obj?: { __typename?: any } | null): obj is user_typing_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_stddev_fields"')
  return user_typing_stddev_fields_possibleTypes.includes(obj.__typename)
}



const user_typing_stddev_pop_fields_possibleTypes: string[] = ['user_typing_stddev_pop_fields']
export const isuser_typing_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is user_typing_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_stddev_pop_fields"')
  return user_typing_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const user_typing_stddev_samp_fields_possibleTypes: string[] = ['user_typing_stddev_samp_fields']
export const isuser_typing_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is user_typing_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_stddev_samp_fields"')
  return user_typing_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const user_typing_sum_fields_possibleTypes: string[] = ['user_typing_sum_fields']
export const isuser_typing_sum_fields = (obj?: { __typename?: any } | null): obj is user_typing_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_sum_fields"')
  return user_typing_sum_fields_possibleTypes.includes(obj.__typename)
}



const user_typing_var_pop_fields_possibleTypes: string[] = ['user_typing_var_pop_fields']
export const isuser_typing_var_pop_fields = (obj?: { __typename?: any } | null): obj is user_typing_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_var_pop_fields"')
  return user_typing_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const user_typing_var_samp_fields_possibleTypes: string[] = ['user_typing_var_samp_fields']
export const isuser_typing_var_samp_fields = (obj?: { __typename?: any } | null): obj is user_typing_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_var_samp_fields"')
  return user_typing_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const user_typing_variance_fields_possibleTypes: string[] = ['user_typing_variance_fields']
export const isuser_typing_variance_fields = (obj?: { __typename?: any } | null): obj is user_typing_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_typing_variance_fields"')
  return user_typing_variance_fields_possibleTypes.includes(obj.__typename)
}



const user_var_pop_fields_possibleTypes: string[] = ['user_var_pop_fields']
export const isuser_var_pop_fields = (obj?: { __typename?: any } | null): obj is user_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_var_pop_fields"')
  return user_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const user_var_samp_fields_possibleTypes: string[] = ['user_var_samp_fields']
export const isuser_var_samp_fields = (obj?: { __typename?: any } | null): obj is user_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_var_samp_fields"')
  return user_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const user_variance_fields_possibleTypes: string[] = ['user_variance_fields']
export const isuser_variance_fields = (obj?: { __typename?: any } | null): obj is user_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isuser_variance_fields"')
  return user_variance_fields_possibleTypes.includes(obj.__typename)
}
