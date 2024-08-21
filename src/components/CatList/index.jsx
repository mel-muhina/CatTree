import React from "react";
import { useCat } from "../../contexts";

export default function CatList({ratingOrder, breedOnly, setRatingOrder, setBreedOnly}) {
  const {catData} = useCat();

  const filteredData = catData
    .filter((cat) => !breedOnly || cat.breed)

  return (
    <div>
      <button onClick={() => setBreedOnly(!breedOnly)}>Breeds Only</button>
      <ul>
        {filteredData.map((cat) => (
          <li key={cat.id}>
            {cat.name} - {cat.breed_group} ({cat.origin})
          </li>
        ))}
      </ul>
    </div>
  );
}
