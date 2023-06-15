const express = require("express");
const router = express.Router();
const AdminControllers = require("../controllers/Admin");
const { isAuth, isVerified, isAdmin } = require("../middleware/Auth");
const {
  validateProductDetails,
  productValidation,
} = require("../middleware/validation/Products");

router.get(
  "/",
  isAuth,
  isVerified,
  isAdmin,
  AdminControllers.Admin_Dashboard_Page
);
router.post(
  "/add-product",
  validateProductDetails,
  productValidation,
  isAuth,
  isVerified,
  isAdmin,
  AdminControllers.Admin_Add_Products
);

module.exports = router;
