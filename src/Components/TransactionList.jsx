import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((txn) => (
          <li key={txn.id} className={txn.amount < 0 ? "minus" : "plus"}>
            {txn.text}
            <span>₹{txn.amount}</span>
            <button onClick={() => deleteTransaction(txn.id)} className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
