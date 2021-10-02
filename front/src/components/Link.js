import React from "react"

const Link = ({ link }) => {
  return (
    <div>
      <p>
        {link.title} {link.url} {link.timeCreated}
      </p>
    </div>
  )
}

export default Link
