import React, { useState } from "react";
import "./Autocomplete.css";

function Autocomplete() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const pastSearches = ["Aron", "Steve", "Ruby", "Sam", "Michelle"];
  const filteredResults = pastSearches.filter((search) =>
    search.toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 5);
  
  function clearInput() {
    setSearchTerm("");
  }
  
  function handleSubmit() {
    setSearchResults(
      pastSearches.filter((search) =>
        search.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }
  
  return (
    <div className="autocomplete-container">
      <h1 className="autocomplete-heading">Autocomplete Component</h1>
      <div className="autocomplete-input-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="autocomplete-input"
        />
        <button
          onClick={handleSubmit}
          className="autocomplete-button autocomplete-button-search"
        >
          Search
        </button>
        <button
          onClick={clearInput}
          className="autocomplete-button autocomplete-button-clear"
        >
          Clear
        </button>
      </div>
      {filteredResults.length > 0 && (
        <ul className="autocomplete-results">
          {filteredResults.map((result) => (
            <li
              key={result}
              dangerouslySetInnerHTML={{
                __html: result.replace(
                  new RegExp(searchTerm, "gi"),
                  (match) => `<mark>${match}</mark>`
                ),
              }}
              className="autocomplete-result"
              onClick={() => setSearchTerm(result)}
            ></li>
          ))}
        </ul>
      )}
      {searchResults.length > 0 && (
        <ul className="autocomplete-results">
          {searchResults.map((result) => (
            <li
              key={result}
              dangerouslySetInnerHTML={{
                __html: result.replace(
                  new RegExp(searchTerm, "gi"),
                  (match) => `<mark>${match}</mark>`
                ),
              }}
              className="autocomplete-result"
              onClick={() => setSearchTerm(result)}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
