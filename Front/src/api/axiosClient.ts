import axios from 'axios';
import type { AxiosInstance } from 'axios';

const axiosClient : AxiosInstance = axios.create({
  baseURL: 'https://localhost:7180/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
    "Content-type": "application/json",
  },
});

export default axiosClient;
