import React, {useState} from "react";

function Search({handleSearch}) {
const [searchTerm, setSearchTerm] = useState('')

handleSearch(searchTerm)

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={searchTerm}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => {
          setSearchTerm(e.target.value)
        }}
      />
    </div>
  );
}

export default Search;
