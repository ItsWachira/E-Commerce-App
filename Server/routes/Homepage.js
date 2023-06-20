const express = require("express");
const router = express.Router();
const Homepage_Controllers = require("../controllers/Homepage_Controller");
const { isAuth, isVerified } = require("../middleware/Auth");

const uploads = require("../multer");

router.post(
  "/upload-profile-pic",
  isAuth,
  isVerified,
  uploads.single("profile_pic"),
  Homepage_Controllers.Homepage_Upload_Profile_Pic
);
router.get(
  "/add-to-cart/:id",
  isAuth,
  isVerified,
  Homepage_Controllers.HomePage_Add_To_Cart
);
router.get(
  "/shopping-cart",
  isAuth,
  isVerified,
  Homepage_Controllers.HomePage_Shopping_Cart_Details
);
router.post(
  "/checkout",
  isAuth,
  isVerified,
  Homepage_Controllers.Homepage_Checkout
);
module.exports = router;
