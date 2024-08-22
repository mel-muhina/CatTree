import React from "react";
import {CatCard} from "../";

export default function CatList({breedOnly, setBreedOnly, catSearch}) {
  console.log(catSearch);
  return (
    <div>
      <h2>Cat List</h2>
      {catSearch.map((cat) => (
        <img src={cat.url} />
      ))}
    </div>
  );
}