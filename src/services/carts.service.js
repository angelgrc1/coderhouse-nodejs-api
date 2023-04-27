const CartDao = require("../dao/carts.dao");
const cartsSchema = require("../models/carts.schema");

const dao = new CartDao("Cart", cartsSchema);

const createCartService = async () => {
  try {
    const cart = await dao.createCart();
    return cart;
  } catch (error) {
    throw Error("Error al crear un carrito: ", error);
  }
};

const getCartByIdService = async (id) => {
  try {
    const cart = await dao.getCartById(id);
    return cart;
  } catch (error) {
    throw Error("Error al obtener un carrito: ", error);
  }
};

const addProductToCartService = async (cid, pid, quantity) => {
  try {
    const cart = await dao.addProductToCart(cid, pid, quantity);
    return cart;
  } catch (error) {
    throw Error("Error al agregar un producto al carrito: ", error);
  }
};

const updateProductQuantityInCartService = async (cid, pid, quantity) => {
  try {
    const cart = await dao.updateProductQuantityInCart(
      cid,
      pid,
      quantity
    );
    return cart;
  } catch (error) {
    throw Error(
      "Error al actualizar la cantidad de un producto en el carrito: ",
      error
    );
  }
};

const deleteProductFromCartService = async (cid, pid) => {
  try {
    const cart = await dao.deleteProductFromCart(cid, pid);
    return cart;
  } catch (error) {
    throw Error("Error al eliminar un producto del carrito: ", error);
  }
};

const deleteCartByIdService = async (id) => {
  try {
    const cart = await dao.deleteCartById(id);
    return cart;
  } catch (error) {
    throw Error("Error al eliminar un carrito: ", error);
  }
};

module.exports = {
  createCartService,
  getCartByIdService,
  addProductToCartService,
  updateProductQuantityInCartService,
  deleteProductFromCartService,
  deleteCartByIdService,
};
