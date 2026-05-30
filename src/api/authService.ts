import axios from 'axios';

// Cambia esta IP por la tuya en la red local
//const API_URL = 'http;

const api = axios.create({
  baseURL: API_URL,
});

export const login = async (username: string, password: string) => {
  const response = await api.post('/session/login', { username, password });
  return response.data;
};

export const register = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await api.post('/users/', data);
  return response.data;
};
