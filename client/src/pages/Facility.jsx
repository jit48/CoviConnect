import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../axios";
import "../styles/Facility.scss";

import SideNav from "./UI/SideNav";
import BedCard from "../components/Facility/Bed/BedCard";
import OxygenCard from "../components/Facility/OxygenCard";
import BloodBankCard from "../components/Facility/BloodBankCaed";
import DiagnosticCard from "../components/Facility/DiagnosticCard";
import MealsCard from "../components/Facility/MealsCard";
import PharmacyCard from "../components/Facility/PharmacyCard";
import AmbulanceCard from "../components/Facility/Ambulance/AmbulanceCard";

import CircularProgress from "@material-ui/core/CircularProgress";

function Facility() {
  const { type } = useParams();
  const [facility, setfacility] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  function compare(a, b) {
    if (a.votes > b.votes) {
      return -1;
    }
    if (a.votes < b.votes) {
      return 1;
    }
    return 0;
  }
  const getFacility = async () => {
    const facility = await api.get(`/facility/${type}`).then((res) => res.data);
    setLoading(true);
    facility.sort(compare);
    setfacility(facility);
    console.log(facility);
  };
  useEffect(() => {
    getFacility();
  }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const matches = facility.filter((d) => {
    const string = input.toString().replace(/\\/g, "\\\\");
    const regex = new RegExp(`^${string}`, "gi");
    return d.info.hospitalName.match(regex);
  });
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div className="facilitySearch-page">
      <div className="facility-sideNav">
        <SideNav />
      </div>
      <div className="facility">
        <div className="searchBar">
        <input
          type="text"
          placeholder="Seacrh For Beds"
          onChange={handleChange}
        />
        <button type="submit" onSubmit={handleSubmit}>Search</button>
      </div>
        {loading ? (
          matches.map((item) => {
            if (item.type === "bed")
              return <BedCard key={item._id} facility={item} />;
            if (item.type === "oxygen")
              return <OxygenCard key={item._id} facility={item.info} />;
            if (item.type === "bloodBank")
              return <BloodBankCard key={item._id} facility={item.info} />;
            if (item.type === "diagnostic")
              return <DiagnosticCard key={item._id} facility={item.info} />;
            if (item.type === "meals")
              return <MealsCard key={item._id} facility={item.info} />;
            if (item.type === "pharmacy")
              return <PharmacyCard key={item._id} facility={item.info} />;
            if (item.type === "ambulance")
              return <AmbulanceCard key={item._id} facility={item.info} />;
          })
        ) : (
          <div className="spinner">
            <CircularProgress color="inherit" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Facility;
