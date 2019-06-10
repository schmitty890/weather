const axios = require("axios");

module.exports = {
  currentWeather: function(req, res) {
    const URL = 'https://api.openweathermap.org/data/2.5/weather?zip=27606&appid=3bce2d04045dd38cbdadc38a931790ac'; 

    axios.get(URL)
      .then(response => {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(err => res.send(err));

  },
  forecast: function(req, res) {
    const URL = 'https://api.openweathermap.org/data/2.5/forecast?zip=27606&appid=3bce2d04045dd38cbdadc38a931790ac';

    axios.get(URL)
      .then(response => {
        console.log(response.data);
        res.send(response.data);
      })
      .catch(err => res.send(err));

  }
};