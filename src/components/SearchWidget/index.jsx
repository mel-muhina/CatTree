import React, {useState, useEffect} from "react";
import {SearchForm, CatList} from "..";
import {useCat} from "../../contexts";

export default function SearchWidget() {
  const [breedOnly, setBreedOnly] = useState(false);

  const {setCatData} = useCat();
  const [searchString, setSearchString] = useState("Siamese");

  useEffect(() => {
    async function searchAPI() {
      const response = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${searchString}`);
      const rawData = await response.json();
      setCatData(rawData);
    }

    searchAPI();
  }, [searchString, setCatData]);

  function handleSearch(userInput) {
    setSearchString(userInput);
  }

  return (
    <>
      <SearchForm handleSearch={handleSearch} lastSearch={searchString} />
      {<CatList breedOnly={breedOnly} setBreedOnly={setBreedOnly} />}
    </>
  );
}
