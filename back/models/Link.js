import mongoose from "mongoose"

const linkSchema = new mongoose.Schema({
  description: String,
  url: String,
})

const Link = mongoose.model("Link", linkSchema)

export default Link
