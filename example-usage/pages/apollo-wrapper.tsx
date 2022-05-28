import { QueryHookOptions } from "@apollo/react-hooks";
import { Box, Spinner, Stack } from "@chakra-ui/react";
import { Hero, PageContainer, SectionTitle } from "landing-blocks";
import React from "react";
import { generateQueryOp, QueryRequest, QueryResult } from "../generated/";
import { ApolloClient, ApolloProvider, gql, useQuery, InMemoryCache } from "@apollo/client";

function tuple<T1, T2>(data: [T1, T2]): typeof data;
function tuple(data: Array<any>) {
  return data;
}

function useGenqlxQuery<Q extends QueryRequest>(q: Q, options?: QueryHookOptions) {
  const { query, variables } = generateQueryOp(q);
  return useQuery<QueryResult<typeof q>>(gql(query), {
    variables,
    ...options,
  });
}

const Page = () => {
  const { data: gqlData = {}, error } = useGenqlxQuery({
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
    <Stack spacing="40px" mt="40px">
      <Hero
        bullet="Genqlx lets you write graphql queries as code"
        heading="Example use of Genqlx"
        subheading="countries fetched via https://countries.trevorblades.com"
      />
      <PageContainer>
        <SectionTitle heading="Countries" />
        {!data && (
          <Stack justify="center" align="center">
            <Spinner />
          </Stack>
        )}
        {data && (
          <Stack spacing="20px">
            {data?.countries?.map((x: any) => (
              <Box borderRadius="10px" p="20px" borderWidth="1px">
                {x.name}
              </Box>
            ))}
          </Stack>
        )}
        {error && <Box color="red">{error.message}</Box>}
      </PageContainer>
    </Stack>
  );
};

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
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
