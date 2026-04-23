import { useMutation } from '../../client';
import { everything } from '../../generated';
import { Box, Button, Input, Stack } from '@chakra-ui/react';
import { Hero, PageContainer } from '../../components/landing';
import React, { useState } from 'react';

const Page = () => {
  const [name, setName] = useState('');
  const [id] = useState(Math.floor(Math.random() * 10000).toFixed(0));
  const [execute, { loading, error, result: data }] = useMutation(async (name: string) => {
    if (name.split(' ').length > 1) {
      throw new Error('cannot contain spaces');
    }
    return {
      insert_user: [
        {
          objects: [
            {
              username: name,
            },
          ],
        },
        { returning: { ...everything }, ...everything },
      ],
    };
  });
  return (
    <Stack gap='40px' mt='40px'>
      <Hero bullet='Mutation' heading='Mutation Example' subheading='' />
      <PageContainer gap='10' maxWidth='500px'>
        <Input placeholder='Name' value={name} onChange={(e: any) => setName(e.target.value)} />
        <Button
          loading={loading}
          onClick={() => {
            execute(name).catch(console.error);
          }}
        >
          Insert User
        </Button>
        <Box as='pre'>{data && JSON.stringify(data, null, 4)}</Box>
        {error && (
          <Box color='red.500' as='pre'>
            {error && error.message}
          </Box>
        )}
      </PageContainer>
    </Stack>
  );
};

export default Page;
