import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

import Sidebar from "./sidebar/Sidebar";
function Navbar() {
    const [open, isOpen] = useState(false);

    const sidebarCloseHandler = () =>{
      isOpen(false);
    }
    const sidebarOpenHandler = () => {
        isOpen(true);
        console.log(open)
    }
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">CoviConnect</NavLink>
      </div>
      <div className="hamburger">
        <i className="fas fa-2x fa-bars" onClick={sidebarOpenHandler} ></i>
        <Sidebar isOpen={open} sidebarCloseHandler={sidebarCloseHandler}/>
      </div>
      <div className="navbar__links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Contact</NavLink>
      </div>

      <div className="navbar__auth">
        <NavLink to="/">Sign In </NavLink>
        <i className="fas fa-2x fa-sign-in-alt"></i>
      </div>
    </div>
  );
}

export default Navbar;
