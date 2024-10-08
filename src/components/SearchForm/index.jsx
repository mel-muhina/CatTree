import React, { useState } from "react";
import "./SearchForm.css";

export default function SearchForm({ handleSearch, lastSearch }) {
  const [inputValue, setInputValue] = useState("");

  function handleInput(e) {
    const newInput = e.target.value;
    setInputValue(newInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(inputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleInput}
        placeholder={lastSearch || "Search for a breed"}
        value={inputValue}
        required
        className="redirect-search"
      />
      <input type="submit" value="Search" className="redirect-btn" />
    </form>
  );
}
