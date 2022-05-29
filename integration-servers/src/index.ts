import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { useServer } from "graphql-ws/lib/use/ws";
import { WebSocketServer } from "ws";
import cors from "cors";
import { PubSub, withFilter } from "graphql-subscriptions";

const pubsub = new PubSub();

const users = [
  { id: 1, name: "Fong", age: 23, friendIds: [2, 3] },
  { id: 2, name: "Kevin", age: 40, friendIds: [1] },
  { id: 3, name: "Mary", age: 18, friendIds: [1] },
];

const imagesData = [
  {
    id: 1,
    title: "Stacked Brwonies",
    owner: "Ella Olson",
    category: "Desserts",
    url: "https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg",
  },
  {
    id: 2,
    title: "Shallow focus photography of Cafe Latte",
    owner: "Kevin Menajang",
    category: "Coffee",
    url: "https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg",
  },
  {
    id: 3,
    title: "Sliced Cake on White Saucer",
    owner: "Quang Nguyen Vinh",
    category: "Desserts",
    url: "https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg",
  },
  {
    id: 4,
    title: "Beverage breakfast brewed coffee caffeine",
    owner: "Burst",
    category: "Coffee",
    url: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
  },
  {
    id: 5,
    title: "Pancake with Sliced Strawberry",
    owner: "Ash",
    category: "Desserts",
    url: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
  },
];

// GraphQL Schema
const schema = buildSchema(`
  type Image {
    id: Int
    title: String
    category: String
    owner: String
    url: String
  }
  type User {
    id: ID
    name: String
    age: Int
    friends(a: Int): [User]
  }
  type Query {
    hello: String
    image(id: Int!): Image
    images(category: String): [Image]
    user: User
    users: [User]
  }
  type Mutation {
    addUser(id: ID, name: String!, age: Int): User
  }
  type Subscription {
    userAdded: User
  }
`);

// Get single Image using id
function getImage(args) {
  for (const image of imagesData) {
    if (image.id === args.id) {
      return image;
    }
  }
  return null;
}

//Get images using category
function getImages(args) {
  if (args.category) {
    return imagesData.filter((image) => image.category.toLowerCase() === args.category.toLowerCase());
  } else {
    return imagesData;
  }
}

const USER_ADDED = "USER_ADDED";
// Resolver
const root = {
  query: {
    hello: () => "world",
    user: () => users[0],
    users: () => users,
    image: getImage,
    images: getImages,
  },
  mutation: {
    addUser: (args, req, context) => {
      const { id, name, age } = args;
      users.push({
        id,
        name,
        age,
        friendIds: [],
      });
      // console.log(users.length);
      pubsub.publish(USER_ADDED, {
        userAdded: {
          id,
          name,
          age,
        },
      });
      console.log({
        event: USER_ADDED,
        userAdded: {
          id,
          name,
          age,
        },
      });
      return {
        id,
        name,
        age,
      };
    },
  },
  subscription: {
    // userAdded: () => {
    //   return pubsub.asyncIterator(USER_ADDED);
    // },
    userAdded: withFilter(
      () => pubsub.asyncIterator(USER_ADDED),
      (payload, vars) => {
        return true;
      }
    ),
  },
  // userAdded:{
  //   subscribe: withFilter(
  //     () => pubsub.asyncIterator(USER_ADDED),
  //     (payload, vars) => {
  //       return true;
  //     }
  //   ),
  // },
};

//Create an express server and GraphQL endpoint
const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
    maxAge: 10000000,
  })
);

const rootValue = Object.entries(root).reduce((acc, [key, value]) => {
  acc = { ...acc, ...value };
  return acc;
}, {});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    context: { pubsub },
    graphiql: true,
  })
);

// Listening to our server
const server = app.listen(process.env.PORT || 4000, () => {
  const wsServer = new WebSocketServer({
    server,
    path: "/graphql",
  });
  useServer(
    {
      schema,
      roots: root,
      onConnect: () => {
        return { pubsub };
      },
    },
    wsServer
  );
  console.log(`GraphQL server with Express running on localhost:${process.env.PORT || 4000}/graphql`);
});
