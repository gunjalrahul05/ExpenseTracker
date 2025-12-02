import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticate } = useAuth();
  console.log(`check auth = ${isAuthenticate}`);
  return isAuthenticate ? children : <Navigate to="/login" replace></Navigate>;
}
