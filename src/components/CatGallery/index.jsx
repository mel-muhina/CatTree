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
  // const [catData, setCatData ] = useState([]);

  useEffect(() => {
    getCats();
  }, []);

  async function getCats() {
    const hiddenApi =
      "https://api.thecatapi.com/v1/images/search?limit=20&has_breeds=1&api_key=live_gfQNGADb522pBj4pARmpFnCa1CrQQrTG1yA03h0U4MI27yZiTsl4k3mqwXa3BOdU";
    const apiByBreed =
      "https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=live_gfQNGADb522pBj4pARmpFnCa1CrQQrTG1yA03h0U4MI27yZiTsl4k3mqwXa3BOdU";
    const api = "https://api.thecatapi.com/v1/images/search?limit=10";
    const response = await fetch(hiddenApi);
    const data = await response.json();
    // const filterData = data.filter(
    //   (cat) => cat.breeds[0] && cat.breeds[0].name
    // );
    // const filterData = data.filter(cat => !cat.url.endsWith('.gif'))
    // const filterData = data.filter(cat => !cat.breeds)
    setCatData(data);
  }

  return (
    <>
      <div className="cat-gallery">
        {catData.map((cat) => (
          <div key={cat.breeds[0].id}>
            <Link to={`/cats/${cat.breeds[0].id}`}>
              <CatImg cat={cat} />
            </Link>
            {/* <CatPage cat={cat} /> */}
            {/* <CatCard cat={cat} /> */}
          </div>
        ))}
      </div>
    </>
  );
}
