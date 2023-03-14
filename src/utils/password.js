const bcrypt = require("bcrypt");

const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

const isValidPassword = (passwordOne, passwordTwo) => {
  return bcrypt.compareSync(passwordOne, passwordTwo);
};

module.exports = { createHash, isValidPassword };