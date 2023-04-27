const mongoose = require("mongoose");

class CartDao {
  constructor(collection, shema) {
    this.cartCollection = mongoose.model(collection, shema);
  }

  async createCart() {
    const cart = await this.cartCollection.create({});
    return cart;
  }

  async getCartById(id) {
    const cart = await this.cartCollection
      .findById(id)
      .populate("products.product")
      .lean();
    return cart;
  }

  async addProductToCart(cid, pid, quantity) {
    const cart = await this.cartCollection.findOne({ _id: cid });
    const productId = new mongoose.Types.ObjectId(pid);
    const cartUpdated = await cart.updateOne({
      $push: { products: { product: productId, quantity } },
    });
    return cartUpdated;
  }

  async updateProductQuantityInCart(cid, pid, quantity) {
    const cart = await this.cartCollection.updateOne(
      { _id: cid, "products.product": pid },
      { $set: { "products.$.quantity": quantity } }
    );
    return cart;
  }

  async deleteProductFromCart(cid, pid) {
    const cart = await this.cartCollection.findOne({ _id: cid });
    const cartUpdated = await cart.updateOne({
      $pull: { products: { product: pid } },
    });
    return cartUpdated;
  }

  async deleteCartById(id) {
    const cart = await this.cartCollection.deleteOne({ _id: id });
    return cart;
  }
}

module.exports = CartDao;
