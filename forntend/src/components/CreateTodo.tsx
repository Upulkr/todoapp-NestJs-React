import { useState } from "react";
import { useTodoStore } from "../store/todo";
import { useAuthStore } from "../store/auth";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const token = localStorage.getItem("token");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    if (token) {
      await addTodo(title, token);
    } else {
      console.error("Token is null");
    }
    setTitle(""); // Clear input after adding
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="New Todo..."
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </form>
  );
}
