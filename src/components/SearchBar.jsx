import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    const term = event.target.value;
    setSearchTerm(term); // Update the searchTerm state
    onSearch(term); // Trigger the search with the current value of searchTerm
  }

  return (
    <div>
      <input 
        style={{
          marginRight: '20px',
          marginBottom: '10px',
          padding: '10px',
          borderRadius: '5px',
          width: '90%'
        }}
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter search term..."
      />
      <button 
        style={{
          padding: '10px',
          color: 'black',
          cursor: 'pointer',
          borderRadius: '5px'
        }}
      >
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
