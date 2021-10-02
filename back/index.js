import { ApolloServer } from "apollo-server-express"
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"
import express from "express"
import http from "http"
import cors from "cors"
import typeDefs from "./schema/typeDefs"
import mongoose from "mongoose"
import Link from "./db/models/Link"
import User from "./db/models/User"
import { randomUUID } from "crypto"
require("dotenv").config()

const MONGODB_URI = process.env.MONGODB_URI

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB")
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error)
  })

async function startApolloServer(typeDefs, resolvers) {
  const app = express()

  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })
  await server.start()
  app.use(cors())
  server.applyMiddleware({ app, cors: true })
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve))
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
}

const testLinks = [
  {
    id: "123123131",
    url: "google.com",
    title: "google",
    timeCreated: "09/123",
  },
]

const resolvers = {
  Query: {
    linkCount: () => Link.collection.countDocuments(),
    allLinks: async (root, args) => {
      //filters missing
      return await Link.find({})
      // return testLinks
    },
  },
  Mutation: {
    addLink: (root, args) => {
      const link = new Link({ ...args })
      return link.save()
    },
  },
}

startApolloServer(typeDefs, resolvers)
