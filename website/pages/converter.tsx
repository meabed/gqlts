import { Stack } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import gql from "graphql-tag";
import { print } from "@genqlx/cli/dist/printer";
import { useDebouncedCallback } from "use-debounce";

import { SectionTitle } from "landing-blocks";

function Page({}) {
  const [code, setCode] = useState(DEFAULT_QUERY);
  const onCodeChange = useDebouncedCallback(() => {
    setInvalid("");
    try {
      const query = gql(code) as any;
      console.log("parsed");
      setGenqlxTranslation("\n" + print(query, {}));
    } catch (e) {
      console.error(e);
      setInvalid(e.message);
    }
  }, 400);
  useEffect(() => {
    onCodeChange();
    return;
  }, [code]);
  const [genqlxTranslation, setGenqlxTranslation] = useState("");
  const [invalid, setInvalid] = useState("");
  return (
    <Stack align="stretch">
      <SectionTitle
        dark
        heading="Convert graphql to genqlx"
        subheading="Easily migrate from graphql strings to type safe genqlx queries"
        mb="40px"
      />
      <Stack p="10" align="stretch">
        <Stack
          spacing="20"
          justify="stretch"
          width="100%"
          align={["center", null, null, "flex-start"]}
          direction={["column", null, null, "row"]}
        >
          <Stack minWidth="0" align="stretch" flex="1">
            {invalid && (
              <Stack as="pre" px="20px" zIndex={1000} mb="-40px" color="red.500">
                {invalid}
              </Stack>
            )}
            <textarea>{code}</textarea>
          </Stack>
          <textarea>{genqlxTranslation}</textarea>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Page;

const DEFAULT_QUERY = `
query {
    getUser(where: { name: { eq: "Tommy" }}) {
        name
        id
        address {
            ...addressFragment
        }
    }
}

fragment addressFragment on Character {
    city
    code
    state
}
`;
