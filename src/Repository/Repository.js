import axios from 'axios';

// const baseDomain = 'https://api.yenvoo.com/';
const baseDomain = 'http://localhost:5000';

const baseURL = `${baseDomain}/api`;
let axiosObj
  axiosObj = axios.create({
    baseURL,
  
  });
export default axiosObj;