import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider, useQuery, type QueryHookOptions } from '@apollo/client/react';
import { Box } from '@chakra-ui/react';
import React from 'react';

import { Hero, PageContainer, SectionTitle } from '../components/landing';
import { QueryRequest, QueryResult, generateQueryOp } from '../generated/';

function tuple<T1, T2>(data: [T1, T2]): typeof data;
function tuple(data: Array<any>) {
  return data;
}

function useGqltsQuery<Q extends QueryRequest>(q: Q, options?: QueryHookOptions<QueryResult<Q>>) {
  const { query, variables } = generateQueryOp(q);
  return useQuery<QueryResult<typeof q>>(gql(query), {
    variables,
    ...options,
  });
}

const Page = () => {
  const { data: gqlData = {}, error } = useGqltsQuery({
    countries: [
      { filter: { continent: { nin: [] } } },
      {
        name: true,
        code: 1,
      },
    ],
  });
  const { data, errors, extensions } = gqlData;
  return (
    <div
      style={{
        marginTop: '40px',
        // spacing: '40px',
      }}
    >
      <Hero
        bullet='Gqlts lets you write graphql queries as code'
        heading='Example use of Gqlts'
        subheading='countries fetched via https://countries.trevorblades.com'
      />
      <PageContainer>
        <SectionTitle heading='Countries' />
        {!data && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Loading...
          </div>
        )}
        {data && (
          <div
            style={{
              display: 'flex',
              //  spacing='20px'
            }}
          >
            {data?.countries?.map((x: { name?: string }) => (
              <Box borderRadius='10px' p='20px' borderWidth='1px'>
                {x.name}
              </Box>
            ))}
          </div>
        )}
        {error && <Box color='red'>{error.message}</Box>}
      </PageContainer>
    </div>
  );
};

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://countries.trevorblades.com' }),
  cache: new InMemoryCache(),
});

const PageWrapped = () => {
  return (
    <ApolloProvider client={client}>
      <Page />
    </ApolloProvider>
  );
};

export default PageWrapped;
