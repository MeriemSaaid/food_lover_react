var mongoose = require("mongoose");

var UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    firstname: { type: String, default: "" },
    lastname: { type: String, default: "" },
    email: { type: String, default: "" },
    dateCreated: { type: String, default: Date() },
    admin: { type: Boolean, default: false }
  },
  { collection: "user" }
);

module.exports = UserSchema;
