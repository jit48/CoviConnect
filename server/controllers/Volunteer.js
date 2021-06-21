import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Volunteer from '../models/Volunteer.js';
import Facility from '../models/Facility.js';

const getVolunteerID = (token) => {
    const volunteer = jwt.decode(token);
    if (!volunteer) throw Error('Error decoding jwt token.');
    else return volunteer.id;
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ method: 'SIGN_IN', status: res.statusCode, message: 'Required fields are empty. Enter all fields.' });
    }

    if (!/^[^s@]+@[^s@]+$/.test(email))
        return res.status(400).json({ method: 'SIGN_IN', status: res.statusCode, message: 'Invalid email. Try signing in again.' });

    try {
        const volunteer = await Volunteer.findOne({ email });
        if (!volunteer)
            return res.status(404).json({ method: 'SIGN_IN', status: res.statusCode, message: `User with the email ${email} not found.` });

        const isMatch = await bcrypt.compare(password, volunteer.password);
        if (!isMatch) return res.status(406).json({ method: 'SIGN_IN', status: res.statusCode, message: `Invalid password credentials.` });

        const token = jwt.sign({ id: volunteer._id }, process.env.JWT_SECRET, { expiresIn: 3600 });
        if (!token)
            return res.status(500).json({
                method: 'SIGN_IN',
                status: res.statusCode,
                message: `Couldn't sign the authentication token. Try signing in again.`,
            });

        res.status(200).json({
            token,
            volunteer: {
                id: volunteer._id,
                name: volunteer.name,
                email: volunteer.email,
            },
        });
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const register = async (req, res) => {
    const { name, email, password, contact, gender, bio, address } = req.body;

    if (!name || !email || !password || !contact || !gender || !bio || !address) {
        return res.status(400).json({ method: 'SIGN_UP', status: res.statusCode, message: 'Required fields are empty. Enter all fields.' });
    }

    if (!/^[^s@]+@[^s@]+$/.test(email))
        return res.status(400).json({ method: 'SIGN_UP', status: res.statusCode, message: 'Invalid email. Try signing up again.' });

    try {
        const volunteer = await Volunteer.findOne({ email });
        if (volunteer)
            return res
                .status(400)
                .json({ method: 'SIGN_UP', status: res.statusCode, message: `User with the email ${email} already exists.` });

        const salt = await bcrypt.genSalt(10);
        if (!salt)
            return res
                .status(500)
                .json({ method: 'SIGN_UP', status: res.statusCode, message: `Error generating hashing salt. Try registering again.` });

        const hash = await bcrypt.hash(password, salt);
        if (!hash)
            return res
                .status(500)
                .json({ method: 'SIGN_UP', status: res.statusCode, message: `Error generating hashed password. Try registering again.` });

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
        if (!savedVolunteer)
            return res
                .status(500)
                .json({ method: 'SIGN_UP', status: res.statusCode, message: `Error registering user. Try registering again.` });

        res.status(201).json({
            method: 'SIGN_UP',
            status: res.statusCode,
            message: `User with email ${savedVolunteer.email} successfully registered.`,
        });
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const validate = async (req, res) => {
    try {
        const volunteer = await Volunteer.findById(getVolunteerID(req.header('x-auth-token'))).select('-password');
        res.status(200).json(volunteer);
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const posts = async (req, res) => {
    try {
        const facilities = await Facility.find({ volunteerID: getVolunteerID(req.header('x-auth-token')) });
        res.status(200).json(facilities);
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};
