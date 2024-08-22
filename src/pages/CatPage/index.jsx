import React, { useEffect, useState } from "react";
import { CatCard, CatGallery } from "../../components";
import { useCat } from "../../contexts";
import { useParams } from "react-router-dom";

export default function CatPage() {
  const { id } = useParams();
  const { catData, setCatData } = useCat();
  const [catIdData, setCatIdData] = useState();
  const [newCat, setNewCat] = useState({ breeds: [] });

  useEffect(() => {
    getCorrectCat();
  }, []);

  function getCorrectCat() {
    const cat = catData.find((cat) => cat.breeds[0].id === id);
    if (cat) {
      setNewCat(cat);
    } else {
      console.log("No cats.");
    }
  }

  return (
    <>
      {/* <h1>{Im a cat page}</h1> */}

      {newCat ? <CatCard cat={newCat} /> : console.log("No cats soz")}
    </>
  );
}
