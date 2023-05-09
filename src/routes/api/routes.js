const express = require("express");
const productsRouter = require("./products.routes");
const cartsRouter = require("./carts.routes");
const sessionRouter = require("./session.routes");

const apiRouter = express.Router();

apiRouter.use("/products", productsRouter);
apiRouter.use("/carts", cartsRouter);
apiRouter.use("/session", sessionRouter);

module.exports = apiRouter;
