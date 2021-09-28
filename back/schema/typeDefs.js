import { gql } from "apollo-server"

const typeDefs = gql`
  type Link {
    id: ID!
    description: String
    url: String
    timeCreated: DateTime!
    createdBy: User!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    dateCreated: DateTime!
  }

  type Query {
    linkCount: Int!
    allLinks: [Link]
  }

  scalar DateTime
`

export default typeDefs
