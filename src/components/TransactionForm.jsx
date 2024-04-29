//TransactionForm.jsx
import React, { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("submitted");
    onAddTransaction({ date, description, category, amount });
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px'}}>
      <input
        type="date"
        placeholder="mm/dd/yyyy"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid lightgray', marginRight: '10px'}}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid lightgray', marginRight: '10px' }}
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid lightgray', marginRight: '10px' }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: '10px', borderRadius: '5px', border: '1px solid lightgray', marginRight: '10px' }}
      />
      <button type="submit"
      style={{ padding: '10px', borderRadius: '5px', backgroundColor: 'lightgrey', color: 'black', border: 'none', cursor: 'pointer' }}
      >Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
