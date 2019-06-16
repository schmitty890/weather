const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

const passport = require('passport');
const flash = require('express-flash');
const lusca = require('lusca');
const expressValidator = require('express-validator');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Connect to MongoDB.
 */
var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mernweather';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'anything',
  cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
  store: new MongoStore({
    url: MONGODB_URI,
    autoReconnect: true,
  })
}));

// passport
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.disable('x-powered-by');
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use((req, res, next) => {
  // After successful login, redirect back to the intended page
  if (!req.user &&
    req.path !== '/login' &&
    req.path !== '/signup' &&
    !req.path.match(/^\/auth/) &&
    !req.path.match(/\./)) {
    req.session.returnTo = req.originalUrl;
  } else if (req.user &&
    (req.path === '/account' || req.path.match(/^\/api/))) {
    req.session.returnTo = req.originalUrl;
  }
  next();
});

// serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// add routes
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mernweather");

// start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});