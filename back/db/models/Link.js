import mongoose from "mongoose"

const linkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  timeCreated: {
    type: Date,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
})

const Link = mongoose.model("Link", linkSchema)

export default Link
