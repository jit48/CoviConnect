import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useAuth } from "../../contexts/AuthContext";
import Sidebar from "./sidebar/Sidebar";

function VolunteerNav() {
  const {
    user: { user, isAuthorised, token, isVolunteer },
    logout,
  } = useAuth();
  const [open, isOpen] = useState(false);

  const sidebarCloseHandler = () => {
    isOpen(false);
  };
  const sidebarOpenHandler = () => {
    isOpen(true);
    console.log(open);
  };
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">CoviConnect</NavLink>
      </div>
      <div className="hamburger">
        <i className="fas fa-2x fa-bars" onClick={sidebarOpenHandler}></i>
        <Sidebar isOpen={open} sidebarCloseHandler={sidebarCloseHandler} />
      </div>
      <div className="navbar__links">
        <NavLink to="/">Profile</NavLink>
        <NavLink to="/">Blog</NavLink>
        <NavLink to="/">Volunteers</NavLink>
        <NavLink to="/">Ngos</NavLink>
      </div>

      <div className="navbar__auth">
        <button onClick={logout}>Sign Out </button>
        <i className="fas fa-2x fa-sign-in-alt"></i>
      </div>
    </div>
  );
}

export default VolunteerNav;
