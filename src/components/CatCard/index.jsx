import CatImg from "../CatImg";
import { useState, useEffect } from "react";
import "./CatCard.css";

export default function CatCard({ cat }) {
  const [catName, setCatName] = useState([]);
  const [catAge, setCatAge] = useState([]);
  const [starRatingAdaptability, setStarRatingAdaptability] = useState("");
  const [starRatingAffection, setStarRatingAffection] = useState("");
  const [starRatingDog, setStarRatingDog] = useState("");
  const [starRatingEnergy, setStarRatingEnergy] = useState("");
  const [starRatingIntelligence, setStarRatingIntelligence] = useState("");
  const [starRatingHypoallergenic, setStarRatingHypoallergenic] = useState("");

  useEffect(() => {
    getCatNames();
    starRatingAdapt();
    starRatingAffec();
    starRatingDogFriendly();
    starRatingEner();
    starRatingInt();
    starRatingHypo();
  }, [cat]);

  async function getCatNames() {
    const catNames = [
      "Whiskers",
      "Mittens",
      "Shadow",
      "Luna",
      "Simba",
      "Chloe",
      "Bella",
      "Oliver",
      "Max",
      "Nala",
      "Milo",
      "Tiger",
      "Smokey",
      "Zoe",
      "Gizmo",
      "Oreo",
      "Tigger",
      "Salem",
      "Pepper",
      "Socks",
      "Cleo",
      "Jasper",
      "Felix",
      "Daisy",
      "Leo",
      "Loki",
      "Pumpkin",
      "Misty",
      "Coco",
      "Boots",
      "Oscar",
      "Ginger",
      "Marley",
      "Toby",
      "Muffin",
      "Bandit",
      "Sassy",
      "Fiona",
      "Boo",
      "Patches",
      "Mocha",
      "Midnight",
      "Callie",
      "Freckles",
      "Rascal",
      "Ash",
      "Ruby",
      "Willow",
      "Ziggy",
      "Ninja",
    ];

    const catAges = [
      3, 7, 1, 14, 5, 10, 8, 12, 6, 2, 9, 4, 15, 11, 13, 7, 1, 6, 8, 14, 12, 4,
      10, 3, 9, 2, 11, 5, 15, 7,
    ];

    const getRandomCatName =
      catNames[Math.floor(Math.random() * catNames.length)];
    setCatName(getRandomCatName);

    const getRandomCatAge = catAges[Math.floor(Math.random() * catAges.length)];
    setCatAge(getRandomCatAge);
  }

  function starRatingAdapt() {
    if (cat.breeds[0]?.adaptability === 5) {
      setStarRatingAdaptability("★★★★★");
    } else if (cat.breeds[0]?.adaptability === 4) {
      setStarRatingAdaptability("★★★★✩");
    } else if (cat.breeds[0]?.adaptability === 3) {
      setStarRatingAdaptability("★★★✩✩");
    } else if (cat.breeds[0]?.adaptability === 2) {
      setStarRatingAdaptability("★★✩✩✩");
    } else if (cat.breeds[0]?.adaptability === 1) {
      setStarRatingAdaptability("★✩✩✩✩");
    } else {
      setStarRatingAdaptability("✩✩✩✩✩");
    }
  }

  function starRatingAffec() {
    if (cat.breeds[0]?.affection_level === 5) {
      setStarRatingAffection("★★★★★");
    } else if (cat.breeds[0]?.affection_level === 4) {
      setStarRatingAffection("★★★★✩");
    } else if (cat.breeds[0]?.affection_level === 3) {
      setStarRatingAffection("★★★✩✩");
    } else if (cat.breeds[0]?.affection_level === 2) {
      setStarRatingAffection("★★✩✩✩");
    } else if (cat.breeds[0]?.affection_level === 1) {
      setStarRatingAffection("★✩✩✩✩");
    } else {
      setStarRatingAffection("✩✩✩✩✩");
    }
  }

  function starRatingDogFriendly() {
    if (cat.breeds[0]?.dog_friendly === 5) {
      setStarRatingDog("★★★★★");
    } else if (cat.breeds[0]?.dog_friendly === 4) {
      setStarRatingDog("★★★★✩");
    } else if (cat.breeds[0]?.dog_friendly === 3) {
      setStarRatingDog("★★★✩✩");
    } else if (cat.breeds[0]?.dog_friendly === 2) {
      setStarRatingDog("★★✩✩✩");
    } else if (cat.breeds[0]?.dog_friendly === 1) {
      setStarRatingDog("★✩✩✩✩");
    } else {
      setStarRatingDog("✩✩✩✩✩");
    }
  }

  function starRatingEner() {
    if (cat.breeds[0]?.energy_level === 5) {
      setStarRatingEnergy("★★★★★");
    } else if (cat.breeds[0]?.energy_level === 4) {
      setStarRatingEnergy("★★★★✩");
    } else if (cat.breeds[0]?.energy_level === 3) {
      setStarRatingEnergy("★★★✩✩");
    } else if (cat.breeds[0]?.energy_level === 2) {
      setStarRatingEnergy("★★✩✩✩");
    } else if (cat.breeds[0]?.energy_level === 1) {
      setStarRatingEnergy("★✩✩✩✩");
    } else {
      setStarRatingEnergy("✩✩✩✩✩");
    }
  }

  function starRatingInt() {
    if (cat.breeds[0]?.intelligence === 5) {
      setStarRatingIntelligence("★★★★★");
    } else if (cat.breeds[0]?.intelligence === 4) {
      setStarRatingIntelligence("★★★★✩");
    } else if (cat.breeds[0]?.intelligence === 3) {
      setStarRatingIntelligence("★★★✩✩");
    } else if (cat.breeds[0]?.intelligence === 2) {
      setStarRatingIntelligence("★★✩✩✩");
    } else if (cat.breeds[0]?.intelligence === 1) {
      setStarRatingIntelligence("★✩✩✩✩");
    } else {
      setStarRatingIntelligence("✩✩✩✩✩");
    }
  }

  function starRatingHypo() {
    if (cat.breeds[0]?.hypoallergenic === 5) {
      setStarRatingHypoallergenic("★★★★★");
    } else if (cat.breeds[0]?.hypoallergenic === 4) {
      setStarRatingHypoallergenic("★★★★✩");
    } else if (cat.breeds[0]?.hypoallergenic === 3) {
      setStarRatingHypoallergenic("★★★✩✩");
    } else if (cat.breeds[0]?.hypoallergenic === 2) {
      setStarRatingHypoallergenic("★★✩✩✩");
    } else if (cat.breeds[0]?.hypoallergenic === 1) {
      setStarRatingHypoallergenic("★✩✩✩✩");
    } else {
      setStarRatingHypoallergenic("✩✩✩✩✩");
    }
  }

  return (
    <>
      <div className="cat-card" key={cat.id}>
        <h2 className="title">
          {catName} - {catAge} years old
        </h2>
        <CatImg className="cat-img" cat={cat} />
        <div className="cat-card-text">
          <h3>Breed: {cat.breeds[0]?.name}</h3>
          <ul>
            <li>
              {" "}
              <p className="subtitle">Adaptability: </p>
              <p className="star">{starRatingAdaptability}</p>
            </li>
            <li>
              {" "}
              <p className="subtitle">Affectionate: </p>
              <p className="star">{starRatingAffection}</p>
            </li>
            <li>
              {" "}
              <p className="subtitle">Dog Friendly: </p>
              <p className="star">{starRatingDog}</p>
            </li>
            <li>
              {" "}
              <p className="subtitle">Energy Level: </p>
              <p className="star">{starRatingEnergy}</p>
            </li>
            <li>
              {" "}
              <p className="subtitle">Hypoallergenic: </p>
              <p className="star">{starRatingHypoallergenic}</p>
            </li>
            <li>
              {" "}
              <p className="subtitle">Intelligence: </p>
              <p className="star">{starRatingIntelligence}</p>
            </li>
          </ul>
          <p className="description">{cat.breeds[0]?.description}</p>
        </div>
      </div>
    </>
  );
}
