const {
  createProductService,
  getProductByIdService,
  updateProductService,
  deleteProductByIdService,
} = require("../services/products.service");

const createProduct = async (product) => {
  try {
    const newProduct = await createProductService(product);
    return newProduct;
  } catch (error) {
    throw Error("Error al crear un producto: ", error);
  }
};

const getAllProducts = async (req, res) => {
  try {
    const { page, limit, category, sort } = req.query;
    const products = await getAllProductsService(page, limit, category, sort);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await updateProductService(id, req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await deleteProductByIdService(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProductById,
};
