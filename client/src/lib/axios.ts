import axios from 'axios';

//&Deployment
const axiosInstance = axios.create({
  baseURL: 'https://codecraft-fs-01.vercel.app/api', 
});

//& Production
// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:3000/api', 
// });

export default axiosInstance;
