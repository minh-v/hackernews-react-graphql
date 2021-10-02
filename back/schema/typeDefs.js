import { gql } from "apollo-server"

const typeDefs = gql`
  type Link {
    id: ID!
    title: String
    url: String
    timeCreated: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    dateCreated: DateTime!
  }

  type Token {
    value: String!
  }

  type Query {
    linkCount: Int!
    allLinks: [Link]
  }

  type Mutation {
    addLink(title: String!, url: String!, timeCreated: String!): Link
    createUser(username: String!, password: String!, name: String!): User
    login(username: String!, password: String!): Token
  }

  scalar DateTime
`

export default typeDefs
