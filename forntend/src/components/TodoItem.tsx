import { useTodoStore } from "../store/todo";

export default function TodoItem({ title, id, completed, token }: any) {
  const { toggleTodo, removeTodo } = useTodoStore((state: any) => state);

  return (
    <div
      className="flex justify-between p-3 border rounded shadow text-lg "
      key={id}
    >
      <span className={completed ? "line-through" : ""}>{title}</span>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(token, id, !completed)}
      />
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => removeTodo(token, id)}
      >
        Delete
      </button>
    </div>
  );
}
