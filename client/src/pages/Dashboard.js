import Login from "./Login";
import Profile from "./Profile";
import Register from "./Register";
import Transactions from "./Transactions";

export default function Dashboards() {
  return (
    <>
      <h1>Dashboards</h1>
      <Login />
      <Profile />
      <Register />
      <Transactions />
    </>
  );
}
