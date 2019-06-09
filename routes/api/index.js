const router = require("express").Router();
const productsRoutes = require("./weather");

// product routes
router.use("/api", productsRoutes);

module.exports = router;