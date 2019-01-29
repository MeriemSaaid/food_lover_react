module.exports = function(app) {
  const CommentModel = require("../models/comments/comment.model.server");
  // create a comment
  app.post("/api/comment", createComment);
  // find  comment by recipe id
  app.get("/api/comment/:recipeId", findCommentByRecipe);
  // Update Comment
  app.put("/api/comment", updateComment);
  // Delete Comment
  app.delete("/api/c_trash/:id", deleteComment);

  //Function to create a comment
  async function createComment(req, res) {
    var comment = req.body;
    const data = await CommentModel.createComment(comment);
    res.json(data);
  }
  //Function comments by recipes
  async function findCommentByRecipe(req, res) {
    const recipeId = req.params["recipeId"];
    const result = await CommentModel.findCommentByRecipe(recipeId);
    res.json(result);
  }
  //Update a comment
  async function updateComment(req, res) {
    const comment = req.body;
    const id = comment._id;
    const data = await CommentModel.updateComment(id, comment);
    res.json(data);
  }

  //Function to delete comment
  async function deleteComment(req, res) {
    const id = req.params["id"];
    const data = await CommentModel.deleteComment(id);
    res.json(data);
  }
};
