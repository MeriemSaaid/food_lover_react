module.exports = function(app) {
  const FollowerModel = require("../models/follower/follower.model.server");
  // add a follow
  app.post("/api/follow", createFollow);
  // list all followers
  app.get("/api/followers/:id", findFollowers);
  

  //Function add a follow
  async function createFollow(req, res) {
    var follow = req.body;
    const data = await FollowerModel.createFollow(follow);
    res.json(data);
  }
  //Function to list all recipes
  async function findFollowers(req, res) {
    const followedId = req.params["id"];
    const result = await FollowerModel.findFollowers(followedId);
    res.json(result);
  }

  
};
