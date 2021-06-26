import Facility from '../models/Facility.js';
import Volunteer from '../models/Volunteer.js';
import jwt from 'jsonwebtoken';
import FundRaise from '../models/FundRaise.js';
import { response } from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
dotenv.config();

const getVolunteerID = (token) => {
    const volunteer = jwt.decode(token);
    if (!volunteer) throw Error('Error decoding jwt token.');
    else return volunteer.id;
};
const getVolunteerName = async (token) => {
    const volunteer = await Volunteer.findById(getVolunteerID(token));
    if (!volunteer) throw Error('Cannot get volunteer details.');
    else return volunteer.name;
};

export const postBed = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            volunteerName: await getVolunteerName(req.header('x-auth-token')),
            type: 'bed',
            votes: 0,
            info: {
                hospitalName: req.body.info.hospitalName, 
                location: req.body.info.location,
                date: new Date().toLocaleString(),
                address: req.body.info.address,
                phnumber: req.body.info.phnum, 
                beds: req.body.info.beds
            }
        });

        postData.save();

        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const postAmbulance = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            volunteerName: await getVolunteerName(req.header('x-auth-token')),
            type: 'ambulance',
            votes: 0,
            info: {
                serviceProvider: req.body.info.serviceProvider, 
                location: req.body.info.location,
                date: new Date().toLocaleString(), 
                contactNum: req.body.info.contactNum
            }
        });

        postData.save();

        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const postBloodBank = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            volunteerName: await getVolunteerName(req.header('x-auth-token')),
            type: 'bloodbank',
            votes: 0,
            info: {
                serviceProvider: req.body.info.serviceProvider, 
                location: req.body.info.location,
                date: new Date().toLocaleString(), 
                contactNum: req.body.info.contactNum
            }
        });

        postData.save();

        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const postDiagnostic = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            volunteerName: await getVolunteerName(req.header('x-auth-token')),
            type: 'diagnosticcenter',
            votes: 0,
            info: {
                diagnosticName: req.body.centreName, 
                location: req.body.info.location,
                date: new Date().toLocaleString(), 
                contactNum: req.body.info.contactNum
            }
        });

        postData.save();

        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const postMeals = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            volunteerName: await getVolunteerName(req.header('x-auth-token')),
            type: 'meals',
            votes: 0,
            info: {
                serviceProvider: req.body.info.serviceProvider, 
                location: req.body.info.location,
                date: new Date().toLocaleString(), 
                contactNum: req.body.info.contactNum
            }
        });

        postData.save();

        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const postOxygen = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            volunteerName: await getVolunteerName(req.header('x-auth-token')),
            type: 'oxygen',
            votes: 0,
            info: {
                serviceProvider: req.body.info.serviceProvider, 
                location: req.body.info.location,
                date: new Date().toLocaleString(), 
                contactNum: req.body.info.contactNum
            }
        });

        postData.save();

        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const postPharmacy = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            volunteerName: await getVolunteerName(req.header('x-auth-token')),
            type: 'pharmacies',
            votes: 0,
            info: {
                serviceProvider: req.body.info.serviceProvider, 
                location: req.body.info.location,
                date: new Date().toLocaleString(), 
                contactNum: req.body.info.contactNum
            }
        });

        postData.save();
        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getAllPosts = async (req, res) => {
    try {
        const facilities = await Facility.find({});
        res.status(200).json(facilities);
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const editPost = async (req, res) => {
    try {
        const post = await Facility.findById(req.params.postId);

        if (!post)
            return res
                .status(404)
                .json({ method: 'FACILITY', status: res.statusCode, message: `Cannot find post with id: ${req.params.postId}.` });

        if (post.volunteerID === getVolunteerID(req.header('x-auth-token'))) {
            const updatedPost = await Facility.findByIdAndUpdate(req.params.postId, req.body, { new: true });
            res.status(200).json(updatedPost);
        } else {
            return res.status(401).json({ method: 'FACILITY', status: res.statusCode, message: `Unauthorised to update.` });
        }
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        const post = await Facility.findById(req.params.postId);

        if (!post)
            return res
                .status(404)
                .json({ method: 'FACILITY', status: res.statusCode, message: `Cannot find post with id: ${req.params.postId}.` });

        if (post.volunteerID === getVolunteerID(req.header('x-auth-token'))) {
            await Facility.findByIdAndDelete(req.params.postId);
            res.status(200).json({
                method: 'FACILITY',
                status: res.statusCode,
                message: `Post with id: ${req.params.postId} successfully deleted.`,
            });
        } else {
            return res.status(401).json({ method: 'FACILITY', status: res.statusCode, message: `Unauthorised to delete.` });
        }
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const getDonateData = (req, res) => {
    try {
        const id = req.params.id;

        FundRaise.find({_id: id}, function(err, data){
            if(err){
                res.status(404).json({method: 'FUND_RAISE', status: res.statusCode, message: 'Cannot find data with given Id'})
            }
            else{
                res.status(200).json(data);

            }
        })

    } catch (error) {
        res.status(500).json({mathod: 'SERVER', status: res.statusCode, message: error.message});
    }
}

export const razorpay = (req, res) => {
    var instance = new Razorpay({ key_id: process.env.RAZORPAY_KEY, key_secret: process.env.RAZORPAY_SECRECT})
    const id = req.params.id;
    const amount = req.body.amount;

    FundRaise.find({_id: id}, function(err, data){
        if(err){
            console.log(err);
        }
        else{
           data[0].raised = data[0].raised + amount;

        }
    })

    var options = {
    amount: amount.toString(),  
    currency: "INR",
    receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function(err, order) {
        res.json({
            id: response.id
        })
    });
}