import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
function Sidebar(props) {
  const { isOpen, sidebarCloseHandler } = props;
  const closeHandler = () => {
    sidebarCloseHandler();
  };
  return (
    <div className={`sidebar ${isOpen ? "open" : "close"}`}>
      <div className="sidebar__exit">
        <p>CoviConnect</p>
        <i className="fas fa-2x fa-times-circle" onClick={closeHandler}></i>
      </div>
      <div className="sidebar__links">
        <div className="border">
          <NavLink to="/" onClick={closeHandler}>Home</NavLink>
        </div>
        <div className="border">
          <NavLink to="/Coviconnect/CovidResource" onClick={closeHandler}>Get Informed</NavLink>
        </div>
        <div className="border">
          <NavLink to="/" onClick={closeHandler}>Volunteers</NavLink>
        </div>
        <div className="border">
          <NavLink to="/" onClick={closeHandler}>Ngo</NavLink>
        </div>
      </div>
      <div className="sidebar__auth">
          <NavLink to="/login" onClick={closeHandler}>SignIn</NavLink>  
          <NavLink to="/login" onClick={closeHandler}><i className="fas fa-2x fa-sign-in-alt"></i></NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
