import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import Transactions from "./Transactions";
import { Link } from "react-router-dom";
export default function Dashboards() {
  return (
    <>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/profile"> Profile</Link>
      <Link to="/transactions">Transactions</Link>
    </>
  );
}
