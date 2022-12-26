import { Box, Spinner, Stack } from "@chakra-ui/react";
import { Hero, PageContainer, SectionTitle } from "landing-blocks";
import React, { useEffect, useState } from "react";
// import { expectType } from "tsd";
import { createClient } from "../../sub";

const client = createClient({
  url: "https://realtime-poll.hasura.app/v1/graphql",
  subscription: {
    url: "ws://realtime-poll.hasura.app/v1/graphql",
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
        online_users: [
          {},
          {
            count: true,
          },
        ],
      })
      .subscribe({
        next: ({ data }) => {
          console.log("data", data);
          const newData = addedUser;
          newData.push(data?.online_users[0].count);
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
          insert_user: [
            {
              objects: [
                {
                  created_at: new Date(),
                  last_seen_at: new Date(),
                  id: Math.floor(Math.random() * 10000).toFixed(0),
                },
              ],
            },
            {
              affected_rows: true,
              returning: {
                id: true,
                created_at: true,
                last_seen_at: true,
              },
            },
          ],
        })
        .then((res) => {
          setData(res?.data?.insert_user?.returning);
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
        bullet="Gqlts lets you write graphql queries as code"
        heading="Example use of Gqlts"
        subheading="Cast Vote via https://realtime-poll.demo.hasura.io/"
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
