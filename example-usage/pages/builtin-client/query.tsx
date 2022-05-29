import { Box, Input, Spinner, Stack } from "@chakra-ui/react";
import { Hero, PageContainer, SectionTitle } from "landing-blocks";
import React, { useState } from "react";
import { everything } from "../../generated";
import { useQuery } from "../../client";

const Page = () => {
  const [regex, setRegex] = useState(".*");
  const { data, isValidating, error } = useQuery({
    user: [
      {
        where: {
          name: {
            _similar: regex,
          },
        },
      },
      {
        ...everything,
      },
    ],
  });

  return (
    <Stack spacing="40px" mt="40px">
      <Hero
        bullet="Gqlts lets you write graphql queries as code"
        heading="Example use of Gqlts"
        subheading="Search for countries via https://countries.trevorblades.com"
      />
      <PageContainer>
        <Box>Search a continent</Box>
        <Input variant="filled" value={regex} onChange={(e: any) => setRegex(e.target.value)} placeholder=".*" />
      </PageContainer>
      <PageContainer>
        <SectionTitle heading="Countries" />
        {isValidating && (
          <Stack justify="center" align="center">
            <Spinner />
          </Stack>
        )}
        {data && (
          <Stack spacing="20px">
            {data?.user?.map((x: any) => (
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

export default Page;
