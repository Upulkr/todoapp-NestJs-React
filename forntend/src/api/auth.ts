import axios from "axios";

const API_URL = "http://localhost:3000/auth";

export const register = (username: string, password: string) =>
  axios.post(`${API_URL}/register`, { username, password });

export const login = (username: string, password: string) =>
  axios.post(`${API_URL}/login`, { username, password });
