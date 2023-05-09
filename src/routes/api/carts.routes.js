const express = require("express");
const {
  createCart,
  getCartById,
  addProductToCart,
  updateProductQuantityInCart,
  deleteProductFromCart,
  deleteCartById,
} = require("../../controllers/carts.controller");
const { createTicketService } = require("../../services/tickets.service");
const cartsRouter = express.Router();

// create a new cart
cartsRouter.post("/", createCart);

// get cart by id
cartsRouter.get("/:id", getCartById);

// add a product to cart
cartsRouter.post("/:cid/products/:pid", addProductToCart);

// update quantity of a product in cart
cartsRouter.put("/:cid/products/:pid", updateProductQuantityInCart);

// delete a product from cart
cartsRouter.delete("/:cid/products/:pid", deleteProductFromCart);

// delete a cart
cartsRouter.delete("/:id", deleteCartById);

cartsRouter.get("/:id/purchase", createTicketService);

module.exports = cartsRouter;
