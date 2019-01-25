module.exports = function(app) {
  const RecipeModel = require("../models/recipe/recipe.model.server");
  // create a recipe
  app.post("/api/recipe", createRecipe);
  // list all recipe
  app.get("/api/recipe/list", findAllRecipes);
  // find  recipe by id
  app.get("/api/recipe/:id", findRecipeById);
  // find  recipe by id
  app.get("/api/recipe/list/:val", searchRecipes);
  // find  top recipe
  app.get("/api/top", findTopRecipe);

  // update a  page
  app.put("/api/recipe", updateRecipe);

  // update a  page
  app.delete("/api/recipe/delete/:id", deleteRecipe);

  //Function to create recipe
  async function createRecipe(req, res) {
    var recipe = req.body;
    const data = await RecipeModel.createRecipe(recipe);
    res.json(data);
  }
  //Function to list all recipes
  async function findAllRecipes(req, res) {
    //const wid = req.params["wid"];
    const result = await RecipeModel.findAllRecipes();
    res.json(result);
  }

  //Function to find website by website id
  async function findRecipeById(req, res) {
    const id = req.params["id"];
    const recipe = await RecipeModel.findRecipeById(id);
    res.json(recipe);
  }

  //Function to find website by website id
  async function searchRecipes(req, res) {
    const val = req.params["val"];

    const recipes = await RecipeModel.searchRecipes(val);
    res.json(recipes);
  }

  //Function to find website by website id
  async function findTopRecipe(req, res) {
    const recipes = await RecipeModel.findTopRecipe();
    res.json(recipes);
  }

  //Update recipe
  async function updateRecipe(req, res) {
    const recipe = req.body;
    const recId = recipe._id;
    const data = await RecipeModel.updateRecipe(recId, recipe);
    res.json(data);
  }

  //Function to list all recipes
  async function deleteRecipe(req, res) {
    const id = req.params["id"];
    const data = await RecipeModel.deleteRecipe(id);
    res.json(data);
  }
};
