module.exports = function(app) {
  const UserModel = require("../models/user/user.model.server");
  const passport = require("passport");
  const LocalStrategy = require("passport-local").Strategy;

  const bcrypt = require("bcrypt-nodejs");

  passport.serializeUser(serializeUser);

  passport.deserializeUser(deserializeUser);

  passport.use(new LocalStrategy(localStrategy));
  // create a user
  app.post("/api/user", createUser);
  // get user by Id
  app.get("/api/user/:uid", findUserById);
  // get user
  app.get("/api/user", findUser);
  //update a user
  app.put("/api/user", updateUser);
  //
  app.post("/api/login", passport.authenticate("local"), login);
  //
  app.post("/api/loggedIn", loggedIn);
  //
  app.post("/api/logout", logout);

  // Register User
  app.post("/api/register", register);

  // Find all Users
  app.get("/api/users", findAllUsers);

  async function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    const data = await UserModel.createUser(user);
    req.login(data, function(err) {
      res.json(data);
    });
  }

  //Function to create user
  async function createUser(req, res) {
    var user = req.body;
    const data = await UserModel.createUser(user);
    res.json(data);
  }
  //Search for user by Id
  async function findUserById(req, res) {
    const userId = req.params["uid"];
    let user = await UserModel.findUserById(userId);
    res.json(user);
  }
  //Find user by username and password
  async function findUser(req, res) {
    const username = req.query["username"];
    const password = req.query["password"];
    //console.log(password);
    if (username && password) {
      const user = await UserModel.findUserByCredentials(username, password);
      res.json(user);
      return;
    }

    if (username) {
      const user = await UserModel.findUserByUsername(username);
      res.json(user);
      return;
    }
  }
  //Find All users
  async function findAllUsers(req, res) {
    const data = await UserModel.findAllUsers();
    res.json(data);
  }
  //Update User
  async function updateUser(req, res) {
    const user = req.body;
    const uid = user._id;
    let data = await UserModel.updateUser(uid, user);
    res.json(data);
  }
  //
  function serializeUser(user, done) {
    done(null, user);
  }
  //
  function deserializeUser(user, done) {
    UserModel.findUserById(user._id).then(
      function(user) {
        done(null, user);
      },
      function(err) {
        done(err, null);
      }
    );
  }

  //
  async function localStrategy(username, password, done) {
    const data = await UserModel.findUserByUsername(username);
    if (data && bcrypt.compareSync(password, data.password)) {
      return done(null, data);
    } else {
      return done(null, false);
    }
  }
  //
  function login(req, res) {
    var user = req.user;
    res.json(user);
  }
  //
  function loggedIn(req, res) {
    //console.log(req.isAuthenticated());
    res.send(req.isAuthenticated() ? req.user : "0");
  }
  //
  function logout(req, res) {
    req.logOut();
    res.send(200);
  }
  //
};
