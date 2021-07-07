import React from "react";
import "./SideNav.scss";
import facilities from "../../helpers/homeFacilities";
function SideNav() {
  return (
    <div className="SideNav">
      <div className="SideNav-Links">
        {facilities.map((item) => (
          <div className="SideNav-Links-container">
            <img src={item.img} alt={item.type} />
            <a href={`/facility/${item.link}`} >{item.type}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
