
import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <NavLink to='contactForm' activeclassname={"active"}>Contact</NavLink>
        <NavLink to='projects' activeclassname={"active"}>Projects</NavLink>
        <NavLink to='about' activeclassname={"active"}>About</NavLink>
        <NavLink to='' activeclassname={"active"}>Home</NavLink>
    </div>
  )
}

export default Navbar
