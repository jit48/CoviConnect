import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Volunteer from '../models/Volunteer.js';
import Facility from '../models/Facility.js';

const getVolunteerID = (token) => {
    const volunteer = jwt.decode(token);
    return volunteer.id;
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const volunteer = await Volunteer.findOne({ email });
        if (!volunteer) throw Error('User does not exists');

        const isMatch = await bcrypt.compare(password, volunteer.password);
        if (!isMatch) throw Error('Invalid credentials');

        const token = jwt.sign({ id: volunteer._id }, process.env.JWT_SECRET, { expiresIn: 3600 });
        if (!token) throw Error("Couldn't sign the token");

        res.status(200).json({
            token,
            volunteer: {
                id: volunteer._id,
                name: volunteer.name,
                email: volunteer.email,
            },
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const register = async (req, res) => {
    const { name, email, password, contact, gender, bio, address } = req.body;

    if (!name || !email || !password || !contact || !gender || !bio || !address) {
        return res.status(400).json({ msg: 'PLese enter all fields' });
    }

    try {
        const volunteer = await Volunteer.findOne({ email });
        if (volunteer) throw Error('User already exists');

        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error('Something went wrong with bcrypt');

        const hash = await bcrypt.hash(password, salt);
        if (!hash) throw Error('Something went wrong hashing password');

        const newVolunteer = new Volunteer({
            name,
            email,
            password: hash,
            contact,
            gender,
            bio,
            address,
        });

        const savedVolunteer = await newVolunteer.save();
        if (!savedVolunteer) throw Error('Something went wrong saving the user');

        const token = jwt.sign({ id: savedVolunteer._id }, process.env.JWT_SECRET, { expiresIn: 3600 });

        res.status(200).json({
            token,
            volunteer: {
                id: savedVolunteer._id,
                name: savedVolunteer.name,
                email: savedVolunteer.email,
            },
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const validate = async (req, res) => {
    try {
        const volunteer = await Volunteer.findById(getVolunteerID(req.header('x-auth-token'))).select('-password');
        if (!volunteer) throw Error('Volunteer does not exists');
        res.json(volunteer);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const posts = async (req, res) => {
    try {
        const facilities = await Facility.find({ volunteerID: getVolunteerID(req.header('x-auth-token')) });
        res.status(200).json(facilities);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
