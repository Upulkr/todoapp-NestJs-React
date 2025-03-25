import { create } from "zustand";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../api/todo";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId?: number;
}

interface TodoStore {
  todos: Todo[];
  fetchTodos: (token: string) => Promise<void>;
  addTodo: (token: string, title: string) => Promise<void>;
  toggleTodo: (token: string, id: number, completed: boolean) => Promise<void>;
  removeTodo: (token: string, id: number) => Promise<void>;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  fetchTodos: async (token) => {
    const { data } = await getTodos(token);

    set({ todos: data });
  },

  addTodo: async (inputedTitle, token) => {
    const { data } = await createTodo(token, inputedTitle);

    const { title, id, completed, userId } = data;
    set((state) => ({
      todos: [...state.todos, { title, id, completed, userId }],
    }));
  },
  toggleTodo: async (token, id, completed) => {
    await updateTodo(token, id, completed);
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      ),
    }));
  },
  removeTodo: async (token, id) => {
    await deleteTodo(token, id);
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) }));
  },
}));
