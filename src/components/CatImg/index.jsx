import React from "react";
import "./CatImg.css";

export default function CatImg({ cat }) {
  return (
    <>
      <img src={cat.url} className="catCardImg" />
    </>
  );
}
