var mongoose = require("mongoose");
var RecipeSchema = require("./recipe.schema.server");
var RecipeModel = mongoose.model("RecipeModel", RecipeSchema);

RecipeModel.createRecipe = createRecipe;
RecipeModel.findRecipeById = findRecipeById;
RecipeModel.findRecipeByUser = findRecipeByUser;
RecipeModel.findAllRecipes = findAllRecipes;
RecipeModel.updateRecipe = updateRecipe;

//Create a recipe
function createRecipe(user) {
  return RecipeModel.create(user);
}
//Find recipe by Id
function findRecipeById(recId) {
  return RecipeModel.findById(recId);
}
//Find user by user ID
function findRecipeByUser(userId) {
  return RecipeModel.find({ username: username });
}
//Find all Recipe
function findAllRecipes() {
  return RecipeModel.find();
}
//Update Recipe
function updateRecipe(recId, receipe) {
  return UserModel.updateOne({ _id: recId }, receipe);
}
module.exports = RecipeModel;
