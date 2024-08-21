import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './CatGallery.css'
import CatImg from "../CatImg";
import CatCard from "../CatCard";

export default function CatGallery() {

    const [catData, setCatData ] = useState([]);

    useEffect(() => {
        getCats();
    }, [])

    async function getCats() {
        
        const api = "https://api.thecatapi.com/v1/images/search?limit=10"
        const response = await fetch(hiddenApi)
        const data = await response.json();
        const filterData = data.filter(cat => cat.breeds[0]?.name)
        // const filterData = data.filter(cat => !cat.url.endsWith('.gif'))
        // const filterData = data.filter(cat => !cat.breeds)
        setCatData(filterData)
    }

  return (
    <>
    <div className="cat-gallery">
        {catData.map(cat => 
                // <Link to={`${cat.id}`}><CatCard cat={cat} /></Link> <--- This is correct, but currently have no routers to make this work 
                // <CatImg cat={cat} />
                <CatCard cat={cat} />
            )}
           
        
    </div>
    </>
  )
}
