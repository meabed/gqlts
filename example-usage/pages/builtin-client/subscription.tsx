import { Box, Spinner, Stack } from "@chakra-ui/react";
import { Hero, PageContainer, SectionTitle } from "landing-blocks";
import React, { useEffect, useState } from "react";
// import { expectType } from "tsd";
import { createClient } from "../../sub";

const client = createClient({
  url: "https://graphql-server-moon.herokuapp.com/graphql",
  subscription: {
    url: "ws://graphql-server-moon.herokuapp.com/graphql",
    shouldRetry: () => false,
  },
});

console.log("client", client);

const Page = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [addedUser, setAddedUser] = useState<any>([]);
  useEffect(() => {
    client
      .subscription({
        userAdded: {
          name: true,
          age: true,
          id: true,
        },
      })
      .subscribe({
        next: ({ data }) => {
          console.log("data", data);
          const newData = addedUser;
          newData.push(data?.userAdded);
          setAddedUser(newData);
        },
        error: (error) => {
          console.log("error", error);
        },
        complete() {
          console.log("complete");
        },
      });
    setInterval(() => {
      client
        .mutation({
          addUser: [
            { name: "Test " + new Date().toLocaleString(), age: 10, id: "id" + Math.random().toString() },
            { age: true, id: true },
          ],
        })
        .then((res) => {
          setData(res?.data?.addUser);
          setError(res?.errors);
        })
        .catch((err) => {
          setError(err);
        });
    }, 3000);
  }, []);

  // const {
  //   result: data,
  //   loading,
  //   error,
  // } = useSubscription(
  //   {
  //     user: {
  //       name: true,
  //     },
  //   }
  //   // (a: any[], b) => [...a, b],
  // );
  // expectType<Partial<user>[] | undefined>(data?.user);
  return (
    <Stack spacing="40px" mt="40px">
      <Hero
        bullet="Genqlx lets you write graphql queries as code"
        heading="Example use of Genqlx"
        subheading="Add Users via https://graphql-server-moon.herokuapp.com/graphql"
      />
      <PageContainer>
        <SectionTitle heading="Users" />
        {!data && (
          <Stack justify="center" align="center">
            <Spinner />
          </Stack>
        )}
        {addedUser.length > 0 && (
          <Stack spacing="20px">
            {addedUser?.map((x: any) => {
              return (
                <Box borderRadius="10px" p="20px" borderWidth="1px">
                  {x.id} - {x.name} - {x.age}
                </Box>
              );
            })}
          </Stack>
        )}
        {error && <Box color="red">{error.message}</Box>}
      </PageContainer>
    </Stack>
  );
};

export default Page;
