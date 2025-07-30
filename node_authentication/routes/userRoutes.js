const express = require("express");
const router = express.Router();
const {
  loginController,
  signupController,
  profileController,
  editProfile,
} = require("../controllers/userController.js");
const { checkAuth } = require("../middlewares/authMiddlewares.js");

router.post("/signup", signupController);

router.post("/login", loginController);
// protected api or authenticated apis
router.put("/editProfile", checkAuth, editProfile);
router.get("/profile", checkAuth, profileController);

module.exports = router;
