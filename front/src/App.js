import React from "react"
import { gql, useQuery } from "@apollo/client"
import Link from "./components/Link"
import LinkForm from "./components/LinkForm"
import { ALL_LINKS } from "./queries"

const App = () => {
  const { data, loading, error } = useQuery(ALL_LINKS)

  if (loading) {
    return <div>loading...</div>
  }

  if (error) {
    console.log(error)
    return <div>error</div>
  }

  return (
    <div class="container mx-auto">
      <LinkForm />
      {data.allLinks.map((link) => (
        <Link link={link} />
      ))}
    </div>
  )
}

export default App
