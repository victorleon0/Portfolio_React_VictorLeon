import './Navbar.scss';
import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
        <NavLink className="link" to='Contact' activeclassname={"active"}>Contact</NavLink>
        <NavLink className="link" to='Projects' activeclassname={"active"}>Projects</NavLink>
        <NavLink className="link" to='About' activeclassname={"active"}>About</NavLink>
        <NavLink className="link" to='' activeclassname={"active"}>Home</NavLink>

        
    </div>
  )
}

export default Navbar
