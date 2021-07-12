import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/CovidTracker.scss";
import Tracker from "../components/Tracker";
import Table from "../components/UI/Table";
import { useRef } from "react";
import api from "../axios";
import VaccineSlots from "../components/VaccineSlots";
import Information from "../components/Information/Information";
import Experience from "../components/UI/Experience/Experience";
import UserExperience from "../components/UI/Experience/UserExperience";
import Footer from "../components/Footer/Footer";

const scrollToRef = (ref) =>
  window.scrollTo({
    top: ref.current.offsetTop-60,
    left: 0,
    behavior: "smooth",
  });

function KnowledgeTransfer() {
  const myRef = useRef();
  const executeScroll = () => scrollToRef(myRef);

  const [getData, setData] = useState([]);
  const [clickData, setClickData] = useState({
    total: {
      confirmed: 0,
      recovered: 0,
      deseased: 0,
    },
  });
  const [experience,setExperience] = useState([]);
  const [clickStateName, setClickStateName] = useState("India");
  const [isLoading, setIsLoading] = useState(true);
  const [pin, setPin] = useState("");

  const getExperience = async () => {
    const res = await api.get("/users/experience").then(res => res.data);
    setExperience(res);
  }

  const getCovidData = async () => {
    setIsLoading(false);
    const res = await axios
      .get("https://api.covid19india.org/v4/min/data.min.json")
      .then((res) => res.data);
    setIsLoading(true);
    const arr = Object.entries(res);
    setData(arr);
    // const arrKeys = Object.keys(res);
    const newArr = arr.filter((item) => item[0] === "TT");
    setClickData(newArr[0][1]);
  };
  // console.log(getData);
  // console.log(stateCodes);
  useEffect(() => {
    getCovidData();
    getExperience();
  }, []);
  const handleChange = (e) => {
    setPin(e.target.value);
  };
  const handleClickHandler = (data, state) => {
    setClickData(data[1]);
    setClickStateName(state);
  };
  return (
    <div className="InfoPortal">
      <Information />
      <div className="InfoPortal__CovidTracker">
        <div className="CovidTracker">
          <center>
            <h4>Click On States For State Specific Data</h4>
          </center>
          <Table
            data={getData}
            handleClick={handleClickHandler}
            onClick={executeScroll}
          />
        </div>
        {isLoading ? (
          <div ref={myRef}>
            <Tracker state={clickStateName} data={clickData} />
          </div>
        ) : (
          <div>hi</div>
        )}
      </div>
      <div className="Covid__Vaccination">
        <div className="input">
          <div>
            <h1>Get Yourself Vaccinated</h1>
          </div>
        </div>
        <VaccineSlots pinCode={pin} />
      </div>
      <UserExperience experience={experience}/>
      <Experience />
      <Footer />
    </div>
  );
}

export default KnowledgeTransfer;
