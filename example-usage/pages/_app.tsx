import { DarkMode, Stack } from "@chakra-ui/react";
import { LandingProvider } from "landing-blocks";
import React from "react";

import { createClient } from "../generated";

export const client = createClient({ withCredentials: false });

export default function App(props: any) {
  const { Component, pageProps } = props;
  return (
    <DarkMode>
      <LandingProvider minH="100%" h="100%" background={"black"} black="#333">
        <Stack h="100%" minH="100vh">
          <Component {...pageProps} />
        </Stack>
      </LandingProvider>
    </DarkMode>
  );
}
