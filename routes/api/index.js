const router = require("express").Router();
const productsRoutes = require("./weather");

// product routes
router.use("/api/weather", productsRoutes);

module.exports = router;