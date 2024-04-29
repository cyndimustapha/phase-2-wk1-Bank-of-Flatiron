import React, {useState} from "react";
import { FaSearch } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event) {
    onSearch(event.target.value);
  }

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Enter search term..."
      />
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </div>
  );
}

export default SearchBar;
