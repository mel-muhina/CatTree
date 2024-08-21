import React from "react";
import {CatCard} from "../";
import {useCat} from "../../contexts";

export default function CatList({breedOnly, setBreedOnly}) {
  const {catData} = useCat();

  function renderCats() {
    return catData
    //   .filter((cat) => (cat.description && cat.image ? true : false))
    //   .map((cat) => <CatCard key={cat.id} cat={cat} />);
  }
  return <div>{renderCats()}</div>;
}
