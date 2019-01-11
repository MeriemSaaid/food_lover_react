module.exports = function(app) {
  require("./services/user.service.server")(app);
  require("./services/recipe.service.server")(app);
  require("./services/comment.service.server")(app);
  // require("./services/widget.service.server")(app);
  require("./models/models.server");
};
