const {
  createCartService,
  getCartByIdService,
  addProductToCartService,
  updateProductQuantityInCartService,
} = require("../services/carts.service");

const createCart = async (req, res) => {
  try {
    const cart = await createCartService();
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await getCartByIdService(id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    const cart = await addProductToCartService(cid, pid, quantity);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProductQuantityInCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const { quantity } = req.body;
    const cart = await updateProductQuantityInCartService(cid, pid, quantity);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProductFromCart = async (req, res) => {
  try {
    const { cid, pid } = req.params;
    const cart = await deleteProductFromCartService(cid, pid);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteCartById = async (req, res) => {
  try {
    const { id } = req.params;
    const cart = await deleteCartByIdService(id);
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createCart,
  getCartById,
  addProductToCart,
  updateProductQuantityInCart,
  deleteProductFromCart,
  deleteCartById,
};
