import { Box, Link, Stack } from "@chakra-ui/core";
import NextLink from "next/link";
import { Hero, PageContainer } from "landing-blocks";
import React from "react";

const paths: Record<any, any> = {
  "react-query": "/react-query",
  swr: "/swr",
  apollo: "/apollo",
  "apollo-wrapper": "/apollo-wrapper",
  "client/query": "/builtin-client/query",
  "client/subscription": "/builtin-client/subscription",
  "client/mutation": "/builtin-client/mutation",
};

const Page = () => {
  return (
    <Stack spacing="40px" mt="40px">
      <Hero subheading="Example of usage with genqlx" />
      <PageContainer spacing="40px">
        {Object.keys(paths).map((k) => (
          <Box color="green.400" borderRadius="10px" p="20px" borderWidth="1px" minW="100%">
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
