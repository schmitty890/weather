const axios = require("axios");
const db = require("../models");

module.exports = {
  currentWeather: function(req, res) {
    // console.log('request');
    // console.log(req.params.zipcode);
    const zipCode = req.params.zipcode === 'undefined' ? '27606' : req.params.zipcode; // if no zip is entered, default to raleigh 27606 zip code
    const URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=3bce2d04045dd38cbdadc38a931790ac`; 

    axios.get(URL)
      .then(response => {
        // console.log(response.data);
        res.send(response.data);
      })
      .catch(err => res.send(err));
  },
  forecast: function(req, res) {

    const zipCode = req.params.zipcode === 'undefined' ? '27606' : req.params.zipcode; // if no zip is entered, default to raleigh 27606 zip code
    const URL = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&appid=3bce2d04045dd38cbdadc38a931790ac`;
    
    axios.get(URL)
      .then(response => {
        // console.log(response.data);
        res.send(response.data);
      })
      .catch(err => res.send(err));
  },
  create: function(req, res) {
    db.Zipcode
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  getZip: function(req, res) {
    db.Zipcode
      .find(req.query)
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};