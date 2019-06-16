import axios from "axios";

export default {
  saveZip: function(zipData) {
    console.log('saveZip api...');
    return axios.post("/api/weather/zip", zipData);
  }
};