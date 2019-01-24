var mongoose = require("mongoose");

var ContactSchema = mongoose.Schema(
  {
    fullname:String,
    email: String,
    subject: String,
    message: [{body:String, date: Date}],
    date: {type:Date, default:Date.now},
  },
  { collection: "contact" }
);

module.exports = ContactSchema;