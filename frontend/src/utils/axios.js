import axios from 'axios';
// config
// import { HOST_API_KEY } from '../config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: "http://localhost:8000/api" });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
