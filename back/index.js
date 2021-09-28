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
    description: "description1",
    url: "url1",
  },
  {
    description: "description2",
    url: "url2",
  },
  {
    description: "description3",
    url: "url3",
  },
]

const resolvers = {
  Query: {
    linkCount: () => links.length,
    links: () => links,
  },
}

startApolloServer(typeDefs, resolvers)
