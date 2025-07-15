const express = require("express");
const router = express.Router();
const {
  getWeatherData,
  cites,
  addCities,
} = require("../controller/weatherController.js");
const { checkAPI_Key } = require("../middlewares/weatherMiddleware.js");

router.get("/cities", cites);
router.get("/", checkAPI_Key, getWeatherData);
router.post("/addCities", addCities);

module.exports = router;
