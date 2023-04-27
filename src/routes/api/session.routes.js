const express = require("express");
const passport = require("passport");
const usersSchema = require("../../models/users.schema");
const { isValidPassword } = require("../../utils/password");

const sessionRouter = express.Router();

// create a new user

sessionRouter.post("/register", (req, res) => {
  user = usersSchema(req.body);
  user
    .save()
    .then((user) => {
      res.status(201).json({
        message: `${user.email} was create successfully as ${user.role} role`,
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// authenticate user

sessionRouter.post("/login", (req, res) => {
  const { email, password } = req.body;
  usersSchema
    .findOne({ email })
    .then((user) => {
      if (user) {
        const handlePassword = isValidPassword(password, user.password);
        if (handlePassword) {
          res.status(200).json({
            message: `${email} login successfully as ${user.role} role`,
          });
        } else {
          res.status(401).json({ message: "Invalid credentials" });
        }
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// auth with github

sessionRouter.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

sessionRouter.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect dashboard.
    res.redirect("/dashboard");
  }
);

// logout

sessionRouter.get('/logout', function(req, res) {
  req.logout(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});


module.exports = sessionRouter;
