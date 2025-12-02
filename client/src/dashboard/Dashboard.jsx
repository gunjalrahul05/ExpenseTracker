import AddTransaction from "./AddTransaction";
import Expense from "./Expense";
import Income from "./Income";
import RecentTransactions from "./recentTransactions";

export default function Dashboard() {
  return (
    <>
      <Income title={"Total Income"} number={"23"} />
      <Income title={"Total Expense"} number={"23"} />
      <AddTransaction />
      <RecentTransactions />
    </>
  );
}
