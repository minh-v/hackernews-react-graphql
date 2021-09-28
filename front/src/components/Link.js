import React from "react"

const Link = ({ link }) => {
  return (
    <div>
      <p>
        {link.description} {link.url}
      </p>
    </div>
  )
}

export default Link
