import express from "express";
import Experience from "../models/Experience.js";

export const userUpvotes = async (req, res) => {
  console.log(req.body);
};

export const experience = async (req, res) => {
  try {
    const { name, city, experience } = req.body;
    const exp = new Experience({
      name: name,
      city: city,
      experience,
    });
    exp.save();
    res
      .status(200)
      .json({
        method: "Covid Experience",
        status: res.statusCode,
        message: "Succesfully applied.",
      });
  } catch (err) {
    res
    .status(500)
    .json({
      method: "Something Went Wrong",
      status: res.statusCode,
      message: err,
    });
  }
};

export const getExperience = async (req, res) => {
  Experience.find({}, (err, foundExperience) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(foundExperience);
    }
  });
};
