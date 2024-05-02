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
    setSearchTerm(term); // Update the searchTerm state
  }
  
  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }

  // Filter transactions based on the search term
  const filteredTransactions = transactions.filter(transaction => {
    const lowerCasedSearchTerm = searchTerm.toLowerCase();
    const { title, description, category, amount } = transaction;
    return (
      title.toLowerCase().includes(lowerCasedSearchTerm) ||
      description.toLowerCase().includes(lowerCasedSearchTerm) ||
      category.toLowerCase().includes(lowerCasedSearchTerm) ||
      amount.toString().toLowerCase().includes(lowerCasedSearchTerm)
    );
  });

  return (
    <div>
      <Header bankName={bankName} />
      <SearchBar onSearch={handleSearch} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
