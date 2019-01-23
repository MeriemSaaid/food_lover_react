var mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    firstname: { type: String, default: "" },
    lastname: { type: String, default: "" },
    email: { type: String, default: "" },
    birthday: { type: String, default: "" },
    dateCreated: { type: String, default: Date() },
    admin: { type: Boolean, default: false },
    chef: { type: Boolean, default: false },
    picture: String,
    gender: { type: String, default: "" },
    experience: { type: String, default: "" },
    bio: { type: String, default: "" },
    specialty: { type: String, default: "" }
  },
  { collection: "user" }
);

module.exports = UserSchema;
