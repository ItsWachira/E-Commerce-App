const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ProductsSchema = new Schema(
  {
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductsSchema);

module.exports = Product;
