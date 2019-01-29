var mongoose = require("mongoose");
var CommentSchema = require("./comment.schema.server");
var CommentModel = mongoose.model("CommentModel", CommentSchema);

CommentModel.createComment = createComment;
CommentModel.findCommentByRecipe = findCommentByRecipe;
CommentModel.updateComment = updateComment;
CommentModel.deleteComment = deleteComment;

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

//Delete a follow
function deleteComment(id) {
  return CommentModel.deleteOne({
    _id: id
  });
}
module.exports = CommentModel;
