const express = require("express");
const productSchema = require("../models/products.schema");

const productsRouter = express.Router();

// create a new product
productsRouter.post("/", (req, res) => {
  const product = productSchema(req.body);
  product
    .save()
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// get all products or get products by category
productsRouter.get("/", (req, res) => {
  const { page, limit, category, sort } = req.query;
  const query = category ? { category: category } : {};
  productSchema
    .paginate(query, {
      page: page || 1,
      limit: limit || 10,
      sort: { price: sort || 1 },
    })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// get a product
productsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// update a product
productsRouter.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { name, price, description } })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// delete a product
productsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .deleteOne({ _id: id })
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = productsRouter;