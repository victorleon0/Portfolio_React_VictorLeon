
import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <NavLink to='Contact' activeclassname={"active"}>Contact</NavLink>
        <NavLink to='Projects' activeclassname={"active"}>Projects</NavLink>
        <NavLink to='About' activeclassname={"active"}>About</NavLink>
        <NavLink to='' activeclassname={"active"}>Home</NavLink>
    </div>
  )
}

export default Navbar
