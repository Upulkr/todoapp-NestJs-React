import { Link, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";

const Home = () => {
  const { token } = useAuthStore(); // Check if user is logged in

  if (token) {
    return <Navigate to="/todos" />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">Welcome to Todo App</h1>
      <p className="text-lg mt-4">Organize your tasks efficiently.</p>
      <div className="mt-6">
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
          Login
        </Link>
        <Link
          to="/signup"
          className="ml-4 px-4 py-2 bg-green-500 text-white rounded"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
