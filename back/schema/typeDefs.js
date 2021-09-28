import { gql } from "apollo-server"

const typeDefs = gql`
  type Link {
    description: String
    url: String
  }

  type Query {
    linkCount: Int!
    links: [Link]
  }
`

export default typeDefs
