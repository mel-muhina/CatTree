import React from "react";
import {Link} from "react-router-dom";
import SearchWidget from "../../components/SearchWidget";
import Redirect from "../../components/Redirect";

export default function HomePage() {
  return (
    <main>
      <h1>CatTree</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <Redirect />
    </main>
  );
};
