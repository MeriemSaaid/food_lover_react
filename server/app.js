module.exports = function(app) {
  require("./services/user.service.server")(app);
  require("./services/recipe.service.server")(app);
  require("./services/comment.service.server")(app);
  require("./services/follower.service.server")(app);
  require("./services/contact.service.server")(app);
  // require("./services/sendemail.service.server")(app);
  require("./models/models.server");
};
