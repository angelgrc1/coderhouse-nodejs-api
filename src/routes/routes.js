const express = require("express");

const routes = express.Router();

routes.use("/products", require("./products.routes"));
routes.use("/carts", require("./carts.routes"));
routes.use("/session", require("./session.routes"));

module.exports = routes;
