import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import CreateTodo from "../components/CreateTodo";
import TodoItem from "../components/TodoItem";
import { useTodoStore } from "../store/todo";

export default function Todos() {
  const { todos, fetchTodos } = useTodoStore((state) => state);
  const [redirect, setRedirect] = useState(false); // State for managing the redirect
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    if (token) fetchTodos(token);
  }, [token, fetchTodos]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setRedirect(true); // Set redirect to true after logout
  };

  if (redirect) {
    return <Navigate to="/login" />; // Redirect to login page
  }

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Your Todos</h2>

      {/* Create Todo Form */}
      <CreateTodo />

      {/* Todo List */}
      <div className="space-y-2">
        {todos?.length > 0 ? (
          todos.map((todo) => (
            <TodoItem key={todo.id} {...todo} token={token} />
          ))
        ) : (
          <p className="text-gray-500">No todos yet</p>
        )}
      </div>
    </div>
  );
}
