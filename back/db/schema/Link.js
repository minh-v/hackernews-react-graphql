import mongoose from "mongoose"

const linkSchema = new mongoose.Schema({
  description: {
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

export default mongoose.model("Link", linkSchema)
