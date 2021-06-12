import express from 'express';
import mongoose from 'mongoose';
import Facility from '../models/Facility.js';

const router = express.Router();

export const postBed = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: 1234,
            volunteerName: "Hello",
            type: "Beds",
            info: {
                hospitalName: req.body.hospitalName, 
                location: req.body.location, 
                beds: req.body.beds
            }
        });

        postData.save();

        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const postAmbulance = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: 1234,
            volunteerName: "Hello",
            type: "Ambulance",
            info: {
                serviceProvider: req.body.providerName, 
                location: req.body.location, 
                contactNum: req.body.contactNum
            }
        });

        postData.save();

        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    } 
}