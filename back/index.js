import { ApolloServer } from "apollo-server-express"
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core"
import express from "express"
import http from "http"
import cors from "cors"
import typeDefs from "./schema/typeDefs"

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

let links = [
  {
    id: "1",
    description: "google",
    url: "https://www.google.com/",
  },
  {
    id: "2",
    description: "one piece",
    url: "https://www.reddit.com/r/onepiece",
  },
  {
    id: "3",
    description: "description 3",
    url: "url3",
  },
]

const resolvers = {
  Query: {
    linkCount: () => links.length,
    allLinks: () => links,
  },
}

startApolloServer(typeDefs, resolvers)
