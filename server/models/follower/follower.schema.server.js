var mongoose = require("mongoose");

var FollowerSchema = mongoose.Schema(
  {
    followerId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    followedId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    dateCreated: { type: String, default: Date() },
    
  },
  { collection: "follower" }
);

module.exports = FollowerSchema;
