import React from "react";
import { NavLink } from "react-router-dom";


function Header () {

  return (
    <header>
         <h1>
          GoWild
          <span role="img">
            <img className="logo" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/camping_1f3d5-fe0f.png"></img>
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
              <button>
                <NavLink className="button" to="/Volunteer">
                  Volunteer
                </NavLink>
              </button>
          </div>
        </nav>
    </header>
  );
}

export default Header;
