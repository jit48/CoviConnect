import express from 'express';
import mongoose from 'mongoose';
import Facility from '../models/Facility.js';
import { geoAddress } from '../Helpers/mapKey.js';
const router = express.Router();

export const postBed = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: 1234,
            volunteerName: "Hello",
            type: "bed",
            votes: 0,
            info: {
                hospitalName: req.body.hospitalName, 
                location: req.body.location,
                date: new Date().toLocaleString(),
                address: req.body.address,
                phnumber: req.body.phnum, 
                beds: req.body.beds
            }
        });

        postData.save();
        // geoAddress(req.body.address);
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
            type: "ambulance",
            votes: 0,
            info: {
                serviceProvider: req.body.providerName, 
                location: req.body.location,
                date: new Date().toLocaleString(), 
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
            type: "bloodbank",
            votes: 0,
            info: {
                serviceProvider: req.body.providerName, 
                location: req.body.location,
                date: new Date().toLocaleString(), 
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
            type: "diagnosticcenter",
            votes: 0,
            info: {
                diagnosticName: req.body.centreName, 
                location: req.body.location,
                date: new Date().toLocaleString(), 
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
            type: "meals",
            votes: 0,
            info: {
                serviceProvider: req.body.providerName, 
                location: req.body.location,
                date: new Date().toLocaleString(), 
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
            type: "oxygen",
            votes: 0,
            info: {
                serviceProvider: req.body.providerName, 
                location: req.body.location,
                date: new Date().toLocaleString(), 
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
            type: "pharmacies",
            votes: 0,
            info: {
                serviceProvider: req.body.providerName, 
                location: req.body.location,
                date: new Date().toLocaleString(), 
                contactNum: req.body.contactNum
            }
        });

        postData.save();

        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    } 
}

