import axios from "axios";

const API_URL = "http://localhost:3000/todos";

export const getTodos = (token: string) =>
  axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });

export const createTodo = (token: string, title: string) =>
  axios.post(
    `${API_URL}/create`,
    { title },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

export const updateTodo = (token: string, id: number, completed: boolean) =>
  axios.patch(
    `${API_URL}/${id}`,
    { completed },
    { headers: { Authorization: `Bearer ${token}` } }
  );

export const deleteTodo = (token: string, id: number) =>
  axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
