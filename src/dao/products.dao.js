const mongoose = require("mongoose");
const ProductDto = require("./dto/product.dto");

class ProductDao {
  constructor(collection, schema) {
    this.productCollection = mongoose.model(collection, schema);
  }

  async createProduct(product) {
    const { title, description, price, stock, category, image } = product;
    const newProduct = new ProductDto(
      title,
      description,
      price,
      stock,
      category,
      image
    );
    const result = await this.productCollection.create(newProduct);
    return result;
  }

  async getAllProducts(page, limit, category, sort) {
    const query = category ? { category: category } : {};
    const result = await this.productCollection.paginate(query, {
      page: page || 1,
      limit: limit || 10,
      sort: { price: sort || 1 },
    });
    return result;
  }

  async getProductById(id) {
    const result = await this.productCollection.findById(id);
    return result;
  }

  async updateProduct(id, product) {
    const { title, description, price, stock, category, image } = product;
    const result = await this.productCollection.updateOne(
      { _id: id },
      { $set: { title, description, price, stock, category, image } }
    );
    return result;
  }

  async deleteProductById(id) {
    const result = await this.productCollection.deleteOne({ _id: id });
    return result;
  }
}

module.exports = ProductDao;
