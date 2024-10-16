import { client } from './_app';
import { Box, Input, Spinner } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { Hero, PageContainer, SectionTitle } from 'landing-blocks';
import React, { useState } from 'react';

const Component = () => {
  const [regex, setRegex] = useState('.*');
  const func = (_: any, regex: string) =>
    client.query({
      countries: [{ filter: { continent: { regex: regex } } }, { name: 1, code: 1 }],
    });
  const { data: gqlData = {}, error } = useQuery({
    queryKey: ['countries', regex],
    queryFn: (context) => {
      return func(context, regex);
    },
  });
  const { data, errors, extensions } = gqlData;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Hero
        bullet='Gqlts lets you write graphql queries as code'
        heading='Example use of Gqlts'
        subheading='Search for countries via https://countries.trevorblades.com'
      />
      <PageContainer>
        <Box>Search a continent</Box>
        <Input variant='filled' value={regex} onChange={(e: any) => setRegex(e.target.value)} placeholder='.*' />
      </PageContainer>
      <PageContainer>
        <>
          <SectionTitle heading='Countries' />
          {!data && (
            <div>
              <Spinner />
            </div>
          )}
          {data && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {data?.countries?.map((x: any) => (
                <Box borderRadius='10px' p='20px' borderWidth='1px'>
                  {x.name}
                </Box>
              ))}
            </div>
          )}
          {error && <Box color='red'>{(error as Error).message}</Box>}
        </>
      </PageContainer>
    </div>
  );
};

const queryClient = new QueryClient();

export default function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );
}
