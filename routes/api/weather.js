const router = require("express").Router();
const weatherController = require("../../controllers/weatherController");

router.route("/current/:zipcode")
  .get(weatherController.currentWeather);

  router.route("/forecast/:zipcode")
  .get(weatherController.forecast);

router.route("/zip")
  .get(weatherController.getZip)
  .post(weatherController.create);

module.exports = router;