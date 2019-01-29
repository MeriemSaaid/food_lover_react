var mongoose = require("mongoose");
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}
var today = mm + "/" + dd + "/" + yyyy;
var RecipesSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    name: String,
    description: String,
    picture: String,
    ingredients: String,
    category: String,
    top: { type: Boolean, default: false },
    datePosted: { type: String, default: today }
  },
  { collection: "recipes" }
);

module.exports = RecipesSchema;
