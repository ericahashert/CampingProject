import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <div>
      <h1>
        National Parks
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
      <NavBar />
    </div>
  );
}

export default Header;
