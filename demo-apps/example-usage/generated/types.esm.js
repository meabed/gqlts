export default {
    "scalars": [
        0,
        5,
        6,
        7,
        12
    ],
    "types": {
        "Boolean": {},
        "Continent": {
            "code": [
                6
            ],
            "countries": [
                3
            ],
            "name": [
                12
            ],
            "__typename": [
                12
            ]
        },
        "ContinentFilterInput": {
            "code": [
                13
            ],
            "__typename": [
                12
            ]
        },
        "Country": {
            "awsRegion": [
                12
            ],
            "capital": [
                12
            ],
            "code": [
                6
            ],
            "continent": [
                1
            ],
            "currencies": [
                12
            ],
            "currency": [
                12
            ],
            "emoji": [
                12
            ],
            "emojiU": [
                12
            ],
            "languages": [
                8
            ],
            "name": [
                12,
                {
                    "lang": [
                        12
                    ]
                }
            ],
            "native": [
                12
            ],
            "phone": [
                12
            ],
            "phones": [
                12
            ],
            "states": [
                11
            ],
            "subdivisions": [
                14
            ],
            "__typename": [
                12
            ]
        },
        "CountryFilterInput": {
            "code": [
                13
            ],
            "continent": [
                13
            ],
            "currency": [
                13
            ],
            "name": [
                13
            ],
            "__typename": [
                12
            ]
        },
        "Float": {},
        "ID": {},
        "Int": {},
        "Language": {
            "code": [
                6
            ],
            "name": [
                12
            ],
            "native": [
                12
            ],
            "rtl": [
                0
            ],
            "__typename": [
                12
            ]
        },
        "LanguageFilterInput": {
            "code": [
                13
            ],
            "__typename": [
                12
            ]
        },
        "Query": {
            "continent": [
                1,
                {
                    "code": [
                        6,
                        "ID!"
                    ]
                }
            ],
            "continents": [
                1,
                {
                    "filter": [
                        2
                    ]
                }
            ],
            "countries": [
                3,
                {
                    "filter": [
                        4
                    ]
                }
            ],
            "country": [
                3,
                {
                    "code": [
                        6,
                        "ID!"
                    ]
                }
            ],
            "language": [
                8,
                {
                    "code": [
                        6,
                        "ID!"
                    ]
                }
            ],
            "languages": [
                8,
                {
                    "filter": [
                        9
                    ]
                }
            ],
            "__typename": [
                12
            ]
        },
        "State": {
            "code": [
                12
            ],
            "country": [
                3
            ],
            "name": [
                12
            ],
            "__typename": [
                12
            ]
        },
        "String": {},
        "StringQueryOperatorInput": {
            "eq": [
                12
            ],
            "in": [
                12
            ],
            "ne": [
                12
            ],
            "nin": [
                12
            ],
            "regex": [
                12
            ],
            "__typename": [
                12
            ]
        },
        "Subdivision": {
            "code": [
                6
            ],
            "emoji": [
                12
            ],
            "name": [
                12
            ],
            "__typename": [
                12
            ]
        }
    }
}