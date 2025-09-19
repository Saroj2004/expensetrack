import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const total = transactions.reduce((acc, txn) => acc + txn.amount, 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>₹{total.toFixed(2)}</h1>
    </div>
  );
}
