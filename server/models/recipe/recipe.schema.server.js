var mongoose = require("mongoose");

var RecipesSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    name: String,
    description: String,
    picture: String,
    ingredients: String,
    datePosted: { type: String, default: Date() }
  },
  { collection: "recipes" }
);

module.exports = RecipesSchema;
