import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_LINK, ALL_LINKS } from "../queries"

const LinkForm = () => {
  const [url, setUrl] = useState("")
  const [title, setTitle] = useState("")

  const [createLink] = useMutation(CREATE_LINK)

  const handleSubmit = (event) => {
    event.preventDefault()
    const timeCreated = new Date().toString()
    createLink({ variables: { url, title, timeCreated } }, { refetchQueries: [{ query: ALL_LINKS }] })

    setUrl("")
    setTitle("")
  }

  return (
    <div>
      <h2>Submit</h2>
      <form onSubmit={handleSubmit}>
        <div>
          title <input value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div>
          url <input value={url} onChange={(event) => setUrl(event.target.value)} />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default LinkForm
