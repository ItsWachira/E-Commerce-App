const mkdirp = require("mkdirp");
const fs = require("fs-extra");
const resize_img = require("resize-img");

const Product = require("../models/Products");

const Admin_Dashboard_Page = (req, res) => {
  res.status(200).json({
    success: true,
    message: `Dashboard details`,
  });
};
const Admin_Add_Products = async (req, res) => {
  try {
    const { name, desc, category, price } = req.body;
    const ProductDetails = await new Product({
      name,
      desc,
      category,
      price,
    })
      .save()
      .then((result) => {
        res.status(200).json({
          success: true,
          message: `The product details successfully saved`,
        });
      })
      .catch((error) => {
        res.status(401).json({
          success: false,
          message: `The product entry attempt failed`,
          error,
        });
      });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "The product enrty attempt failed",
      error,
    });
  }
};

module.exports = { Admin_Dashboard_Page, Admin_Add_Products };
