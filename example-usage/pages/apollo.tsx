import { Box, Spinner, Stack } from "@chakra-ui/react";
import { Hero, PageContainer, SectionTitle } from "landing-blocks";
import React from "react";
import { generateQueryOp, QueryResult } from "../generated/";
import { ApolloClient, ApolloProvider, gql, InMemoryCache, useQuery } from "@apollo/client";

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
    <Stack spacing="40px" mt="40px">
      <Hero
        bullet="Gqlts lets you write graphql queries as code"
        heading="Example use of Gqlts"
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
            {data?.countries?.map((x) => (
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
