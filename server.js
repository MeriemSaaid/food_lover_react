//Express Library
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");

//Include cookie and session
const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cookieParser());

if (process.env.SESSION_SECRET) {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true
    })
  );
} else {
  app.use(
    session({
      secret: "test",
      resave: true,
      saveUninitialized: true
    })
  );
}

const passport = require("passport");

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "build")));

// CORS - Cross Origin Resource Sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});
const port = process.env.PORT || "3200";
app.set("port", port);

const server = http.createServer(app);

require("./server/app")(app);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

// server.listen(port);
server.listen(port, function() {
  console.log("Running on " + app.get("port"));
});
