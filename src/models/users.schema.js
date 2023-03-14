const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const { createHash } = require("../utils/password");

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
});

userSchema.plugin(mongoosePaginate);

userSchema.pre("save", function (next) {
  const user = this;
  if (
    user.email === "adminCoder@coder.com" &&
    user.password === "adminCod3r123"
  ) {
    user.rol = "admin";
  }
  user.password = createHash(user.password);
  next();
});

module.exports = mongoose.model("User", userSchema);
