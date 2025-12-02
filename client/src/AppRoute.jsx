import { Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Transactions from "./pages/Transactions";
import Login from "./pages/Login";
import Dashboard from "./dashboard/dashboard";
import ProtectedRoute from "../route/ProtectedRoute";

export default function AppRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      ></Route>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  );
}
