import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"
function Navbar() {
  return (
    <nav className="nav">  
      <ul className="ul">
        <li className="li">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;