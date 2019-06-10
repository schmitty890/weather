const router = require("express").Router();
const productsController = require("../../controllers/weatherController");

router.route("/current")
  .get(productsController.currentWeather);

  router.route("/forecast")
  .get(productsController.forecast);

module.exports = router;