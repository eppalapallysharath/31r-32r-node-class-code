const express = require("express");
const router = express.Router();
const {
  loginController,
  signupController,
  profileController,
} = require("../controllers/userController.js");

router.post("/signup", signupController);

router.post("/login", loginController);

router.get("/profile", profileController);

module.exports = router;
