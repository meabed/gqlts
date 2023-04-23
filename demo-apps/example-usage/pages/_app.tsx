import { createClient } from '../generated';
import { DarkMode, Stack } from '@chakra-ui/react';
import { LandingProvider } from 'landing-blocks';
import React from 'react';

export const client = createClient({ withCredentials: false });

export default function App(props: any) {
  const { Component, pageProps } = props;
  return (
    <DarkMode>
      <LandingProvider minH='100%' h='100%' background={'black'} black='#333'>
        <div
          style={{
            height: '100%',
            minHeight: '100vh',
          }}
        >
          <Component {...pageProps} />
        </div>
      </LandingProvider>
    </DarkMode>
  );
}
