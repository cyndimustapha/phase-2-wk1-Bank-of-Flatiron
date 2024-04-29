//App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";

function App() {
  const bankName = "The Royal Bank of Flatiron";
  const [searchTerm, setSearchTerm] = useState('');
  const [transactions, setTransactions] = useState([]);

  function handleSearch(term) {
    setSearchTerm(term);
  }
  
  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  return (
    <div>
      <div>
        <Header bankName={bankName} />
      </div>
      <SearchBar onSearch={handleSearch}/>
      <TransactionForm onAddTransaction={handleAddTransaction}/>
      <TransactionTable transactions={transactions}/>
    </div>
  );
}

export default App;
