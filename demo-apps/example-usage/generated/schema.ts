export type Scalars = {
    Boolean: boolean,
    String: string,
    ID: string,
    _Any: any,
}

export interface Country {
    code: Scalars['ID']
    name: Scalars['String']
    native: Scalars['String']
    phone: Scalars['String']
    continent: Continent
    capital?: Scalars['String']
    currency?: Scalars['String']
    languages: Language[]
    emoji: Scalars['String']
    emojiU: Scalars['String']
    states: State[]
    __typename: 'Country'
}

export interface Continent {
    code: Scalars['ID']
    name: Scalars['String']
    countries: Country[]
    __typename: 'Continent'
}

export interface Language {
    code: Scalars['ID']
    name?: Scalars['String']
    native?: Scalars['String']
    rtl: Scalars['Boolean']
    __typename: 'Language'
}

export interface State {
    code?: Scalars['String']
    name: Scalars['String']
    country: Country
    __typename: 'State'
}

export interface Query {
    _entities: (_Entity | undefined)[]
    _service: _Service
    countries: Country[]
    country?: Country
    continents: Continent[]
    continent?: Continent
    languages: Language[]
    language?: Language
    __typename: 'Query'
}

export type _Entity = (Country | Continent | Language) & { __isUnion?: true }

export interface _Service {
    /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
    sdl?: Scalars['String']
    __typename: '_Service'
}

export interface CountryRequest{
    code?: boolean | number
    name?: boolean | number
    native?: boolean | number
    phone?: boolean | number
    continent?: ContinentRequest
    capital?: boolean | number
    currency?: boolean | number
    languages?: LanguageRequest
    emoji?: boolean | number
    emojiU?: boolean | number
    states?: StateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContinentRequest{
    code?: boolean | number
    name?: boolean | number
    countries?: CountryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LanguageRequest{
    code?: boolean | number
    name?: boolean | number
    native?: boolean | number
    rtl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StateRequest{
    code?: boolean | number
    name?: boolean | number
    country?: CountryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StringQueryOperatorInput {eq?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['String'] | null),glob?: (Scalars['String'] | null)}

export interface CountryFilterInput {code?: (StringQueryOperatorInput | null),currency?: (StringQueryOperatorInput | null),continent?: (StringQueryOperatorInput | null)}

export interface ContinentFilterInput {code?: (StringQueryOperatorInput | null)}

export interface LanguageFilterInput {code?: (StringQueryOperatorInput | null)}

export interface QueryRequest{
    _entities?: [{representations: Scalars['_Any'][]},_EntityRequest]
    _service?: _ServiceRequest
    countries?: [{filter?: (CountryFilterInput | null)},CountryRequest] | CountryRequest
    country?: [{code: Scalars['ID']},CountryRequest]
    continents?: [{filter?: (ContinentFilterInput | null)},ContinentRequest] | ContinentRequest
    continent?: [{code: Scalars['ID']},ContinentRequest]
    languages?: [{filter?: (LanguageFilterInput | null)},LanguageRequest] | LanguageRequest
    language?: [{code: Scalars['ID']},LanguageRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface _EntityRequest{
    on_Country?:CountryRequest,
    on_Continent?:ContinentRequest,
    on_Language?:LanguageRequest,
    __typename?: boolean | number
}

export interface _ServiceRequest{
    /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
    sdl?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Country_possibleTypes: string[] = ['Country']
export const isCountry = (obj?: { __typename?: any } | null): obj is Country => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCountry"')
  return Country_possibleTypes.includes(obj.__typename)
}



const Continent_possibleTypes: string[] = ['Continent']
export const isContinent = (obj?: { __typename?: any } | null): obj is Continent => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isContinent"')
  return Continent_possibleTypes.includes(obj.__typename)
}



const Language_possibleTypes: string[] = ['Language']
export const isLanguage = (obj?: { __typename?: any } | null): obj is Language => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLanguage"')
  return Language_possibleTypes.includes(obj.__typename)
}



const State_possibleTypes: string[] = ['State']
export const isState = (obj?: { __typename?: any } | null): obj is State => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isState"')
  return State_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const _Entity_possibleTypes: string[] = ['Country','Continent','Language']
export const is_Entity = (obj?: { __typename?: any } | null): obj is _Entity => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Entity"')
  return _Entity_possibleTypes.includes(obj.__typename)
}



const _Service_possibleTypes: string[] = ['_Service']
export const is_Service = (obj?: { __typename?: any } | null): obj is _Service => {
  if (!obj?.__typename) throw new Error('__typename is missing in "is_Service"')
  return _Service_possibleTypes.includes(obj.__typename)
}
