import { Box, Link, Stack } from '@chakra-ui/react';
import { Hero, PageContainer } from '../components/landing';
import NextLink from 'next/link';
import React from 'react';

const paths: Record<any, any> = {
  'react-query': '/react-query',
  swr: '/swr',
  apollo: '/apollo',
  'apollo-wrapper': '/apollo-wrapper',
  'client/query': '/builtin-client/query',
  'client/subscription': '/builtin-client/subscription',
  'client/mutation': '/builtin-client/mutation',
};

const Page = () => {
  return (
    <Stack gap='40px' mt='40px'>
      <Hero subheading='Example of usage with gqlts' />
      <PageContainer gap='40px'>
        {Object.keys(paths).map((k) => (
          <Box color='green.400' borderRadius='10px' p='20px' borderWidth='1px' minW='100%'>
            <NextLink href={paths[k]}>
              <Link>{k}</Link>
            </NextLink>
          </Box>
        ))}
      </PageContainer>
    </Stack>
  );
};

export default Page;
