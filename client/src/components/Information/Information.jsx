import React, { useState } from "react";
import "./Information.scss";
import Overview from "./Overview";
import Prevention from "./Prevention";
import Symptoms from "./Symptoms";
import Info from "../../Images/Info.png";
function Information() {
  const [param, setParam] = useState("Overview");
  const [active,setActive] = useState(true)
  const renderSwitch = (param) => {
    switch (param) {
      case "Overview": {
        return <Overview />;
      }
      case "Prevention": {
        return <Prevention />;
      }
      case "Symptoms": {
        return <Symptoms />;
      }
      default: {
        return <Overview />;
      }
    }
  };
  const handleOverviewHandler = () => {
    setParam("Overview");
  };
  const handlePreventionHandler = () => {
    setParam("Prevention");
  };
  const handleSymptomsHandler = () => {
    setParam("Symptoms");
  };
  return (
    <div className="Information">
      <div className="Information_Header">
        <div class="Information_text">
          <div className="Information_Buttons">
            <button onClick={handleOverviewHandler}>Overview</button>
            <button onClick={handlePreventionHandler}>Prevention</button>
            <button onClick={handleSymptomsHandler}>Symptoms</button>
          </div>
          <div className="Information_Info">{renderSwitch(param)}</div>
        </div>
        <div className="Information_Image">
          <img src={Info} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Information;
