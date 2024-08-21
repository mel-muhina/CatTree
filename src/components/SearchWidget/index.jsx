import React, {useState, useEffect} from "react";
import SearchForm from "../SearchForm";
import CatList from "../CatList";
import {useCat} from "../../contexts";

export default function SearchWidget() {
  const [searchString, setSearchString] = useState("siamese");
  const [searchId, setSearchId] = useState("beng")
  const {setCatData, catData} = useCat();
  
  async function search() {
    const breeds = "https://api.thecatapi.com/v1/breeds";
    const response = await fetch(breeds);
    const data = await response.json();
    let breedName = searchString;
    const filterData = data.filter((breed) => breed.name.toLowerCase() === breedName);
    console.log(filterData[0].id);
    setSearchId(filterData[0].id)
  }

  useEffect(() => {
    async function searchAPI() {
      try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=${searchId}`);
        const rawData = await response.json();
        setCatData(rawData);
      } catch (error) {
        console.error("Fetching cat data failed:", error);
      }
    }

    searchAPI();
    search()
  }, [searchString, setCatData]);

  function handleSearch(userInput) {
    setSearchString(userInput.toLowerCase());
  }

  return (
    <div>
      <SearchForm handleSearch={handleSearch} lastSearch={searchString} />
      <CatList catData={catData} />
    </div>
  );
}