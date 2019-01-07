var mongoose = require("mongoose");

var RecipesSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "RecipeModel" },
    name: String,
    description: String,
    picture: String
  },
  { collection: "recipes" }
);

module.exports = RecipesSchema;
