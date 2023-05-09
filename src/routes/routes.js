const express = require("express");
const isAuth = require("../middlewares/isAuth.midleware");
const apiRouter = require("./api/routes");

const routes = express.Router();

routes.use("", (req, res) => {
  res.render("main");
});

routes.use("/register", (req, res) => {
  res.render("register");
});

routes.use("/login", (req, res) => {
  if (req.user) {
    res.redirect("/dashboard");
  }
  res.render("login");
});

routes.use("/dashboard", isAuth, (req, res) => {
  res.render("dashboard");
});

routes.use("/api", apiRouter);

module.exports = routes;
