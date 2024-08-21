import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './CatGallery.css'
import CatImg from "../CatImg";
import CatCard from "../CatCard";
import { CatPage } from "../../pages";
import { useCat } from "../../contexts";
import { useParams } from "react-router-dom";

export default function CatGallery() {
    const {id} = useParams();
    const {catData, setCatData} = useCat();
    // const [catData, setCatData ] = useState([]);

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
        // comment
    }

    // console.log("cat id", cat.id)

  return (
    <>
    <div className="cat-gallery">
        {catData.map(cat => 
                <div>
                    <Link to={`/cats/${cat.id}`}><CatImg cat={cat} /></Link>
                    {/* <CatPage cat={cat} /> */}
                    {/* <CatCard cat={cat} /> */}
                </div>
            )}
           
     
    </div>
    </>
  )
}
