import axios from 'axios';

// const API_Key = process.env.API_KEY;
// const lat = -52.435;
// const lon = 32.744;
const BASEURL = `api.openweathermap.org/data/2.5/weather?lat=`
const shortStr = `&lon=`
const api = "&appid=$" + process.env.API_KEY

export default {
    search: function(lat, lon) {
      return axios.get(BASEURL + lat + shortStr + lon + api);
    }
};
