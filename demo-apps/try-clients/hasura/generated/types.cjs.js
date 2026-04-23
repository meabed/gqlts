module.exports = {
    "scalars": [
        2,
        3,
        8,
        10,
        19,
        27,
        32,
        33,
        40,
        58,
        72,
        91,
        103,
        108,
        109
    ],
    "types": {
        "Int_comparison_exp": {
            "_eq": [
                108
            ],
            "_gt": [
                108
            ],
            "_gte": [
                108
            ],
            "_in": [
                108
            ],
            "_is_null": [
                109
            ],
            "_lt": [
                108
            ],
            "_lte": [
                108
            ],
            "_neq": [
                108
            ],
            "_nin": [
                108
            ],
            "__typename": [
                2
            ]
        },
        "String_comparison_exp": {
            "_eq": [
                2
            ],
            "_gt": [
                2
            ],
            "_gte": [
                2
            ],
            "_ilike": [
                2
            ],
            "_in": [
                2
            ],
            "_iregex": [
                2
            ],
            "_is_null": [
                109
            ],
            "_like": [
                2
            ],
            "_lt": [
                2
            ],
            "_lte": [
                2
            ],
            "_neq": [
                2
            ],
            "_nilike": [
                2
            ],
            "_nin": [
                2
            ],
            "_niregex": [
                2
            ],
            "_nlike": [
                2
            ],
            "_nregex": [
                2
            ],
            "_nsimilar": [
                2
            ],
            "_regex": [
                2
            ],
            "_similar": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "String": {},
        "cursor_ordering": {},
        "message": {
            "id": [
                108
            ],
            "text": [
                2
            ],
            "timestamp": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "message_aggregate": {
            "aggregate": [
                6
            ],
            "nodes": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "message_aggregate_fields": {
            "avg": [
                7
            ],
            "count": [
                108,
                {
                    "columns": [
                        19,
                        "[message_select_column!]"
                    ],
                    "distinct": [
                        109
                    ]
                }
            ],
            "max": [
                13
            ],
            "min": [
                14
            ],
            "stddev": [
                21
            ],
            "stddev_pop": [
                22
            ],
            "stddev_samp": [
                23
            ],
            "sum": [
                26
            ],
            "var_pop": [
                29
            ],
            "var_samp": [
                30
            ],
            "variance": [
                31
            ],
            "__typename": [
                2
            ]
        },
        "message_avg_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "Float": {},
        "message_bool_exp": {
            "_and": [
                9
            ],
            "_not": [
                9
            ],
            "_or": [
                9
            ],
            "id": [
                0
            ],
            "text": [
                1
            ],
            "timestamp": [
                34
            ],
            "username": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "message_constraint": {},
        "message_inc_input": {
            "id": [
                108
            ],
            "__typename": [
                2
            ]
        },
        "message_insert_input": {
            "id": [
                108
            ],
            "text": [
                2
            ],
            "timestamp": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "message_max_fields": {
            "id": [
                108
            ],
            "text": [
                2
            ],
            "timestamp": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "message_min_fields": {
            "id": [
                108
            ],
            "text": [
                2
            ],
            "timestamp": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "message_mutation_response": {
            "affected_rows": [
                108
            ],
            "returning": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "message_on_conflict": {
            "constraint": [
                10
            ],
            "update_columns": [
                27
            ],
            "where": [
                9
            ],
            "__typename": [
                2
            ]
        },
        "message_order_by": {
            "id": [
                32
            ],
            "text": [
                32
            ],
            "timestamp": [
                32
            ],
            "username": [
                32
            ],
            "__typename": [
                2
            ]
        },
        "message_pk_columns_input": {
            "id": [
                108
            ],
            "__typename": [
                2
            ]
        },
        "message_select_column": {},
        "message_set_input": {
            "id": [
                108
            ],
            "text": [
                2
            ],
            "timestamp": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "message_stddev_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "message_stddev_pop_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "message_stddev_samp_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "message_stream_cursor_input": {
            "initial_value": [
                25
            ],
            "ordering": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "message_stream_cursor_value_input": {
            "id": [
                108
            ],
            "text": [
                2
            ],
            "timestamp": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "message_sum_fields": {
            "id": [
                108
            ],
            "__typename": [
                2
            ]
        },
        "message_update_column": {},
        "message_updates": {
            "_inc": [
                11
            ],
            "_set": [
                20
            ],
            "where": [
                9
            ],
            "__typename": [
                2
            ]
        },
        "message_var_pop_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "message_var_samp_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "message_variance_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "order_by": {},
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                33
            ],
            "_gt": [
                33
            ],
            "_gte": [
                33
            ],
            "_in": [
                33
            ],
            "_is_null": [
                109
            ],
            "_lt": [
                33
            ],
            "_lte": [
                33
            ],
            "_neq": [
                33
            ],
            "_nin": [
                33
            ],
            "__typename": [
                2
            ]
        },
        "user": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_aggregate": {
            "aggregate": [
                37
            ],
            "nodes": [
                35
            ],
            "__typename": [
                2
            ]
        },
        "user_aggregate_fields": {
            "avg": [
                38
            ],
            "count": [
                108,
                {
                    "columns": [
                        72,
                        "[user_select_column!]"
                    ],
                    "distinct": [
                        109
                    ]
                }
            ],
            "max": [
                43
            ],
            "min": [
                44
            ],
            "stddev": [
                74
            ],
            "stddev_pop": [
                75
            ],
            "stddev_samp": [
                76
            ],
            "sum": [
                79
            ],
            "var_pop": [
                105
            ],
            "var_samp": [
                106
            ],
            "variance": [
                107
            ],
            "__typename": [
                2
            ]
        },
        "user_avg_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_bool_exp": {
            "_and": [
                39
            ],
            "_not": [
                39
            ],
            "_or": [
                39
            ],
            "id": [
                0
            ],
            "last_seen": [
                34
            ],
            "last_typed": [
                34
            ],
            "username": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "user_constraint": {},
        "user_inc_input": {
            "id": [
                108
            ],
            "__typename": [
                2
            ]
        },
        "user_insert_input": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_max_fields": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_min_fields": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_mutation_response": {
            "affected_rows": [
                108
            ],
            "returning": [
                35
            ],
            "__typename": [
                2
            ]
        },
        "user_on_conflict": {
            "constraint": [
                40
            ],
            "update_columns": [
                103
            ],
            "where": [
                39
            ],
            "__typename": [
                2
            ]
        },
        "user_online": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_online_aggregate": {
            "aggregate": [
                49
            ],
            "nodes": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "user_online_aggregate_fields": {
            "avg": [
                50
            ],
            "count": [
                108,
                {
                    "columns": [
                        58,
                        "[user_online_select_column!]"
                    ],
                    "distinct": [
                        109
                    ]
                }
            ],
            "max": [
                54
            ],
            "min": [
                55
            ],
            "stddev": [
                60
            ],
            "stddev_pop": [
                61
            ],
            "stddev_samp": [
                62
            ],
            "sum": [
                65
            ],
            "var_pop": [
                67
            ],
            "var_samp": [
                68
            ],
            "variance": [
                69
            ],
            "__typename": [
                2
            ]
        },
        "user_online_avg_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_online_bool_exp": {
            "_and": [
                51
            ],
            "_not": [
                51
            ],
            "_or": [
                51
            ],
            "id": [
                0
            ],
            "last_seen": [
                34
            ],
            "last_typed": [
                34
            ],
            "username": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "user_online_inc_input": {
            "id": [
                108
            ],
            "__typename": [
                2
            ]
        },
        "user_online_insert_input": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_online_max_fields": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_online_min_fields": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_online_mutation_response": {
            "affected_rows": [
                108
            ],
            "returning": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "user_online_order_by": {
            "id": [
                32
            ],
            "last_seen": [
                32
            ],
            "last_typed": [
                32
            ],
            "username": [
                32
            ],
            "__typename": [
                2
            ]
        },
        "user_online_select_column": {},
        "user_online_set_input": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_online_stddev_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_online_stddev_pop_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_online_stddev_samp_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_online_stream_cursor_input": {
            "initial_value": [
                64
            ],
            "ordering": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "user_online_stream_cursor_value_input": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_online_sum_fields": {
            "id": [
                108
            ],
            "__typename": [
                2
            ]
        },
        "user_online_updates": {
            "_inc": [
                52
            ],
            "_set": [
                59
            ],
            "where": [
                51
            ],
            "__typename": [
                2
            ]
        },
        "user_online_var_pop_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_online_var_samp_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_online_variance_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_order_by": {
            "id": [
                32
            ],
            "last_seen": [
                32
            ],
            "last_typed": [
                32
            ],
            "username": [
                32
            ],
            "__typename": [
                2
            ]
        },
        "user_pk_columns_input": {
            "id": [
                108
            ],
            "__typename": [
                2
            ]
        },
        "user_select_column": {},
        "user_set_input": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_stddev_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_stddev_pop_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_stddev_samp_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_stream_cursor_input": {
            "initial_value": [
                78
            ],
            "ordering": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "user_stream_cursor_value_input": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_sum_fields": {
            "id": [
                108
            ],
            "__typename": [
                2
            ]
        },
        "user_typing": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_aggregate": {
            "aggregate": [
                82
            ],
            "nodes": [
                80
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_aggregate_fields": {
            "avg": [
                83
            ],
            "count": [
                108,
                {
                    "columns": [
                        91,
                        "[user_typing_select_column!]"
                    ],
                    "distinct": [
                        109
                    ]
                }
            ],
            "max": [
                87
            ],
            "min": [
                88
            ],
            "stddev": [
                93
            ],
            "stddev_pop": [
                94
            ],
            "stddev_samp": [
                95
            ],
            "sum": [
                98
            ],
            "var_pop": [
                100
            ],
            "var_samp": [
                101
            ],
            "variance": [
                102
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_avg_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_bool_exp": {
            "_and": [
                84
            ],
            "_not": [
                84
            ],
            "_or": [
                84
            ],
            "id": [
                0
            ],
            "last_seen": [
                34
            ],
            "last_typed": [
                34
            ],
            "username": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_inc_input": {
            "id": [
                108
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_insert_input": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_max_fields": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_min_fields": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_mutation_response": {
            "affected_rows": [
                108
            ],
            "returning": [
                80
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_order_by": {
            "id": [
                32
            ],
            "last_seen": [
                32
            ],
            "last_typed": [
                32
            ],
            "username": [
                32
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_select_column": {},
        "user_typing_set_input": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_stddev_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_stddev_pop_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_stddev_samp_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_stream_cursor_input": {
            "initial_value": [
                97
            ],
            "ordering": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_stream_cursor_value_input": {
            "id": [
                108
            ],
            "last_seen": [
                33
            ],
            "last_typed": [
                33
            ],
            "username": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_sum_fields": {
            "id": [
                108
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_updates": {
            "_inc": [
                85
            ],
            "_set": [
                92
            ],
            "where": [
                84
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_var_pop_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_var_samp_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_typing_variance_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_update_column": {},
        "user_updates": {
            "_inc": [
                41
            ],
            "_set": [
                73
            ],
            "where": [
                39
            ],
            "__typename": [
                2
            ]
        },
        "user_var_pop_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_var_samp_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "user_variance_fields": {
            "id": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "Int": {},
        "Boolean": {},
        "Query": {
            "message": [
                4,
                {
                    "distinct_on": [
                        19,
                        "[message_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        17,
                        "[message_order_by!]"
                    ],
                    "where": [
                        9
                    ]
                }
            ],
            "message_aggregate": [
                5,
                {
                    "distinct_on": [
                        19,
                        "[message_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        17,
                        "[message_order_by!]"
                    ],
                    "where": [
                        9
                    ]
                }
            ],
            "message_by_pk": [
                4,
                {
                    "id": [
                        108,
                        "Int!"
                    ]
                }
            ],
            "user": [
                35,
                {
                    "distinct_on": [
                        72,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        70,
                        "[user_order_by!]"
                    ],
                    "where": [
                        39
                    ]
                }
            ],
            "user_aggregate": [
                36,
                {
                    "distinct_on": [
                        72,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        70,
                        "[user_order_by!]"
                    ],
                    "where": [
                        39
                    ]
                }
            ],
            "user_by_pk": [
                35,
                {
                    "id": [
                        108,
                        "Int!"
                    ]
                }
            ],
            "user_online": [
                47,
                {
                    "distinct_on": [
                        58,
                        "[user_online_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        57,
                        "[user_online_order_by!]"
                    ],
                    "where": [
                        51
                    ]
                }
            ],
            "user_online_aggregate": [
                48,
                {
                    "distinct_on": [
                        58,
                        "[user_online_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        57,
                        "[user_online_order_by!]"
                    ],
                    "where": [
                        51
                    ]
                }
            ],
            "user_typing": [
                80,
                {
                    "distinct_on": [
                        91,
                        "[user_typing_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        90,
                        "[user_typing_order_by!]"
                    ],
                    "where": [
                        84
                    ]
                }
            ],
            "user_typing_aggregate": [
                81,
                {
                    "distinct_on": [
                        91,
                        "[user_typing_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        90,
                        "[user_typing_order_by!]"
                    ],
                    "where": [
                        84
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Mutation": {
            "delete_message": [
                15,
                {
                    "where": [
                        9,
                        "message_bool_exp!"
                    ]
                }
            ],
            "delete_message_by_pk": [
                4,
                {
                    "id": [
                        108,
                        "Int!"
                    ]
                }
            ],
            "delete_user": [
                45,
                {
                    "where": [
                        39,
                        "user_bool_exp!"
                    ]
                }
            ],
            "delete_user_by_pk": [
                35,
                {
                    "id": [
                        108,
                        "Int!"
                    ]
                }
            ],
            "delete_user_online": [
                56,
                {
                    "where": [
                        51,
                        "user_online_bool_exp!"
                    ]
                }
            ],
            "delete_user_typing": [
                89,
                {
                    "where": [
                        84,
                        "user_typing_bool_exp!"
                    ]
                }
            ],
            "insert_message": [
                15,
                {
                    "objects": [
                        12,
                        "[message_insert_input!]!"
                    ],
                    "on_conflict": [
                        16
                    ]
                }
            ],
            "insert_message_one": [
                4,
                {
                    "object": [
                        12,
                        "message_insert_input!"
                    ],
                    "on_conflict": [
                        16
                    ]
                }
            ],
            "insert_user": [
                45,
                {
                    "objects": [
                        42,
                        "[user_insert_input!]!"
                    ],
                    "on_conflict": [
                        46
                    ]
                }
            ],
            "insert_user_one": [
                35,
                {
                    "object": [
                        42,
                        "user_insert_input!"
                    ],
                    "on_conflict": [
                        46
                    ]
                }
            ],
            "insert_user_online": [
                56,
                {
                    "objects": [
                        53,
                        "[user_online_insert_input!]!"
                    ]
                }
            ],
            "insert_user_online_one": [
                47,
                {
                    "object": [
                        53,
                        "user_online_insert_input!"
                    ]
                }
            ],
            "insert_user_typing": [
                89,
                {
                    "objects": [
                        86,
                        "[user_typing_insert_input!]!"
                    ]
                }
            ],
            "insert_user_typing_one": [
                80,
                {
                    "object": [
                        86,
                        "user_typing_insert_input!"
                    ]
                }
            ],
            "update_message": [
                15,
                {
                    "_inc": [
                        11
                    ],
                    "_set": [
                        20
                    ],
                    "where": [
                        9,
                        "message_bool_exp!"
                    ]
                }
            ],
            "update_message_by_pk": [
                4,
                {
                    "_inc": [
                        11
                    ],
                    "_set": [
                        20
                    ],
                    "pk_columns": [
                        18,
                        "message_pk_columns_input!"
                    ]
                }
            ],
            "update_message_many": [
                15,
                {
                    "updates": [
                        28,
                        "[message_updates!]!"
                    ]
                }
            ],
            "update_user": [
                45,
                {
                    "_inc": [
                        41
                    ],
                    "_set": [
                        73
                    ],
                    "where": [
                        39,
                        "user_bool_exp!"
                    ]
                }
            ],
            "update_user_by_pk": [
                35,
                {
                    "_inc": [
                        41
                    ],
                    "_set": [
                        73
                    ],
                    "pk_columns": [
                        71,
                        "user_pk_columns_input!"
                    ]
                }
            ],
            "update_user_many": [
                45,
                {
                    "updates": [
                        104,
                        "[user_updates!]!"
                    ]
                }
            ],
            "update_user_online": [
                56,
                {
                    "_inc": [
                        52
                    ],
                    "_set": [
                        59
                    ],
                    "where": [
                        51,
                        "user_online_bool_exp!"
                    ]
                }
            ],
            "update_user_online_many": [
                56,
                {
                    "updates": [
                        66,
                        "[user_online_updates!]!"
                    ]
                }
            ],
            "update_user_typing": [
                89,
                {
                    "_inc": [
                        85
                    ],
                    "_set": [
                        92
                    ],
                    "where": [
                        84,
                        "user_typing_bool_exp!"
                    ]
                }
            ],
            "update_user_typing_many": [
                89,
                {
                    "updates": [
                        99,
                        "[user_typing_updates!]!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Subscription": {
            "message": [
                4,
                {
                    "distinct_on": [
                        19,
                        "[message_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        17,
                        "[message_order_by!]"
                    ],
                    "where": [
                        9
                    ]
                }
            ],
            "message_aggregate": [
                5,
                {
                    "distinct_on": [
                        19,
                        "[message_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        17,
                        "[message_order_by!]"
                    ],
                    "where": [
                        9
                    ]
                }
            ],
            "message_by_pk": [
                4,
                {
                    "id": [
                        108,
                        "Int!"
                    ]
                }
            ],
            "message_stream": [
                4,
                {
                    "batch_size": [
                        108,
                        "Int!"
                    ],
                    "cursor": [
                        24,
                        "[message_stream_cursor_input]!"
                    ],
                    "where": [
                        9
                    ]
                }
            ],
            "user": [
                35,
                {
                    "distinct_on": [
                        72,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        70,
                        "[user_order_by!]"
                    ],
                    "where": [
                        39
                    ]
                }
            ],
            "user_aggregate": [
                36,
                {
                    "distinct_on": [
                        72,
                        "[user_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        70,
                        "[user_order_by!]"
                    ],
                    "where": [
                        39
                    ]
                }
            ],
            "user_by_pk": [
                35,
                {
                    "id": [
                        108,
                        "Int!"
                    ]
                }
            ],
            "user_online": [
                47,
                {
                    "distinct_on": [
                        58,
                        "[user_online_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        57,
                        "[user_online_order_by!]"
                    ],
                    "where": [
                        51
                    ]
                }
            ],
            "user_online_aggregate": [
                48,
                {
                    "distinct_on": [
                        58,
                        "[user_online_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        57,
                        "[user_online_order_by!]"
                    ],
                    "where": [
                        51
                    ]
                }
            ],
            "user_online_stream": [
                47,
                {
                    "batch_size": [
                        108,
                        "Int!"
                    ],
                    "cursor": [
                        63,
                        "[user_online_stream_cursor_input]!"
                    ],
                    "where": [
                        51
                    ]
                }
            ],
            "user_stream": [
                35,
                {
                    "batch_size": [
                        108,
                        "Int!"
                    ],
                    "cursor": [
                        77,
                        "[user_stream_cursor_input]!"
                    ],
                    "where": [
                        39
                    ]
                }
            ],
            "user_typing": [
                80,
                {
                    "distinct_on": [
                        91,
                        "[user_typing_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        90,
                        "[user_typing_order_by!]"
                    ],
                    "where": [
                        84
                    ]
                }
            ],
            "user_typing_aggregate": [
                81,
                {
                    "distinct_on": [
                        91,
                        "[user_typing_select_column!]"
                    ],
                    "limit": [
                        108
                    ],
                    "offset": [
                        108
                    ],
                    "order_by": [
                        90,
                        "[user_typing_order_by!]"
                    ],
                    "where": [
                        84
                    ]
                }
            ],
            "user_typing_stream": [
                80,
                {
                    "batch_size": [
                        108,
                        "Int!"
                    ],
                    "cursor": [
                        96,
                        "[user_typing_stream_cursor_input]!"
                    ],
                    "where": [
                        84
                    ]
                }
            ],
            "__typename": [
                2
            ]
        }
    }
}