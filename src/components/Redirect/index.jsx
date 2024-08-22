import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function SearchForm({lastSearch}) {
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
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInput} placeholder={lastSearch || "Search for a breed"} value={inputValue} required />
      <input type="submit" value="Search" />
    </form>
  );
}
