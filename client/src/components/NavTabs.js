import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
      <button>
        <Link to="/game" className={window.location.pathname === "/game" ? "nav-link active" : "nav-link"}>
          Game
        </Link>
      </button>  
      </li>
   </ul>
  );
}

export default NavTabs;
