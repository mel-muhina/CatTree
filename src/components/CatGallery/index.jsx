import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CatGallery.css";
import CatImg from "../CatImg";
import CatCard from "../CatCard";
import { CatPage } from "../../pages";
import { useCat } from "../../contexts";
import { useParams } from "react-router-dom";


export default function CatGallery() {
  const { id } = useParams();
  const { catData, setCatData } = useCat();
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    getCats();
  }, []);

  async function getCats() {
    const hiddenApi =
      `https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=${apiKey}`;
    const api = "https://api.thecatapi.com/v1/images/search?limit=10";
    const response = await fetch(hiddenApi);
    const data = await response.json();
    setCatData(data);
  }

  return (
    <>
      <div className="cat-gallery">
        {catData.map((cat) => (
          <div key={cat.breeds[0].id} className="each-cat-img">
            <Link to={`/cats/${cat.breeds[0].id}`}>
              <CatImg cat={cat} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
