export default {
    "scalars": [
        0,
        2,
        3,
        5,
        7,
        9,
        18,
        36,
        47,
        51,
        53,
        58,
        75,
        85,
        89,
        91,
        97,
        106,
        110,
        112,
        118,
        126,
        130
    ],
    "types": {
        "Boolean": {},
        "Boolean_comparison_exp": {
            "_eq": [
                0
            ],
            "_gt": [
                0
            ],
            "_gte": [
                0
            ],
            "_in": [
                0
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                0
            ],
            "_lte": [
                0
            ],
            "_neq": [
                0
            ],
            "_nin": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "Float": {},
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                3
            ],
            "_gt": [
                3
            ],
            "_gte": [
                3
            ],
            "_in": [
                3
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                3
            ],
            "_lte": [
                3
            ],
            "_neq": [
                3
            ],
            "_nin": [
                3
            ],
            "__typename": [
                5
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                5
            ],
            "_gt": [
                5
            ],
            "_gte": [
                5
            ],
            "_ilike": [
                5
            ],
            "_in": [
                5
            ],
            "_iregex": [
                5
            ],
            "_is_null": [
                0
            ],
            "_like": [
                5
            ],
            "_lt": [
                5
            ],
            "_lte": [
                5
            ],
            "_neq": [
                5
            ],
            "_nilike": [
                5
            ],
            "_nin": [
                5
            ],
            "_niregex": [
                5
            ],
            "_nlike": [
                5
            ],
            "_nregex": [
                5
            ],
            "_nsimilar": [
                5
            ],
            "_regex": [
                5
            ],
            "_similar": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "bigint": {},
        "bigint_comparison_exp": {
            "_eq": [
                7
            ],
            "_gt": [
                7
            ],
            "_gte": [
                7
            ],
            "_in": [
                7
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                7
            ],
            "_lte": [
                7
            ],
            "_neq": [
                7
            ],
            "_nin": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "cursor_ordering": {},
        "online_users": {
            "count": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "online_users_aggregate": {
            "aggregate": [
                12
            ],
            "nodes": [
                10
            ],
            "__typename": [
                5
            ]
        },
        "online_users_aggregate_fields": {
            "avg": [
                13
            ],
            "count": [
                3,
                {
                    "columns": [
                        18,
                        "[online_users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                15
            ],
            "min": [
                16
            ],
            "stddev": [
                19
            ],
            "stddev_pop": [
                20
            ],
            "stddev_samp": [
                21
            ],
            "sum": [
                24
            ],
            "var_pop": [
                25
            ],
            "var_samp": [
                26
            ],
            "variance": [
                27
            ],
            "__typename": [
                5
            ]
        },
        "online_users_avg_fields": {
            "count": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "online_users_bool_exp": {
            "_and": [
                14
            ],
            "_not": [
                14
            ],
            "_or": [
                14
            ],
            "count": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "online_users_max_fields": {
            "count": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "online_users_min_fields": {
            "count": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "online_users_order_by": {
            "count": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "online_users_select_column": {},
        "online_users_stddev_fields": {
            "count": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "online_users_stddev_pop_fields": {
            "count": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "online_users_stddev_samp_fields": {
            "count": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "online_users_stream_cursor_input": {
            "initial_value": [
                23
            ],
            "ordering": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "online_users_stream_cursor_value_input": {
            "count": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "online_users_sum_fields": {
            "count": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "online_users_var_pop_fields": {
            "count": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "online_users_var_samp_fields": {
            "count": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "online_users_variance_fields": {
            "count": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "option": {
            "id": [
                112
            ],
            "poll": [
                54
            ],
            "poll_id": [
                112
            ],
            "text": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "option_aggregate": {
            "aggregate": [
                32
            ],
            "nodes": [
                28
            ],
            "__typename": [
                5
            ]
        },
        "option_aggregate_bool_exp": {
            "count": [
                31
            ],
            "__typename": [
                5
            ]
        },
        "option_aggregate_bool_exp_count": {
            "arguments": [
                47
            ],
            "distinct": [
                0
            ],
            "filter": [
                35
            ],
            "predicate": [
                4
            ],
            "__typename": [
                5
            ]
        },
        "option_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        47,
                        "[option_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                38
            ],
            "min": [
                40
            ],
            "__typename": [
                5
            ]
        },
        "option_aggregate_order_by": {
            "count": [
                53
            ],
            "max": [
                39
            ],
            "min": [
                41
            ],
            "__typename": [
                5
            ]
        },
        "option_arr_rel_insert_input": {
            "data": [
                37
            ],
            "on_conflict": [
                44
            ],
            "__typename": [
                5
            ]
        },
        "option_bool_exp": {
            "_and": [
                35
            ],
            "_not": [
                35
            ],
            "_or": [
                35
            ],
            "id": [
                113
            ],
            "poll": [
                57
            ],
            "poll_id": [
                113
            ],
            "text": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "option_constraint": {},
        "option_insert_input": {
            "id": [
                112
            ],
            "poll": [
                63
            ],
            "poll_id": [
                112
            ],
            "text": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "option_max_fields": {
            "id": [
                112
            ],
            "poll_id": [
                112
            ],
            "text": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "option_max_order_by": {
            "id": [
                53
            ],
            "poll_id": [
                53
            ],
            "text": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "option_min_fields": {
            "id": [
                112
            ],
            "poll_id": [
                112
            ],
            "text": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "option_min_order_by": {
            "id": [
                53
            ],
            "poll_id": [
                53
            ],
            "text": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "option_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                28
            ],
            "__typename": [
                5
            ]
        },
        "option_obj_rel_insert_input": {
            "data": [
                37
            ],
            "on_conflict": [
                44
            ],
            "__typename": [
                5
            ]
        },
        "option_on_conflict": {
            "constraint": [
                36
            ],
            "update_columns": [
                51
            ],
            "where": [
                35
            ],
            "__typename": [
                5
            ]
        },
        "option_order_by": {
            "id": [
                53
            ],
            "poll": [
                65
            ],
            "poll_id": [
                53
            ],
            "text": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "option_pk_columns_input": {
            "id": [
                112
            ],
            "__typename": [
                5
            ]
        },
        "option_select_column": {},
        "option_set_input": {
            "id": [
                112
            ],
            "poll_id": [
                112
            ],
            "text": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "option_stream_cursor_input": {
            "initial_value": [
                50
            ],
            "ordering": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "option_stream_cursor_value_input": {
            "id": [
                112
            ],
            "poll_id": [
                112
            ],
            "text": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "option_update_column": {},
        "option_updates": {
            "_set": [
                48
            ],
            "where": [
                35
            ],
            "__typename": [
                5
            ]
        },
        "order_by": {},
        "poll": {
            "created_at": [
                91
            ],
            "created_by": [
                112
            ],
            "id": [
                112
            ],
            "options": [
                28,
                {
                    "distinct_on": [
                        47,
                        "[option_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        45,
                        "[option_order_by!]"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "options_aggregate": [
                29,
                {
                    "distinct_on": [
                        47,
                        "[option_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        45,
                        "[option_order_by!]"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "question": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "poll_aggregate": {
            "aggregate": [
                56
            ],
            "nodes": [
                54
            ],
            "__typename": [
                5
            ]
        },
        "poll_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        85,
                        "[poll_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                60
            ],
            "min": [
                61
            ],
            "__typename": [
                5
            ]
        },
        "poll_bool_exp": {
            "_and": [
                57
            ],
            "_not": [
                57
            ],
            "_or": [
                57
            ],
            "created_at": [
                92
            ],
            "created_by": [
                113
            ],
            "id": [
                113
            ],
            "options": [
                35
            ],
            "options_aggregate": [
                30
            ],
            "question": [
                6
            ],
            "__typename": [
                5
            ]
        },
        "poll_constraint": {},
        "poll_insert_input": {
            "created_at": [
                91
            ],
            "created_by": [
                112
            ],
            "id": [
                112
            ],
            "options": [
                34
            ],
            "question": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "poll_max_fields": {
            "created_at": [
                91
            ],
            "created_by": [
                112
            ],
            "id": [
                112
            ],
            "question": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "poll_min_fields": {
            "created_at": [
                91
            ],
            "created_by": [
                112
            ],
            "id": [
                112
            ],
            "question": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "poll_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                54
            ],
            "__typename": [
                5
            ]
        },
        "poll_obj_rel_insert_input": {
            "data": [
                59
            ],
            "on_conflict": [
                64
            ],
            "__typename": [
                5
            ]
        },
        "poll_on_conflict": {
            "constraint": [
                58
            ],
            "update_columns": [
                89
            ],
            "where": [
                57
            ],
            "__typename": [
                5
            ]
        },
        "poll_order_by": {
            "created_at": [
                53
            ],
            "created_by": [
                53
            ],
            "id": [
                53
            ],
            "options_aggregate": [
                33
            ],
            "question": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "poll_pk_columns_input": {
            "id": [
                112
            ],
            "__typename": [
                5
            ]
        },
        "poll_results": {
            "option": [
                28
            ],
            "option_id": [
                112
            ],
            "poll": [
                54
            ],
            "poll_id": [
                112
            ],
            "votes": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_aggregate": {
            "aggregate": [
                69
            ],
            "nodes": [
                67
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_aggregate_fields": {
            "avg": [
                70
            ],
            "count": [
                3,
                {
                    "columns": [
                        75,
                        "[poll_results_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                72
            ],
            "min": [
                73
            ],
            "stddev": [
                76
            ],
            "stddev_pop": [
                77
            ],
            "stddev_samp": [
                78
            ],
            "sum": [
                81
            ],
            "var_pop": [
                82
            ],
            "var_samp": [
                83
            ],
            "variance": [
                84
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_avg_fields": {
            "votes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_bool_exp": {
            "_and": [
                71
            ],
            "_not": [
                71
            ],
            "_or": [
                71
            ],
            "option": [
                35
            ],
            "option_id": [
                113
            ],
            "poll": [
                57
            ],
            "poll_id": [
                113
            ],
            "votes": [
                8
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_max_fields": {
            "option_id": [
                112
            ],
            "poll_id": [
                112
            ],
            "votes": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_min_fields": {
            "option_id": [
                112
            ],
            "poll_id": [
                112
            ],
            "votes": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_order_by": {
            "option": [
                45
            ],
            "option_id": [
                53
            ],
            "poll": [
                65
            ],
            "poll_id": [
                53
            ],
            "votes": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_select_column": {},
        "poll_results_stddev_fields": {
            "votes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_stddev_pop_fields": {
            "votes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_stddev_samp_fields": {
            "votes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_stream_cursor_input": {
            "initial_value": [
                80
            ],
            "ordering": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_stream_cursor_value_input": {
            "option_id": [
                112
            ],
            "poll_id": [
                112
            ],
            "votes": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_sum_fields": {
            "votes": [
                7
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_var_pop_fields": {
            "votes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_var_samp_fields": {
            "votes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "poll_results_variance_fields": {
            "votes": [
                2
            ],
            "__typename": [
                5
            ]
        },
        "poll_select_column": {},
        "poll_set_input": {
            "created_at": [
                91
            ],
            "created_by": [
                112
            ],
            "id": [
                112
            ],
            "question": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "poll_stream_cursor_input": {
            "initial_value": [
                88
            ],
            "ordering": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "poll_stream_cursor_value_input": {
            "created_at": [
                91
            ],
            "created_by": [
                112
            ],
            "id": [
                112
            ],
            "question": [
                5
            ],
            "__typename": [
                5
            ]
        },
        "poll_update_column": {},
        "poll_updates": {
            "_set": [
                86
            ],
            "where": [
                57
            ],
            "__typename": [
                5
            ]
        },
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                91
            ],
            "_gt": [
                91
            ],
            "_gte": [
                91
            ],
            "_in": [
                91
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                91
            ],
            "_lte": [
                91
            ],
            "_neq": [
                91
            ],
            "_nin": [
                91
            ],
            "__typename": [
                5
            ]
        },
        "user": {
            "created_at": [
                91
            ],
            "id": [
                112
            ],
            "last_seen_at": [
                91
            ],
            "online_ping": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "user_aggregate": {
            "aggregate": [
                95
            ],
            "nodes": [
                93
            ],
            "__typename": [
                5
            ]
        },
        "user_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        106,
                        "[user_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                99
            ],
            "min": [
                100
            ],
            "__typename": [
                5
            ]
        },
        "user_bool_exp": {
            "_and": [
                96
            ],
            "_not": [
                96
            ],
            "_or": [
                96
            ],
            "created_at": [
                92
            ],
            "id": [
                113
            ],
            "last_seen_at": [
                92
            ],
            "online_ping": [
                1
            ],
            "__typename": [
                5
            ]
        },
        "user_constraint": {},
        "user_insert_input": {
            "created_at": [
                91
            ],
            "id": [
                112
            ],
            "last_seen_at": [
                91
            ],
            "online_ping": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "user_max_fields": {
            "created_at": [
                91
            ],
            "id": [
                112
            ],
            "last_seen_at": [
                91
            ],
            "__typename": [
                5
            ]
        },
        "user_min_fields": {
            "created_at": [
                91
            ],
            "id": [
                112
            ],
            "last_seen_at": [
                91
            ],
            "__typename": [
                5
            ]
        },
        "user_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                93
            ],
            "__typename": [
                5
            ]
        },
        "user_obj_rel_insert_input": {
            "data": [
                98
            ],
            "on_conflict": [
                103
            ],
            "__typename": [
                5
            ]
        },
        "user_on_conflict": {
            "constraint": [
                97
            ],
            "update_columns": [
                110
            ],
            "where": [
                96
            ],
            "__typename": [
                5
            ]
        },
        "user_order_by": {
            "created_at": [
                53
            ],
            "id": [
                53
            ],
            "last_seen_at": [
                53
            ],
            "online_ping": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "user_pk_columns_input": {
            "id": [
                112
            ],
            "__typename": [
                5
            ]
        },
        "user_select_column": {},
        "user_set_input": {
            "created_at": [
                91
            ],
            "id": [
                112
            ],
            "last_seen_at": [
                91
            ],
            "online_ping": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "user_stream_cursor_input": {
            "initial_value": [
                109
            ],
            "ordering": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "user_stream_cursor_value_input": {
            "created_at": [
                91
            ],
            "id": [
                112
            ],
            "last_seen_at": [
                91
            ],
            "online_ping": [
                0
            ],
            "__typename": [
                5
            ]
        },
        "user_update_column": {},
        "user_updates": {
            "_set": [
                107
            ],
            "where": [
                96
            ],
            "__typename": [
                5
            ]
        },
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                112
            ],
            "_gt": [
                112
            ],
            "_gte": [
                112
            ],
            "_in": [
                112
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                112
            ],
            "_lte": [
                112
            ],
            "_neq": [
                112
            ],
            "_nin": [
                112
            ],
            "__typename": [
                5
            ]
        },
        "vote": {
            "created_at": [
                91
            ],
            "created_by_user": [
                93
            ],
            "created_by_user_id": [
                112
            ],
            "id": [
                112
            ],
            "option": [
                28
            ],
            "option_id": [
                112
            ],
            "__typename": [
                5
            ]
        },
        "vote_aggregate": {
            "aggregate": [
                116
            ],
            "nodes": [
                114
            ],
            "__typename": [
                5
            ]
        },
        "vote_aggregate_fields": {
            "count": [
                3,
                {
                    "columns": [
                        126,
                        "[vote_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                120
            ],
            "min": [
                121
            ],
            "__typename": [
                5
            ]
        },
        "vote_bool_exp": {
            "_and": [
                117
            ],
            "_not": [
                117
            ],
            "_or": [
                117
            ],
            "created_at": [
                92
            ],
            "created_by_user": [
                96
            ],
            "created_by_user_id": [
                113
            ],
            "id": [
                113
            ],
            "option": [
                35
            ],
            "option_id": [
                113
            ],
            "__typename": [
                5
            ]
        },
        "vote_constraint": {},
        "vote_insert_input": {
            "created_at": [
                91
            ],
            "created_by_user": [
                102
            ],
            "created_by_user_id": [
                112
            ],
            "id": [
                112
            ],
            "option": [
                43
            ],
            "option_id": [
                112
            ],
            "__typename": [
                5
            ]
        },
        "vote_max_fields": {
            "created_at": [
                91
            ],
            "created_by_user_id": [
                112
            ],
            "id": [
                112
            ],
            "option_id": [
                112
            ],
            "__typename": [
                5
            ]
        },
        "vote_min_fields": {
            "created_at": [
                91
            ],
            "created_by_user_id": [
                112
            ],
            "id": [
                112
            ],
            "option_id": [
                112
            ],
            "__typename": [
                5
            ]
        },
        "vote_mutation_response": {
            "affected_rows": [
                3
            ],
            "returning": [
                114
            ],
            "__typename": [
                5
            ]
        },
        "vote_on_conflict": {
            "constraint": [
                118
            ],
            "update_columns": [
                130
            ],
            "where": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "vote_order_by": {
            "created_at": [
                53
            ],
            "created_by_user": [
                104
            ],
            "created_by_user_id": [
                53
            ],
            "id": [
                53
            ],
            "option": [
                45
            ],
            "option_id": [
                53
            ],
            "__typename": [
                5
            ]
        },
        "vote_pk_columns_input": {
            "id": [
                112
            ],
            "__typename": [
                5
            ]
        },
        "vote_select_column": {},
        "vote_set_input": {
            "created_at": [
                91
            ],
            "created_by_user_id": [
                112
            ],
            "id": [
                112
            ],
            "option_id": [
                112
            ],
            "__typename": [
                5
            ]
        },
        "vote_stream_cursor_input": {
            "initial_value": [
                129
            ],
            "ordering": [
                9
            ],
            "__typename": [
                5
            ]
        },
        "vote_stream_cursor_value_input": {
            "created_at": [
                91
            ],
            "created_by_user_id": [
                112
            ],
            "id": [
                112
            ],
            "option_id": [
                112
            ],
            "__typename": [
                5
            ]
        },
        "vote_update_column": {},
        "vote_updates": {
            "_set": [
                127
            ],
            "where": [
                117
            ],
            "__typename": [
                5
            ]
        },
        "Query": {
            "online_users": [
                10,
                {
                    "distinct_on": [
                        18,
                        "[online_users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[online_users_order_by!]"
                    ],
                    "where": [
                        14
                    ]
                }
            ],
            "online_users_aggregate": [
                11,
                {
                    "distinct_on": [
                        18,
                        "[online_users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[online_users_order_by!]"
                    ],
                    "where": [
                        14
                    ]
                }
            ],
            "option": [
                28,
                {
                    "distinct_on": [
                        47,
                        "[option_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        45,
                        "[option_order_by!]"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "option_aggregate": [
                29,
                {
                    "distinct_on": [
                        47,
                        "[option_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        45,
                        "[option_order_by!]"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "option_by_pk": [
                28,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "poll": [
                54,
                {
                    "distinct_on": [
                        85,
                        "[poll_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        65,
                        "[poll_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "poll_aggregate": [
                55,
                {
                    "distinct_on": [
                        85,
                        "[poll_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        65,
                        "[poll_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "poll_by_pk": [
                54,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "poll_results": [
                67,
                {
                    "distinct_on": [
                        75,
                        "[poll_results_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        74,
                        "[poll_results_order_by!]"
                    ],
                    "where": [
                        71
                    ]
                }
            ],
            "poll_results_aggregate": [
                68,
                {
                    "distinct_on": [
                        75,
                        "[poll_results_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        74,
                        "[poll_results_order_by!]"
                    ],
                    "where": [
                        71
                    ]
                }
            ],
            "user": [
                93,
                {
                    "distinct_on": [
                        106,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        104,
                        "[user_order_by!]"
                    ],
                    "where": [
                        96
                    ]
                }
            ],
            "user_aggregate": [
                94,
                {
                    "distinct_on": [
                        106,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        104,
                        "[user_order_by!]"
                    ],
                    "where": [
                        96
                    ]
                }
            ],
            "user_by_pk": [
                93,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "vote": [
                114,
                {
                    "distinct_on": [
                        126,
                        "[vote_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        124,
                        "[vote_order_by!]"
                    ],
                    "where": [
                        117
                    ]
                }
            ],
            "vote_aggregate": [
                115,
                {
                    "distinct_on": [
                        126,
                        "[vote_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        124,
                        "[vote_order_by!]"
                    ],
                    "where": [
                        117
                    ]
                }
            ],
            "vote_by_pk": [
                114,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Mutation": {
            "delete_option": [
                42,
                {
                    "where": [
                        35,
                        "option_bool_exp!"
                    ]
                }
            ],
            "delete_option_by_pk": [
                28,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "delete_poll": [
                62,
                {
                    "where": [
                        57,
                        "poll_bool_exp!"
                    ]
                }
            ],
            "delete_poll_by_pk": [
                54,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "delete_user": [
                101,
                {
                    "where": [
                        96,
                        "user_bool_exp!"
                    ]
                }
            ],
            "delete_user_by_pk": [
                93,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "delete_vote": [
                122,
                {
                    "where": [
                        117,
                        "vote_bool_exp!"
                    ]
                }
            ],
            "delete_vote_by_pk": [
                114,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "insert_option": [
                42,
                {
                    "objects": [
                        37,
                        "[option_insert_input!]!"
                    ],
                    "on_conflict": [
                        44
                    ]
                }
            ],
            "insert_option_one": [
                28,
                {
                    "object": [
                        37,
                        "option_insert_input!"
                    ],
                    "on_conflict": [
                        44
                    ]
                }
            ],
            "insert_poll": [
                62,
                {
                    "objects": [
                        59,
                        "[poll_insert_input!]!"
                    ],
                    "on_conflict": [
                        64
                    ]
                }
            ],
            "insert_poll_one": [
                54,
                {
                    "object": [
                        59,
                        "poll_insert_input!"
                    ],
                    "on_conflict": [
                        64
                    ]
                }
            ],
            "insert_user": [
                101,
                {
                    "objects": [
                        98,
                        "[user_insert_input!]!"
                    ],
                    "on_conflict": [
                        103
                    ]
                }
            ],
            "insert_user_one": [
                93,
                {
                    "object": [
                        98,
                        "user_insert_input!"
                    ],
                    "on_conflict": [
                        103
                    ]
                }
            ],
            "insert_vote": [
                122,
                {
                    "objects": [
                        119,
                        "[vote_insert_input!]!"
                    ],
                    "on_conflict": [
                        123
                    ]
                }
            ],
            "insert_vote_one": [
                114,
                {
                    "object": [
                        119,
                        "vote_insert_input!"
                    ],
                    "on_conflict": [
                        123
                    ]
                }
            ],
            "update_option": [
                42,
                {
                    "_set": [
                        48
                    ],
                    "where": [
                        35,
                        "option_bool_exp!"
                    ]
                }
            ],
            "update_option_by_pk": [
                28,
                {
                    "_set": [
                        48
                    ],
                    "pk_columns": [
                        46,
                        "option_pk_columns_input!"
                    ]
                }
            ],
            "update_option_many": [
                42,
                {
                    "updates": [
                        52,
                        "[option_updates!]!"
                    ]
                }
            ],
            "update_poll": [
                62,
                {
                    "_set": [
                        86
                    ],
                    "where": [
                        57,
                        "poll_bool_exp!"
                    ]
                }
            ],
            "update_poll_by_pk": [
                54,
                {
                    "_set": [
                        86
                    ],
                    "pk_columns": [
                        66,
                        "poll_pk_columns_input!"
                    ]
                }
            ],
            "update_poll_many": [
                62,
                {
                    "updates": [
                        90,
                        "[poll_updates!]!"
                    ]
                }
            ],
            "update_user": [
                101,
                {
                    "_set": [
                        107
                    ],
                    "where": [
                        96,
                        "user_bool_exp!"
                    ]
                }
            ],
            "update_user_by_pk": [
                93,
                {
                    "_set": [
                        107
                    ],
                    "pk_columns": [
                        105,
                        "user_pk_columns_input!"
                    ]
                }
            ],
            "update_user_many": [
                101,
                {
                    "updates": [
                        111,
                        "[user_updates!]!"
                    ]
                }
            ],
            "update_vote": [
                122,
                {
                    "_set": [
                        127
                    ],
                    "where": [
                        117,
                        "vote_bool_exp!"
                    ]
                }
            ],
            "update_vote_by_pk": [
                114,
                {
                    "_set": [
                        127
                    ],
                    "pk_columns": [
                        125,
                        "vote_pk_columns_input!"
                    ]
                }
            ],
            "update_vote_many": [
                122,
                {
                    "updates": [
                        131,
                        "[vote_updates!]!"
                    ]
                }
            ],
            "__typename": [
                5
            ]
        },
        "Subscription": {
            "online_users": [
                10,
                {
                    "distinct_on": [
                        18,
                        "[online_users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[online_users_order_by!]"
                    ],
                    "where": [
                        14
                    ]
                }
            ],
            "online_users_aggregate": [
                11,
                {
                    "distinct_on": [
                        18,
                        "[online_users_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        17,
                        "[online_users_order_by!]"
                    ],
                    "where": [
                        14
                    ]
                }
            ],
            "online_users_stream": [
                10,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        22,
                        "[online_users_stream_cursor_input]!"
                    ],
                    "where": [
                        14
                    ]
                }
            ],
            "option": [
                28,
                {
                    "distinct_on": [
                        47,
                        "[option_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        45,
                        "[option_order_by!]"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "option_aggregate": [
                29,
                {
                    "distinct_on": [
                        47,
                        "[option_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        45,
                        "[option_order_by!]"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "option_by_pk": [
                28,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "option_stream": [
                28,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        49,
                        "[option_stream_cursor_input]!"
                    ],
                    "where": [
                        35
                    ]
                }
            ],
            "poll": [
                54,
                {
                    "distinct_on": [
                        85,
                        "[poll_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        65,
                        "[poll_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "poll_aggregate": [
                55,
                {
                    "distinct_on": [
                        85,
                        "[poll_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        65,
                        "[poll_order_by!]"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "poll_by_pk": [
                54,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "poll_results": [
                67,
                {
                    "distinct_on": [
                        75,
                        "[poll_results_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        74,
                        "[poll_results_order_by!]"
                    ],
                    "where": [
                        71
                    ]
                }
            ],
            "poll_results_aggregate": [
                68,
                {
                    "distinct_on": [
                        75,
                        "[poll_results_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        74,
                        "[poll_results_order_by!]"
                    ],
                    "where": [
                        71
                    ]
                }
            ],
            "poll_results_stream": [
                67,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        79,
                        "[poll_results_stream_cursor_input]!"
                    ],
                    "where": [
                        71
                    ]
                }
            ],
            "poll_stream": [
                54,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        87,
                        "[poll_stream_cursor_input]!"
                    ],
                    "where": [
                        57
                    ]
                }
            ],
            "user": [
                93,
                {
                    "distinct_on": [
                        106,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        104,
                        "[user_order_by!]"
                    ],
                    "where": [
                        96
                    ]
                }
            ],
            "user_aggregate": [
                94,
                {
                    "distinct_on": [
                        106,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        104,
                        "[user_order_by!]"
                    ],
                    "where": [
                        96
                    ]
                }
            ],
            "user_by_pk": [
                93,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "user_stream": [
                93,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        108,
                        "[user_stream_cursor_input]!"
                    ],
                    "where": [
                        96
                    ]
                }
            ],
            "vote": [
                114,
                {
                    "distinct_on": [
                        126,
                        "[vote_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        124,
                        "[vote_order_by!]"
                    ],
                    "where": [
                        117
                    ]
                }
            ],
            "vote_aggregate": [
                115,
                {
                    "distinct_on": [
                        126,
                        "[vote_select_column!]"
                    ],
                    "limit": [
                        3
                    ],
                    "offset": [
                        3
                    ],
                    "order_by": [
                        124,
                        "[vote_order_by!]"
                    ],
                    "where": [
                        117
                    ]
                }
            ],
            "vote_by_pk": [
                114,
                {
                    "id": [
                        112,
                        "uuid!"
                    ]
                }
            ],
            "vote_stream": [
                114,
                {
                    "batch_size": [
                        3,
                        "Int!"
                    ],
                    "cursor": [
                        128,
                        "[vote_stream_cursor_input]!"
                    ],
                    "where": [
                        117
                    ]
                }
            ],
            "__typename": [
                5
            ]
        }
    }
}