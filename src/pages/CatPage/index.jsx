import React from 'react'
import { CatCard, CatGallery } from '../../components'
import { useCat } from "../../contexts";
import { useParams } from "react-router-dom";

export default function CatPage() {
  const {id} = useParams();
  const {catData, setCatData} = useCat();

  const map = catData.map(cat => cat.name)

  console.log(map)

  return (
    <>
      <h1>Im a cat page</h1>
      {/* {catData.map(cat => cat.name */}
        {/* <CatCard cat={cat}/> */}
      {/* )} */}
    </>
  )
}
