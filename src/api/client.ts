import axios from 'axios';

export const client = axios.create({
  baseURL: '/api/',
  timeout: 1000,
});
