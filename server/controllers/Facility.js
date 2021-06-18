import Facility from '../models/Facility.js';
import jwt from 'jsonwebtoken';

const getVolunteerID = (token) => {
    const volunteer = jwt.decode(token);
    return volunteer.id;
};

export const postBed = async (req, res) => {
    try {
        const postData = new Facility({
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            type: 'bed',
            votes: req.body.votes,
            info: {
                hospitalName: req.body.info.hospitalName,
                location: req.body.info.location,
                beds: req.body.info.beds,
            },
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
            type: 'ambulance',
            votes: req.body.votes,
            info: {
                serviceProvider: req.body.info.providerName,
                location: req.body.info.location,
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
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            type: 'bloodbank',
            votes: req.body.votes,
            info: {
                serviceProvider: req.body.info.providerName,
                location: req.body.info.location,
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
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            type: 'diagnosticcenter',
            votes: req.body.votes,
            info: {
                diagnosticName: req.body.info.diagnosticName,
                location: req.body.info.location,
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
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            type: 'meals',
            votes: req.body.votes,
            info: {
                serviceProvider: req.body.info.serviceProvider,
                location: req.body.info.location,
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
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            type: 'oxygen',
            votes: req.body.votes,
            info: {
                serviceProvider: req.body.info.serviceProvider,
                location: req.body.info.location,
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
            volunteerID: getVolunteerID(req.header('x-auth-token')),
            type: 'pharmacies',
            votes: req.body.votes,
            info: {
                serviceProvider: req.body.info.serviceProvider,
                location: req.body.info.location,
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
        res.status(409).json({ message: error.message });
    }
};

export const editPost = async (req, res) => {
    try {
        const post = await Facility.findById(req.params.postId);
        if (post.volunteerID === getVolunteerID(req.header('x-auth-token'))) {
            const updatedPost = await Facility.findByIdAndUpdate(req.params.postId, req.body, { new: true });
            res.status(200).json(updatedPost);
        } else {
            throw Error('Unauthorised to update');
        }
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        const post = await Facility.findById(req.params.postId);
        if (post.volunteerID === getVolunteerID(req.header('x-auth-token'))) {
            await Facility.findByIdAndDelete(req.params.postId);
            res.status(200).json({ msg: 'deleted' });
        } else {
            throw Error('Unauthorised to delete');
        }
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
