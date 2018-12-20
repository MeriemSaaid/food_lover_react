var mongoose = require("mongoose");
var UserSchema = require("./user.schema.server");
var UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = createUser;
UserModel.findUserById = findUserById;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.updateUser = updateUser;
UserModel.findUserByUsername = findUserByUsername;
UserModel.findAllUsers = findAllUsers;

//Create user
function createUser(user) {
  return UserModel.create(user);
}
//Find user by Id
function findUserById(uid) {
  return UserModel.findById(uid);
}
//Find user by username
function findUserByUsername(username) {
  return UserModel.findOne({ username: username });
}
//Find all users
function findAllUsers() {
  return UserModel.find();
}

//Find user by credentials
function findUserByCredentials(username, password) {
  return UserModel.findOne({ username: username, password: password });
}
//Update user
function updateUser(uid, user) {
  return UserModel.updateOne({ _id: uid }, user);
}
module.exports = UserModel;
