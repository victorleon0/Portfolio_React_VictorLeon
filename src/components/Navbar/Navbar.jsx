import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarbuttons">
      <Link to="/">
        <button className="navButton">Home</button>
      </Link>
      <Link to="/About">
        <button className="navButton">About</button>
      </Link>
      <Link to="/Projects">
        <button className="navButton">Projects</button>
      </Link>
      <Link to="/Contact">
        <button className="navButton">Contact</button>
      </Link>
      <Link to="/Comments">
        <button className="navButton">Comments</button>
      </Link>
    </div>
  );
};

export default Navbar;
