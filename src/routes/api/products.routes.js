const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProductById,
} = require("../../controllers/products.controller");
const productsRouter = express.Router();

// create a new product
productsRouter.post("/", createProduct);

// get all products or get products by category
productsRouter.get("/", getAllProducts);

// get a product
productsRouter.get("/:id", getProductById);

// update a product
productsRouter.put("/:id", updateProduct);

// delete a product
productsRouter.delete("/:id", deleteProductById);

module.exports = productsRouter;
