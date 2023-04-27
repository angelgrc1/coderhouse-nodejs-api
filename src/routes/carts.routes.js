const express = require("express");
const { default: mongoose } = require("mongoose");
const cartDao = require("../dao/carts.dao");
const cartsRouter = express.Router();

// create a new cart
cartsRouter.post("/", cartDao.createCart);

// get cart by id
cartsRouter.get("/:id", cartDao.getCartById);

// add a product to cart
cartsRouter.post("/:cid/products/:pid", cartDao.addProductToCart);

// update quantity of a product in cart
cartsRouter.put("/:cid/products/:pid", cartDao.updateProductQuantityInCart);

// delete a product from cart
cartsRouter.delete("/:cid/products/:pid", cartDao.deleteProductFromCart);

// delete a cart
cartsRouter.delete("/:id", cartDao.deleteCart);

module.exports = cartsRouter;
