import axios from 'axios';

//&Deployment
const axiosInstance = axios.create({
  baseURL: 'https://codecraft-fs-01.vercel.app', 
});

//& Production
// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3000/api', 
// });

export default axiosInstance;
