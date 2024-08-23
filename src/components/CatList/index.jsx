import React from "react";
import { CatCard } from "../";

export default function CatList({ breedOnly, setBreedOnly, catSearch }) {
  return (
    <div>
      <h2>If you would like to search all of our cats by breed, please enter a breed.</h2>
      {catSearch.map((cat) => (
        // <img src={cat.url} />
        <CatCard cat={cat} />
      ))}
    </div>
  );
}
