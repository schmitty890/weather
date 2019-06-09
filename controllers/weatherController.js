const axios = require("axios");

module.exports = {
  getProducts: function(req, res) {
    
    const baseURL = "http://m.lowes.com/CatalogServices/product/nvalue/v1_0?nValue=4294857975&maxResults=8&offset=0&showURL=1&rollUpVariants=1&showUrl=true&storeNumber=0595&priceFlag=rangeBalance&showMarketingBullets=1";

    axios.get(baseURL)
      .then(response => {
        // console.log(response.data.productList);
        res.send(response.data.productList);
      })
      .catch(err => res.send(err));

  }
};