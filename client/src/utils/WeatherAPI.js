import axios from 'axios';

const BASEURL = `https://api.openweathermap.org/data/2.5/weather?lat=`
const shortStr = `&lon=`
export default {
    search: function(lat, lon, api) {
      return axios.get(BASEURL + lat + shortStr + lon + api);
    }
};
