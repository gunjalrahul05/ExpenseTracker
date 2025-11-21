import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboards from "./pages/Dashboard";
import { Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";
import AppRoute from "./AppRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppRoute></AppRoute>
    </>
  );
}

export default App;
