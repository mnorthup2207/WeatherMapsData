import axios from 'axios';

const BASEURL = 'https://qrng.anu.edu.au/API/jsonI.php?length='
const type = '&type=uint16';

export default {
    search: function(num) {
      return axios.get(BASEURL + num + type);
    }
};
