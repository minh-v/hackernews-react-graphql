import { gql } from "@apollo/client"

export const CREATE_LINK = gql`
  mutation createLink($url: String!, $title: String!, $timeCreated: String!) {
    addLink(url: $url, title: $title, timeCreated: $timeCreated) {
      id
      url
      title
      timeCreated
    }
  }
`

export const ALL_LINKS = gql`
  query {
    allLinks {
      id
      title
      url
    }
  }
`
