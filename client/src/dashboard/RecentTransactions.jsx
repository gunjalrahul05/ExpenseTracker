import { useState } from "react";
import {api } from "../../api/axios";

export default function RecentTransactions() {
  const { data, setData } = useState();

  setData( api.get("/"))

  return (
    <>
      <h1>Recent Transactions</h1>
      <ol></ol>
    </>
  );
}
