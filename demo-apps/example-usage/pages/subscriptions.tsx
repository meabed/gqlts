import { createClient } from '../hasura';
import { Box, Spinner, Stack } from '@chakra-ui/react';
import { Hero, PageContainer, SectionTitle } from 'landing-blocks';
import React from 'react';
import { useObservable } from 'react-extra-hooks';

const client = createClient({
  subscription: {
    url: 'wss://realtime-poll.hasura.app/v1/graphql',
  },
});

console.log('client', client);

const Page = () => {
  const {
    result: data,
    loading,
    error,
  } = useObservable(() =>
    client.subscription({
      user_online: [{}, { id: 1, username: 1, created_at: 1, last_seen_at: 1 }],
    })
  );
  return (
    <Stack spacing='40px' mt='40px'>
      <Hero
        bullet='Gqlts lets you write graphql queries as code'
        heading='Example use of Gqlts'
        subheading='Search for countries via https://countries.trevorblades.com'
      />
      <PageContainer>
        <SectionTitle heading='Countries' />
        {!data && (
          <Stack justify='center' align='center'>
            <Spinner />
          </Stack>
        )}
        {data && (
          <Stack spacing='20px'>
            {data?.user?.map((x: any) => (
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

export default Page;
