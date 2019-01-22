module.exports = function(app) {
  const FollowerModel = require("../models/follower/follower.model.server");
  // add a follow
  app.post("/api/follow", createFollow);
  // list all followers
  app.get("/api/followers/:id", findFollowers);

  // list all followers
  app.delete("/api/unfollow/:followerId/:followedId", deleteFollower);

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
  //Function to list all recipes
  async function deleteFollower(req, res) {
    const followerId = req.params["followerId"];
    const followedId = req.params["followedId"];

    const data = await FollowerModel.deleteFollower(followerId, followedId);
    res.json(data);
  }
};
