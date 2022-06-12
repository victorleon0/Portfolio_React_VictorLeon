import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarbuttons">
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/About">
        <button>About</button>
      </Link>
      <Link to="/Projects">
        <button>Projects</button>
      </Link>
      <Link to="/Contact">
        <button>Contact</button>
      </Link>
    </div>
  );
};

export default Navbar;
