//var connectionString = "mongodb://127.0.0.1:27017/project"; // for local

// if (process.env.MLAB_USERNAME_WEBDEV) {
// check if running remotely

// var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
// var username = "admin";
// //var password = process.env.MLAB_PASSWORD_WEBDEV;
// var password = "admin123";

// connectionString = "mongodb://admin:admin123";

// connectionString += "@ds115045.mlab.com:15045/food_lover"; // use yours
// // }

if (process.env.MLAB_USERNAME_WEBDEV) {
  // check if running remotely

  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment

  var password = process.env.MLAB_PASSWORD_WEBDEV;

  connectionString = "mongodb://" + username + ":" + password;

  connectionString += "@ds115045.mlab.com:15045/food_lover"; // use yours
}

var mongoose = require("mongoose");

var db = mongoose.connect(
  connectionString,
  { useNewUrlParser: true }
);

module.exports = db;
