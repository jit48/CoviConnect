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
            votes: 0,
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
            votes: 0,
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

export const postBloodBank = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: 1234,
            volunteerName: "Hello",
            type: "BloodBank",
            votes: 0,
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


export const postDiagnostic = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: 1234,
            volunteerName: "Hello",
            type: "Diagnostic",
            votes: 0,
            info: {
                diagnosticName: req.body.centreName, 
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

export const postMeals = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: 1234,
            volunteerName: "Hello",
            type: "Meals",
            votes: 0,
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


export const postOxygen = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: 1234,
            volunteerName: "Hello",
            type: "Oxygen",
            votes: 0,
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

export const postPharmacy = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: 1234,
            volunteerName: "Hello",
            type: "Pharmacy",
            votes: 0,
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