// components/SearchBar.js
import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder=" 🔎 Search by name, type, or month... "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
    </div>
  );
};

export default SearchBar;
