import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

export default function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income"); // dropdown: income/expense
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!text.trim()) {
      alert("Please enter a description!");
      return;
    }
    if (!amount || Number(amount) === 0) {
      alert("Amount must be greater than 0!");
      return;
    }

    const finalAmount = type === "expense" ? -Math.abs(Number(amount)) : Math.abs(Number(amount));

    const newTransaction = {
      id: Date.now(),
      text,
      amount: finalAmount,
    };

    addTransaction(newTransaction);
    setText("");
    setAmount("");
    setType("income");
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add New Transaction</h3>
      <input
        type="text"
        placeholder="Enter description..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button>Add Transaction</button>
    </form>
  );
}
