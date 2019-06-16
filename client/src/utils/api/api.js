import axios from "axios";

export default {
    getZip: function() {
        return axios.get("/api/weather/zip");
    },
    saveZip: function(zipData) {
        return axios.post("/api/weather/zip", zipData);
    }
};