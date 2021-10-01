import mongoose, { Schema } from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
  },
  passwordHash: {
    type: String,
    required: true,
    minLength: 3,
  },
})

userSchema.plugin(uniqueValidator)
export default mongoose.model("User", schema)
