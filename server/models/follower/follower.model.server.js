var mongoose = require("mongoose");
var FollowerSchema = require("./follower.schema.server");
var FollowerModel = mongoose.model("FollowerModel", FollowerSchema);

FollowerModel.createFollow  = createFollow;
FollowerModel.findFollowers   = findFollowers;

//Create a follow
function createFollow(follow) {
  return FollowerModel.create(follow);
}
//Find followers by user
function findFollowers(followedId) {
  return FollowerModel.find({ followedId: followedId });
}

module.exports = FollowerModel;
