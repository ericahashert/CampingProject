import React from "react";
import { NavLink } from "react-router-dom";


function Header () {

  return (
    <header>
        <h1>
          National Parks
          <span className="logo" role="img">
            🌱
          </span>
        </h1>
        <nav>
          <div className="navigation">
              <NavLink className="button" exact to="/">
                Home
              </NavLink>

              <NavLink className="button" to="/Map">
                Map
              </NavLink>

              <NavLink className="button" to="/Gallery">
                Gallery
              </NavLink>
          </div>
        </nav>
    </header>
  );
}

export default Header;
