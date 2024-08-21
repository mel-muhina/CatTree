import CatImg from "../CatImg"
import { useState, useEffect } from "react";
import './CatCard.css'

export default function CatCard({ cat }) {    
    const [catName, setCatName ] = useState([]);
    const [catAge, setCatAge ] = useState([]);

    useEffect(() => {
        getCatNames();
    }, [])

    async function getCatNames() {

        const catNames = [
            "Whiskers", "Mittens", "Shadow", "Luna", "Simba", "Chloe", "Bella", "Oliver",
            "Max", "Nala", "Milo", "Tiger", "Smokey", "Zoe", "Gizmo", "Oreo", "Tigger",
            "Salem", "Pepper", "Socks", "Cleo", "Jasper", "Felix", "Daisy", "Leo", "Loki",
            "Pumpkin", "Misty", "Coco", "Boots", "Oscar", "Ginger", "Marley", "Toby",
            "Muffin", "Bandit", "Sassy", "Fiona", "Boo", "Patches", "Mocha", "Midnight",
            "Callie", "Freckles", "Rascal", "Ash", "Ruby", "Willow", "Ziggy", "Ninja"
        ]

        const catAges = [3, 7, 1, 14, 5, 10, 8, 12, 6, 2, 9, 4, 15, 11, 13, 7, 1, 6, 8, 14, 12, 4, 10, 3, 9, 2, 11, 5, 15, 7];

        const getRandomCatName = catNames[Math.floor(Math.random() * catNames.length)]
        setCatName(getRandomCatName)

        const getRandomCatAge = catAges[Math.floor(Math.random() * catAges.length)]
        setCatAge(getRandomCatAge)
 
    }

    console.log(cat.breeds[0])

  return (
    <>  
        <div className="cat-card" key={cat.id}>
            <h2>{catName} - {catAge} years old</h2>
            <CatImg cat={cat}/>
            <div className="cat-card-text">
                    <h3>Breed: {cat.breeds[0]?.name}</h3>
                <ul>
                    <li>   <p>Adaptability: {cat.breeds[0]?.adaptability}/5</p></li>
                    <li>   <p>Affectionate: {cat.breeds[0]?.affection_level}/5</p></li>
                    <li>   <p>Dog Friendly: {cat.breeds[0]?.dog_friendly}/5</p></li>
                    <li>   <p>Energy Level: {cat.breeds[0]?.energy_level}/5</p></li>
                    <li>   <p>Hypoallergenic: {cat.breeds[0]?.hypoallergenic}/5</p></li>
                    <li>   <p>Intelligence: {cat.breeds[0]?.intelligence}/5</p></li>
                </ul>
                     <p>{cat.breeds[0]?.description}</p>
            </div>
            
        </div>
    </>
  )
}
