const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// add routes
app.use(routes);

// start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});