import mongoose, { Schema } from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
  },
  email: String,
  passwordHash: {
    type: String,
    required: true,
    minLength: 3,
  },
})

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.__v
    //paswordHash should not be revealed
    delete returnedObject.passwordHash
  },
})

userSchema.plugin(uniqueValidator)

const User = mongoose.model("User", userSchema)
export default User
