import axios from 'axios';

export const http = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

http.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_READ_ACCESS_TOKEN;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
