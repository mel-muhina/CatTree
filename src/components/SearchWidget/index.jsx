import React, {useState, useEffect} from "react";
import SearchForm from "../SearchForm";
import CatList from "../CatList";
import {useCat} from "../../contexts";

export default function SearchWidget() {
  const [searchString, setSearchString] = useState("Siamese");
  const {setCatData, catData} = useCat();

  useEffect(() => {
    async function searchAPI() {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchString}`);
        const rawData = await response.json();
        setCatData(rawData);
      } catch (error) {
        console.error("Fetching cat data failed:", error);
      }
    }

    searchAPI();
  }, [searchString, setCatData]);

  function handleSearch(userInput) {
    setSearchString(userInput);
  }

  return (
    <div>
      <SearchForm handleSearch={handleSearch} lastSearch={searchString} />
      <CatList catData={catData} />
    </div>
  );
}