const express = require("express");
const { default: mongoose } = require("mongoose");
const cartSchema = require("../models/carts.schema");

const cartsRouter = express.Router();

// create a new cart
cartsRouter.post("/", (req, res) => {
  const cart = cartSchema(req.body);
  cart
    .save()
    .then((cart) => {
      res.status(201).json(cart);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// get cart by id
cartsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  cartSchema
    .findById(id)
    .populate("products.product")
    .then((cart) => {
      res.status(200).json(cart);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// add a product to cart
cartsRouter.post("/:cid/products/:pid", (req, res) => {
  const { cid, pid } = req.params;
  const { quantity } = req.body;
  const cart = cartSchema.findOne({ _id: cid });
  const productId = new mongoose.Types.ObjectId(pid);
  cart
    .updateOne({ $push: { products: { product: productId, quantity } } })
    .then((cart) => {
      res.status(200).json(cart);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// update quantity of a product in cart
cartsRouter.put("/:cid/products/:pid", (req, res) => {
  const { cid, pid } = req.params;
  const { quantity } = req.body;
  cartSchema
    .updateOne(
      { _id: cid, "products.product": pid },
      { $set: { "products.$.quantity": quantity } }
    )
    .then((cart) => {
      res.status(200).json(cart);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// delete a product from cart
cartsRouter.delete("/:cid/products/:pid", (req, res) => {
  const { cid, pid } = req.params;
  const cart = cartSchema.findOne({ _id: cid });
  const productId = new mongoose.Types.ObjectId(pid);
  cart
    .updateOne({ $pull: { products: { product: productId } } })
    .then((cart) => {
      res.status(200).json(cart);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// delete a cart
cartsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  cartSchema
    .deleteOne({ _id: id })
    .then((cart) => {
      res.status(200).json(cart);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = cartsRouter;
