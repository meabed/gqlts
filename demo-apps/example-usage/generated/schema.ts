export type Scalars = {
    Boolean: boolean,
    Float: number,
    ID: string,
    Int: number,
    String: string,
}

export interface Continent {
    code: Scalars['ID']
    countries: Country[]
    name: Scalars['String']
    __typename: 'Continent'
}

export interface Country {
    awsRegion: Scalars['String']
    capital?: Scalars['String']
    code: Scalars['ID']
    continent: Continent
    currencies: Scalars['String'][]
    currency?: Scalars['String']
    emoji: Scalars['String']
    emojiU: Scalars['String']
    languages: Language[]
    name: Scalars['String']
    native: Scalars['String']
    phone: Scalars['String']
    phones: Scalars['String'][]
    states: State[]
    __typename: 'Country'
}

export interface Language {
    code: Scalars['ID']
    name: Scalars['String']
    native: Scalars['String']
    rtl: Scalars['Boolean']
    __typename: 'Language'
}

export interface Query {
    continent?: Continent
    continents: Continent[]
    countries: Country[]
    country?: Country
    language?: Language
    languages: Language[]
    __typename: 'Query'
}

export interface State {
    code?: Scalars['String']
    country: Country
    name: Scalars['String']
    __typename: 'State'
}

export interface ContinentRequest{
    code?: boolean | number
    countries?: CountryRequest
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContinentFilterInput {code?: (StringQueryOperatorInput | null)}

export interface CountryRequest{
    awsRegion?: boolean | number
    capital?: boolean | number
    code?: boolean | number
    continent?: ContinentRequest
    currencies?: boolean | number
    currency?: boolean | number
    emoji?: boolean | number
    emojiU?: boolean | number
    languages?: LanguageRequest
    name?: [{lang?: (Scalars['String'] | null)}] | boolean | number
    native?: boolean | number
    phone?: boolean | number
    phones?: boolean | number
    states?: StateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CountryFilterInput {code?: (StringQueryOperatorInput | null),continent?: (StringQueryOperatorInput | null),currency?: (StringQueryOperatorInput | null)}

export interface LanguageRequest{
    code?: boolean | number
    name?: boolean | number
    native?: boolean | number
    rtl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LanguageFilterInput {code?: (StringQueryOperatorInput | null)}

export interface QueryRequest{
    continent?: [{code: Scalars['ID']},ContinentRequest]
    continents?: [{filter?: (ContinentFilterInput | null)},ContinentRequest] | ContinentRequest
    countries?: [{filter?: (CountryFilterInput | null)},CountryRequest] | CountryRequest
    country?: [{code: Scalars['ID']},CountryRequest]
    language?: [{code: Scalars['ID']},LanguageRequest]
    languages?: [{filter?: (LanguageFilterInput | null)},LanguageRequest] | LanguageRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StateRequest{
    code?: boolean | number
    country?: CountryRequest
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StringQueryOperatorInput {eq?: (Scalars['String'] | null),in?: (Scalars['String'][] | null),ne?: (Scalars['String'] | null),nin?: (Scalars['String'][] | null),regex?: (Scalars['String'] | null)}


const Continent_possibleTypes: string[] = ['Continent']
export const isContinent = (obj?: { __typename?: any } | null): obj is Continent => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isContinent"')
  return Continent_possibleTypes.includes(obj.__typename)
}



const Country_possibleTypes: string[] = ['Country']
export const isCountry = (obj?: { __typename?: any } | null): obj is Country => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCountry"')
  return Country_possibleTypes.includes(obj.__typename)
}



const Language_possibleTypes: string[] = ['Language']
export const isLanguage = (obj?: { __typename?: any } | null): obj is Language => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLanguage"')
  return Language_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const State_possibleTypes: string[] = ['State']
export const isState = (obj?: { __typename?: any } | null): obj is State => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isState"')
  return State_possibleTypes.includes(obj.__typename)
}
