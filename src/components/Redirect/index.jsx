import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Redirect.css";

export default function SearchForm({ lastSearch }) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  function handleInput(e) {
    const newInput = e.target.value;
    setInputValue(newInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(inputValue)}`);
    setInputValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="redirect">
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
