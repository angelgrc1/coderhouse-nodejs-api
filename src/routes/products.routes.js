const express = require("express");
const productSchema = require("../models/products.schema");
const productDAO = require("../dao/products.dao");

const productsRouter = express.Router();

// create a new product
productsRouter.post("/", productDAO.createProduct);

// get all products or get products by category
productsRouter.get("/", productDAO.getAllProducts);

// get a product
productsRouter.get("/:id", productDAO.getProductById);

// update a product
productsRouter.put("/:id", productDAO.updateProduct);

// delete a product
productsRouter.delete("/:id", productDAO.deleteProduct);

module.exports = productsRouter;
