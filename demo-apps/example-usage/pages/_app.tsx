import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import React from 'react';

import { createClient } from '../generated';

export const client = createClient({ withCredentials: false });

export default function App(props: any) {
  const { Component, pageProps } = props;
  return (
    <ChakraProvider value={defaultSystem}>
      <div
        style={{
          height: '100%',
          minHeight: '100vh',
        }}
      >
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
