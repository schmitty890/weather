const router = require("express").Router();
const weatherRoutes = require("./weather");

// product routes
router.use("/api/weather", weatherRoutes);

module.exports = router;