var mongoose = require("mongoose");
var RecipeSchema = require("./recipe.schema.server");
var RecipeModel = mongoose.model("RecipeModel", RecipeSchema);

RecipeModel.createRecipe = createRecipe;
RecipeModel.findRecipeById = findRecipeById;
RecipeModel.findRecipeByUser = findRecipeByUser;
RecipeModel.findAllRecipes = findAllRecipes;
RecipeModel.updateRecipe = updateRecipe;
RecipeModel.searchRecipes = searchRecipes;

//Create a recipe
function createRecipe(user) {
  return RecipeModel.create(user);
}
//Find recipe by Id
function findRecipeById(recId) {
  return RecipeModel.findById(recId)
    .populate("userId", "username")
    .exec();
}
//Find recipe by user ID
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

//Search recipe
function searchRecipes(val) {
  // console.log(val + "//" + type);
  var query = {
    $or: [
      { name: { $regex: val, $options: "i" } },
      { description: { $regex: val, $options: "i" } },
      { ingredients: { $regex: val, $options: "i" } }
    ]
    // ,
    // $and: [{ category: { $regex: type, $options: "i" } }]
  };
  return RecipeModel.find(query);
}
module.exports = RecipeModel;
