import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.162.1.107:3333'
});

export default api;