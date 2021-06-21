import axios from 'axios';


const baseDomain = 'http://localhost:5000';

const baseURL = `${baseDomain}/api`;
const token = localStorage.getItem('token')

let axiosObj
  axiosObj = axios.create({
    baseURL,
    headers:{
      'x-auth-token':token
    }
    
    
  
  });
export default axiosObj;