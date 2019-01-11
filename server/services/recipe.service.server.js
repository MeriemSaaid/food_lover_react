module.exports = function(app) {
  const RecipeModel = require("../models/recipe/recipe.model.server");
  // create a recipe
  app.post("/api/recipe", createRecipe);
  // list all recipe
  app.get("/api/recipe/list", findAllRecipes);
  // find  recipe by id
  app.get("/api/recipe/:id", findRecipeById);
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

  // //Update Website
  // async function updatePage(req, res) {
  //   const page = req.body;
  //   const pid = page._id;
  //   const data = await PageModel.updatePage(pid, page);
  //   res.json(data);
  // }
  // //Delete a page
  // async function deletePage(req, res) {
  //   const pid = req.params["pid"];
  //   const data = await PageModel.deletePage(pid);
  //   res.json(data);
  // }
};
