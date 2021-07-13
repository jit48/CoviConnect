import axios from "axios";
import React from "react";
import { useState } from "react";
import VaccineTable from "./UI/VaccineTable";

function VaccineSlots(props) {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const date = new Date();
  const today = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  const getData = async () => {
    const res = await axios
      .get(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${input}&date=${today}`
      )
      .then((res) => res.data.sessions);
    console.log(res);
    const arr = res.filter((res) => res.available_capacity !== 0);
    setData(arr);
  };
  const handleChange = (e) => {
    setData([]);
    setInput(e.target.value);
  };
  return (
    <div className="tracker">
      <div className="input">
        <input placeholder="Enter Your Pincode" type="text" onChange={handleChange} />
        <button onClick={getData}>Check  Availablity</button>
      </div>
      <div className="CovidTracker">
        <VaccineTable data={data} date={today}/>
        <div className="tableFooter">
          <p>
            To Book Slot visit :-{" "}
            <a href="https://www.cowin.gov.in/">
              <b>Co-Win</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default VaccineSlots;
