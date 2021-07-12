import React, { useState } from "react";
import api from "../../../axios";
import "./Experience.scss";
import Snackbar from "@material-ui/core/Snackbar";
function Experience() {
  const [data, setData] = useState({
    name: "",
    city: "",
    experience: "",
  });
  const [snackbar, setSnakbar] = useState(false);
  const postData = async () => {
    const res = await api
      .post("/users/experience", data)
      .then((res) => res.data);
    console.log(res);
    setData({
      name: "",
      city: "",
      experience: "",
    });
    setSnakbar(true);
  };
  const handleClick = () => {
    postData();
  };
  const handleClose = () => {
    setSnakbar(false);
  };
  // const handleNameChange = (e) => {
  //     setData((prevstate)=>{
  //         {
  //         ...prevstate,
  //             name:e.target.value
  //         }
  //     })
  // }
  return (
    <div className="experience">
      <h1>Share Your Covid Experience</h1>
      <div className="inputs">
        <label for="name">Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          value={data.name}
        />
        <label for="city">Your City</label>
        <input
          type="text"
          name="city"
          placeholder="Enter Your City"
          onChange={(e) => setData({ ...data, city: e.target.value })}
          value={data.city}
        />
        <label for="experience">Share Your Experience</label>
        <textarea
          type="text"
          name="experience"
          placeholder="Share Your Experience"
          maxlength="500"
          onChange={(e) => setData({ ...data, experience: e.target.value })}
          value={data.experience}
        />
        <button onClick={handleClick}>Share Experience</button>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={snackbar}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Your Experience Was Noted"
      />
    </div>
  );
}

export default Experience;
