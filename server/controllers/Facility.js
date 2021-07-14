import Facility from '../models/Facility.js';
import Volunteer from '../models/Volunteer.js';
import jwt from 'jsonwebtoken';
import FundRaise from '../models/FundRaise.js';
import { response } from 'express';
import Ngo from '../models/Ngo.js';
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
      volunteerID: getVolunteerID(req.header("x-auth-token")),
      volunteerName: await getVolunteerName(req.header("x-auth-token")),
      type: "bed",
      votes: 0,
      info: {
        hospitalName: req.body.info.hospitalName,
        serviceProvider: req.body.info.hospitalName,
        date: new Date().toLocaleString(),
        address: req.body.info.location,
        city: req.body.info.city.toLowerCase(),
        contactNum: req.body.info.contactNum,
        beds: req.body.info.beds,
      },
    });

        postData.save();
        // geoAddress(req.body.address);
        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const postAmbulance = async (req, res) => {
  try {
    const postData = new Facility({
      volunteerID: getVolunteerID(req.header("x-auth-token")),
      volunteerName: await getVolunteerName(req.header("x-auth-token")),
      type: "ambulance",
      votes: 0,
      info: {
        serviceProvider: req.body.info.serviceProvider,
        location: req.body.info.location, 
        city:req.body.info.city.toLowerCase(),                     
        date: new Date().toLocaleString(),
        contactNum: req.body.info.contactNum,
      },
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
      volunteerID: getVolunteerID(req.header("x-auth-token")),
      volunteerName: await getVolunteerName(req.header("x-auth-token")),
      type: "bloodbank",
      votes: 0,
      info: {
        serviceProvider: req.body.info.serviceProvider,
        location: req.body.info.location,
        city:req.body.info.city.toLowerCase(),
        date: new Date().toLocaleString(),
        contactNum: req.body.info.contactNum,
      },
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
      volunteerID: getVolunteerID(req.header("x-auth-token")),
      volunteerName: await getVolunteerName(req.header("x-auth-token")),
      type: "diagnosticcenter",
      votes: 0,
      info: {
        centreName: req.body.info.centreName,
        serviceProvider: req.body.info.centreName,
        location: req.body.info.location,
        city:req.body.info.city.toLowerCase(),
        date: new Date().toLocaleString(),
        contactNum: req.body.info.contactNum,
      },
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
      volunteerID: getVolunteerID(req.header("x-auth-token")),
      volunteerName: await getVolunteerName(req.header("x-auth-token")),
      type: "meals",
      votes: 0,
      info: {
        serviceProvider: req.body.info.serviceProvider,
        location: req.body.info.location,
        city:req.body.info.city.toLowerCase(),
        date: new Date().toLocaleString(),
        contactNum: req.body.info.contactNum,
      },
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
      volunteerID: getVolunteerID(req.header("x-auth-token")),
      volunteerName: await getVolunteerName(req.header("x-auth-token")),
      type: "oxygen",
      votes: 0,
      info: {
        serviceProvider: req.body.info.serviceProvider,
        location: req.body.info.location,
        city:req.body.info.city.toLowerCase(),
        date: new Date().toLocaleString(),
        contactNum: req.body.info.contactNum,
      },
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
      volunteerID: getVolunteerID(req.header("x-auth-token")),
      volunteerName: await getVolunteerName(req.header("x-auth-token")),
      type: "pharmacies",
      votes: 0,
      info: {
        serviceProvider: req.body.info.serviceProvider,
        location: req.body.info.location,
        city:req.body.info.city.toLowerCase(),
        date: new Date().toLocaleString(),
        contactNum: req.body.info.contactNum,
      },
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
        res.status(500).json({
            method: 'SERVER',
            status: res.statusCode,
            message: error.message,
        });
    }
};

export const editPost = async (req, res) => {
    try {
        const post = await Facility.findById(req.params.postId);

        if (!post)
            return res.status(404).json({
                method: 'FACILITY',
                status: res.statusCode,
                message: `Cannot find post with id: ${req.params.postId}.`,
            });

        if (post.volunteerID === getVolunteerID(req.header('x-auth-token'))) {
            const updatedPost = await Facility.findByIdAndUpdate(req.params.postId, req.body, { new: true });
            res.status(200).json(updatedPost);
        } else {
            return res.status(401).json({
                method: 'FACILITY',
                status: res.statusCode,
                message: `Unauthorised to update.`,
            });
        }
    } catch (error) {
        res.status(500).json({
            method: 'SERVER',
            status: res.statusCode,
            message: error.message,
        });
    }
};

export const deletePost = async (req, res) => {
    try {
        const post = await Facility.findById(req.params.postId);

        if (!post)
            return res.status(404).json({
                method: 'FACILITY',
                status: res.statusCode,
                message: `Cannot find post with id: ${req.params.postId}.`,
            });

        if (post.volunteerID === getVolunteerID(req.header('x-auth-token'))) {
            await Facility.findByIdAndDelete(req.params.postId);
            res.status(200).json({
                method: 'FACILITY',
                status: res.statusCode,
                message: `Post with id: ${req.params.postId} successfully deleted.`,
            });
        } else {
            return res.status(401).json({
                method: 'FACILITY',
                status: res.statusCode,
                message: `Unauthorised to delete.`,
            });
        }
    } catch (error) {
        res.status(500).json({
            method: 'SERVER',
            status: res.statusCode,
            message: error.message,
        });
    }
};

export const getDonateData = (req, res) => {
    try {
        const id = req.params.id;

        FundRaise.find({ _id: id }, function (err, data) {
            if (err) {
                res.status(404).json({ method: 'FUND_RAISE', status: res.statusCode, message: 'Cannot find data with given Id' });
            } else {
                res.status(200).json(data);
            }
        });
    } catch (error) {
        res.status(500).json({ mathod: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const razorpay = async (req, res) => {
    var instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY,
        key_secret: process.env.RAZORPAY_SECRECT,
    });
    const id = req.params.id;
    const amount = req.body.amount;

    FundRaise.find({ _id: id }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            data[0].raised = data[0].raised + amount;
        }
    });
    const fund = await FundRaise.findById(id);
    fund.raised = fund.raised + amount / 100;
    fund.save();
    // FundRaise.find({_id: id}, function(err, data){
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         data[0].raised = data[0].raised+(amount/100);
    //         FundRaise.save();
    //         console.log(data[0].raised);
    //         console.log(data[0].raised+amount);
    //         console.log(amount);
    //     }
    // })
    var options = {
        amount: amount.toString(),
        currency: 'INR',
        receipt: 'order_rcptid_11',
    };
    instance.orders.create(options, function (err, order) {
        res.json({
            id: response.id,
        });
    });
};
export const adoptionForm = async (req, res) => {
    let obj = {};
    if (req.body.type === 'kids') {
        obj = {
            type: req.body.type,
            name: req.body.name,
            noOfAdopions: req.body.noOfAdoption,
            age: req.body.age,
            maritalStatus: req.body.maritalStatus,
            phNum: req.body.phNum,
            email: req.body.email,
            id: Date.now(),
        };
    } else {
        obj = {
            type: req.body.type,
            name: req.body.name,
            noOfAdopions: req.body.noOfAdoption,
            animalType: req.body.animalType,
            age: req.body.age,
            phNum: req.body.phNum,
            email: req.body.email,
            id: Date.now(),
        };
    }
    console.log(obj);

    Ngo.find({ isAdoption: true }, (err, foundNgos) => {
        if (err) {
            console.log(err);
        } else {
            foundNgos.forEach((item) => {
                item.adoptionForm.push(obj);
                item.save();
            });
        }
    });
    res.status(200).json({ success: true });
};
