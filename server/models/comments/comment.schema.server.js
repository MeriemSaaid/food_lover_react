var mongoose = require("mongoose");

var CommentsSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    recipeId: { type: mongoose.Schema.Types.ObjectId, ref: "RecipeModel" },
    content: String,
    datePosted: { type: String, default: Date() }
  },
  { collection: "comments" }
);

module.exports = CommentsSchema;
