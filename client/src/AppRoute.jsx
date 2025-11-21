import { Routes, Route } from "react-router-dom";
import Dashboards from "./pages/Dashboard";
import Register from "./pages/Register";
import Transactions from "./pages/Transactions";
import Login from "./pages/Login";

export default function AppRoute() {
  return (
    <Routes>
      <Route path= "/" element={<Dashboards />}></Route>
      {/* <Route path="/" element={<Login />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/transactions" element={<Transactions />} />
    </Routes>
  );
}
