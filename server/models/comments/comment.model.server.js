var mongoose = require("mongoose");
var CommentSchema = require("./comment.schema.server");
var CommentModel = mongoose.model("CommentModel", CommentSchema);

CommentModel.createComment = createComment;
CommentModel.findCommentByRecipe = findCommentByRecipe;
CommentModel.updateComment = updateComment;

//Create a comment
function createComment(comment) {
  return CommentModel.create(comment);
}
//Find comment by recipe
function findCommentByRecipe(recipeId) {
  return CommentModel.find({ recipeId: recipeId })
    .populate("userId", "firstname lastname picture as user_pic")
    .exec();
}
function updateComment(id, comment) {
  return CommentModel.updateOne({ _id: id }, comment);
}

module.exports = CommentModel;
