const express = require("express");
const router = express.Router();
const { loginController } = require("../controllers/authController.js");

router.post("/login", loginController); //login && method post

module.exports = router;
