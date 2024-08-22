import React from "react";
import { Link } from "react-router-dom";
import SearchWidget from "../../components/SearchWidget";
import Redirect from "../../components/Redirect";
import "./HomePage.css";
import catBg from "../../assets/catbg.webp";

export default function HomePage() {
  return (
    <main className="homepage">
      <h1 className="homepage-h1">Cat Tree</h1>
      <div className="searchbar-homepage">
        <Redirect />
      </div>
      <div className="homepage-container">
        <p className="homepage-description">
          Cat Tree is your ultimate companion in finding the perfect feline
          friend. Whether you’re searching for a specific breed or just browsing
          through all the cats available for adoption, Cat Tree makes it easy to
          connect with your future best friend. With intuitive search options,
          you can filter cats by breed, age, and personality, or explore the
          full array of adoptable cats at nearby shelters. Each cat’s profile is
          filled with detailed information and adorable photos, helping you make
          an informed and heartfelt choice. Begin your journey on Cat Tree and
          discover your new furry companion today.
        </p>
        <div className="img-right">
          <img src={catBg} />
        </div>
      </div>
    </main>
  );
}
