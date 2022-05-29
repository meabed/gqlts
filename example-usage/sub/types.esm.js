export default {
    "scalars": [
        1,
        2,
        4,
        8
    ],
    "types": {
        "Image": {
            "id": [
                1
            ],
            "title": [
                2
            ],
            "category": [
                2
            ],
            "owner": [
                2
            ],
            "url": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Int": {},
        "String": {},
        "User": {
            "id": [
                4
            ],
            "name": [
                2
            ],
            "age": [
                1
            ],
            "friends": [
                3,
                {
                    "a": [
                        1
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "Query": {
            "hello": [
                2
            ],
            "image": [
                0,
                {
                    "id": [
                        1,
                        "Int!"
                    ]
                }
            ],
            "images": [
                0,
                {
                    "category": [
                        2
                    ]
                }
            ],
            "user": [
                3
            ],
            "users": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "Mutation": {
            "addUser": [
                3,
                {
                    "id": [
                        4
                    ],
                    "name": [
                        2,
                        "String!"
                    ],
                    "age": [
                        1
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Subscription": {
            "userAdded": [
                3
            ],
            "__typename": [
                2
            ]
        },
        "Boolean": {}
    }
}