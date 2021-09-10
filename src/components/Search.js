import React from "react";

function Search({searchBar, setSearchBar}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
    </div>
  );
}

export default Search;
