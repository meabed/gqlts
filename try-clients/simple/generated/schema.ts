export type Scalars = {
    Boolean: boolean,
    ID: string,
    String: string,
}

export interface Query {
    users?: User[]
    __typename: 'Query'
}


/** foobar */
export interface User {
    id?: Scalars['ID']
    name?: Scalars['String']
    __typename: 'User'
}

export interface QueryRequest{
    users?: UserRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** foobar */
export interface UserRequest{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes: string[] = ['User']
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}
