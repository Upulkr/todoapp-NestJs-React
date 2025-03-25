import { useState } from "react";
import { login } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useAuthStore((state) => state.setToken);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await login(username, password);
      console.log("Login data", data);
      setToken(data.token);
      navigate("/todos");
    } catch (error: any) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md">
        <h2 className="mb-4 text-xl font-bold">Login</h2>
        <input
          className="border p-2 mb-2 w-full"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          className="border p-2 mb-2 w-full"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="flex"></div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
        <h3
          className=" cursor-pointer mt-4"
          onClick={() => navigate("/signup")} // Navigate to signup page
        >
          Don't have an account?{" "}
          <span className="underline text-sky-400">Signup</span>
        </h3>
      </form>
    </div>
  );
}
