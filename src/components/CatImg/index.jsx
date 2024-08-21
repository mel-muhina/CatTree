import React from 'react'

export default function CatImg({ cat }) {
  return (
    <>
       <img src={cat.url} className="catCardImg"/>
    </>
  )
}
