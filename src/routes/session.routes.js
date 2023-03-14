const express = require("express");
const usersSchema = require("../models/users.schema");
const { isValidPassword, createHash } = require("../utils/password");

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

module.exports = sessionRouter;
