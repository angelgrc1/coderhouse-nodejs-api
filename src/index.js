const config = require("./config/config");
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const { engine } = require("express-handlebars");
require("dotenv").config();
const githubAuth = require("./config/passport.config");
const passport = require("passport");
const isAuth = require("./middlewares/isAuth.midleware");

const app = express();
const PORT = config.port;

// view engine setup

app.engine(
  "hbs",
  engine({
    layoutsDir: `${__dirname}/views/layouts`,
    extname: ".hbs",
    defaultLayout: "index",
  })
);
app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

// middleware
app.use(
  session({
    secret: config.sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: false, maxAge: 24 * 60 * 60 * 1000 },
  })
);
app.use(passport.session());
app.use(passport.initialize());
githubAuth();
app.use(express.static("public"));
app.use(express.json());
app.use("/api", require("./routes/routes"));

// routes

app.get("/", (req, res) => {
  res.render("main");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  if (req.user) {
    res.redirect("/dashboard");
  }
  res.render("login");
});

app.get("/dashboard", isAuth, (req, res) => {
  res.render("dashboard");
});

// connect to MongoDB

mongoose
  .connect(config.mongodbUri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// start server

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
