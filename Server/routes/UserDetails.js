const express = require("express");
const router = express.Router();
const cors = require("cors");
const UserDetailsController = require("../controllers/UserDetails");
const {
  validateUserRegistration,
  validateUserSignIn,
  userValidation,
} = require("../middleware/validation/UserDetails");
const uploads = require("../multer");

router.get("/login", cors(), UserDetailsController.User_Login_Page);
router.get("/register", cors(), UserDetailsController.User_Register_Page);
router.post(
  "/register",
  validateUserRegistration,
  userValidation,
  UserDetailsController.User_Register_User
);
router.post(
  "/login",
  validateUserSignIn,
  userValidation,
  UserDetailsController.User_Login_User
);
router.get("/invalid-login", (req, res) => {
  res.json({ redirect: "/auth/login" });
});

module.exports = router;
