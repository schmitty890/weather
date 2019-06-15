const router = require("express").Router();
const weatherController = require("../../controllers/weatherController");

router.route("/current/:zipcode")
  .get(weatherController.currentWeather);

  router.route("/forecast")
  .get(weatherController.forecast);

module.exports = router;