import React from "react";
import "./SideNav.scss";
import facilities from "../../helpers/homeFacilities";
import { NavLink } from "react-router-dom";
function SideNav() {
  return (
    <div className="SideNav">
      <h1></h1>
      <div className="SideNav-Links">
        {facilities.map((item) => (
          <div className="SideNav-Links-container">
            <img src={item.img} alt={item.type} />
            <NavLink to={`/facility/${item.link}`}>{item.type}</NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
