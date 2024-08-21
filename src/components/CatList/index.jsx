import React from "react";
import {CatCard} from "../";
import {useCat} from "../../contexts";

export default function CatList({breedOnly, setBreedOnly}) {
  const {catData} = useCat();

  return (
    <div>
      <h1>Cat List</h1>
      {catData.length > 0 ? (
        catData
          .filter((cat) => cat.description && cat.url) 
          .map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))
      ) : (
        <p>No cats found.</p>
      )}
    </div>
  );
}