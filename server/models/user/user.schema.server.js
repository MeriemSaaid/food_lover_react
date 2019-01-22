var mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    firstname: { type: String, default: "" },
    lastname: { type: String, default: "" },
    email: { type: String, default: "" },
    birthday: { type: String, default: "" },
    gender: { type: String, default: ""},
    experience: { type: String, default: "" },
    dateCreated:{ type: String, default: "" },
    admin: { type: Boolean, default: false },
    chef: { type: Boolean, default: false},
    bio: { type: String, default: ""},
    specialty: { type: String, default: ""}

  },
  { collection: "user" }
);

module.exports = UserSchema;
