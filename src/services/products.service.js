const ProductDao = require("../dao/products.dao");
const productsSchema = require("../models/products.schema");

const dao = new ProductDao("Product", productsSchema);

const createProductService = async (product) => {
  try {
    const newProduct = await dao.createProduct(product);
    return newProduct;
  } catch (error) {
    throw Error("Error al crear un producto: ", error);
  }
};

const getAllProductsService = async (page, limit, category, sort) => {
  try {
    const products = await dao.getAllProducts(page, limit, category, sort);
    return products;
  } catch (error) {
    throw Error("Error al obtener los productos: ", error);
  }
};

const getProductByIdService = async (id) => {
  try {
    const product = await dao.getProductById(id);
    return product;
  } catch (error) {
    throw Error("Error al obtener un producto: ", error);
  }
};

const updateProductService = async (id, product) => {
  try {
    const updatedProduct = await dao.updateProduct(id, product);
    return updatedProduct;
  } catch (error) {
    throw Error("Error al actualizar un producto: ", error);
  }
};

const deleteProductByIdService = async (id) => {
  try {
    const deletedProduct = await dao.deleteProductById(id);
    return deletedProduct;
  } catch (error) {
    throw Error("Error al eliminar un producto: ", error);
  }
};

module.exports = {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductService,
  deleteProductByIdService,
};
