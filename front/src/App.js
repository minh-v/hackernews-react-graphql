import React from "react"
import { gql, useQuery } from "@apollo/client"
import Link from "./components/Link"

const ALL_LINKS = gql`
  query {
    allLinks {
      id
      description
      url
    }
  }
`

const App = () => {
  const { data, loading, error } = useQuery(ALL_LINKS)

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    return <div>error</div>
  }

  return (
    <div className="App">
      {data.allLinks.map((link) => (
        <Link link={link} />
      ))}
    </div>
  )
}

export default App
