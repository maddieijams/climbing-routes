import "./config/db.js";
import { PORT } from "./config/constants.js";
import express from "express";
import resolvers from "./graphql/resolvers.js";
import mongoose from "mongoose";
import { ApolloServer, gql } from "apollo-server-express";

const app = express();

const typeDefs = gql`
  type Redpoint {
    name: String
    date: String
    img: String
    completed: Boolean
  }

  type Flash {
    name: String
    year: Int
    img: String
    completed: Boolean
  }

  type Status {
    message: String!
  }

  type Route {
    _id: ID!
    name: String!
    grade: String!
    location: String
    img: String
    redpointF: Redpoint
    redpointM: Redpoint
    flash: Flash
  }

  type Glossary {
    _id: ID!
    term: String
    description: String
  }

  type Query {
    getRoutes: [Route]
    getRoute: Route
    getGlossary: [Glossary]
  }

  type Mutation {
    updateRoute(_id: ID!): Route
    updateGlossaryTerm(_id: ID!): Glossary
    deleteGlossaryTerm(_id: ID!): Status
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/graphql",
    settings: {
      "editor.theme": "light",
    },
  },
});

SERVER.start().then(() => {
  SERVER.applyMiddleware({
    app,
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App is listening on port: ${PORT}`);
  }
});
// Middleware: GraphQL
