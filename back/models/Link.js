import mongoose from "mongoose"

const linkSchema = new mongoose.Schema({
  id: String,
  description: String,
  url: String,
  timeCreated: Date,
  createdBy: String,
})

const Link = mongoose.model("Link", linkSchema)

export default Link
