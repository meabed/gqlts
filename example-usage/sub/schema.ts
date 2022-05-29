export type Scalars = {
    Int: number,
    String: string,
    ID: string,
    Boolean: boolean,
}

export interface Image {
    id?: Scalars['Int']
    title?: Scalars['String']
    category?: Scalars['String']
    owner?: Scalars['String']
    url?: Scalars['String']
    __typename: 'Image'
}

export interface User {
    id?: Scalars['ID']
    name?: Scalars['String']
    age?: Scalars['Int']
    friends?: (User | undefined)[]
    __typename: 'User'
}

export interface Query {
    hello?: Scalars['String']
    image?: Image
    images?: (Image | undefined)[]
    user?: User
    users?: (User | undefined)[]
    __typename: 'Query'
}

export interface Mutation {
    addUser?: User
    __typename: 'Mutation'
}

export interface Subscription {
    userAdded?: User
    __typename: 'Subscription'
}

export interface ImageRequest{
    id?: boolean | number
    title?: boolean | number
    category?: boolean | number
    owner?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserRequest{
    id?: boolean | number
    name?: boolean | number
    age?: boolean | number
    friends?: [{a?: (Scalars['Int'] | null)},UserRequest] | UserRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    hello?: boolean | number
    image?: [{id: Scalars['Int']},ImageRequest]
    images?: [{category?: (Scalars['String'] | null)},ImageRequest] | ImageRequest
    user?: UserRequest
    users?: UserRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    addUser?: [{id?: (Scalars['ID'] | null),name: Scalars['String'],age?: (Scalars['Int'] | null)},UserRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionRequest{
    userAdded?: UserRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Image_possibleTypes: string[] = ['Image']
export const isImage = (obj?: { __typename?: any } | null): obj is Image => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isImage"')
  return Image_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes: string[] = ['User']
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const Subscription_possibleTypes: string[] = ['Subscription']
export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}
