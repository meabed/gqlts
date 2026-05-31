import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import { ApolloProvider, useQuery } from '@apollo/client/react';
import { Box, Spinner, Stack } from '@chakra-ui/react';
import React from 'react';

import { Hero, PageContainer, SectionTitle } from '../components/landing';
import { QueryResult, generateQueryOp } from '../generated/';

function tuple<T1, T2>(data: [T1, T2]): typeof data;
function tuple(data: Array<any>) {
  return data;
}

const Page = () => {
  const q = {
    countries: tuple([
      { filter: { continent: { nin: [] } } },
      {
        name: true,
        code: 1,
      },
    ]),
  };
  const { query, variables } = generateQueryOp(q);
  const { data: gqlData = {}, error } = useQuery<QueryResult<typeof q>>(gql(query), {
    variables,
  });
  const { data, errors, extensions } = gqlData;
  return (
    <Stack gap='40px' mt='40px'>
      <Hero
        bullet='Gqlts lets you write graphql queries as code'
        heading='Example use of Gqlts'
        subheading='countries fetched via https://countries.trevorblades.com'
      />
      <PageContainer>
        <SectionTitle heading='Countries' />
        {!data && (
          <Stack justify='center' align='center'>
            <Spinner />
          </Stack>
        )}
        {data && (
          <Stack gap='20px'>
            {data?.countries?.map((x: { name?: string }) => (
              <Box borderRadius='10px' p='20px' borderWidth='1px'>
                {x.name}
              </Box>
            ))}
          </Stack>
        )}
        {error && <Box color='red'>{error.message}</Box>}
      </PageContainer>
    </Stack>
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
