import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './CatGallery.css'
import CatCard from "../CatCard";

export default function CatGallery() {

    const [catData, setCatData ] = useState([]);

    useEffect(() => {
        getCats();
    }, [])

    async function getCats() {

        const hiddenApi = "https://api.thecatapi.com/v1/images/search?limit=20&api_key=live_gfQNGADb522pBj4pARmpFnCa1CrQQrTG1yA03h0U4MI27yZiTsl4k3mqwXa3BOdU"
        const apiByBreed = "https://api.thecatapi.com/v1/images/search?limit=20&breed_ids=beng&api_key=live_gfQNGADb522pBj4pARmpFnCa1CrQQrTG1yA03h0U4MI27yZiTsl4k3mqwXa3BOdU"
        const api = "https://api.thecatapi.com/v1/images/search?limit=10"
        const response = await fetch(hiddenApi)
        const data = await response.json();
        const filterData = data.filter(cat => !cat.url.endsWith('.gif'))
      
        setCatData(filterData)
    }

  return (
    <>
    <div className="cat-gallery">
        {catData.map(cat => 
                // <Link to={`${cat.id}`}><CatCard cat={cat} /></Link> <--- This is correct, but currently have no routers to make this work 
                <CatCard cat={cat} />
            )}
           
        
    </div>
    </>
  )
}
