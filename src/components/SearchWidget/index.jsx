import React, { useState, useEffect } from "react";
import SearchForm from "../SearchForm";
import CatList from "../CatList";
import { useCat } from "../../contexts";
import "./SearchWidget.css";

export default function SearchWidget() {
  const [searchString, setSearchString] = useState("siamese");
  const [searchId, setSearchId] = useState("siam");
  // const {catData, setCatData} = useCat();
  const [catSearch, setCatSearch] = useState([]);

  useEffect(() => {
    async function search() {
      const breeds = "https://api.thecatapi.com/v1/breeds";
      const response = await fetch(breeds);
      const data = await response.json();
      const breedName = searchString.toLowerCase();
      const filterData = data.filter(
        (breed) => breed.name.toLowerCase() === breedName
      );

      if (filterData.length > 0) {
        setSearchId(filterData[0].id);
      } else {
        setSearchId("");
      }
    }

    search();
  }, [searchString]);

  useEffect(() => {
    async function searchAPI() {
      try {
        if (searchId) {
          const response = await fetch(
            `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&breed_ids=${searchId}&api_key=live_gfQNGADb522pBj4pARmpFnCa1CrQQrTG1yA03h0U4MI27yZiTsl4k3mqwXa3BOdU`
          );
          const rawData = await response.json();
          setCatSearch(rawData);
        }
      } catch (error) {
        console.error("Fetching cat data failed:", error);
      }
    }

    searchAPI();
  }, [searchId]);

  function handleSearch(userInput) {
    setSearchString(userInput.toLowerCase());
  }

  return (
    <div>
      <SearchForm handleSearch={handleSearch} lastSearch={searchString} />
      <CatList catSearch={catSearch} />
      {/* {catSearch.map((cat) => (
        <img src={cat.url} />
      ))} */}
    </div>
  );
}
