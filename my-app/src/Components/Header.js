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
              <button>
                <NavLink className="button" exact to="/">
                  Home
                </NavLink>
              </button>
              <button>
                <NavLink className="button" to="/Map">
                  Map
                </NavLink>
              </button>
              <button>
                <NavLink className="button" to="/Gallery">
                  Gallery
                </NavLink>
              </button>
          </div>
        </nav>
    </header>
  );
}

export default Header;