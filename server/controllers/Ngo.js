import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Ngo from '../models/Ngo.js';

const getNgoID = (token) => {
    const ngo = jwt.decode(token);
    if (!ngo) throw Error('Error decoding jwt token.');
    else return ngo.id;
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ method: 'SIGN_IN', status: res.statusCode, message: 'Required fields are empty. Enter all fields.' });
    }

    if (!/^[^s@]+@[^s@]+$/.test(email))
        return res.status(400).json({ method: 'SIGN_IN', status: res.statusCode, message: 'Invalid email. Try signing in again.' });

    try {
        const ngo = await Ngo.findOne({ email });
        if (!ngo)
            return res.status(404).json({ method: 'SIGN_IN', status: res.statusCode, message: `User with the email ${email} not found.` });

        const isMatch = await bcrypt.compare(password, ngo.password);
        if (!isMatch) return res.status(406).json({ method: 'SIGN_IN', status: res.statusCode, message: `Invalid password credentials.` });

        const token = jwt.sign({ id: ngo._id }, process.env.JWT_SECRET, { expiresIn: 3600 });
        if (!token)
            return res.status(500).json({
                method: 'SIGN_IN',
                status: res.statusCode,
                message: `Couldn't sign the authentication token. Try signing in again.`,
            });

        res.status(200).json({
            token,
            ngo: {
                id: ngo._id,
                name: ngo.name,
                email: ngo.email,
            },
        });
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const register = async (req, res) => {
    const { name, email, password, contact, about, address } = req.body;

    if (!name || !email || !password || !contact || !about || !address) {
        return res.status(400).json({ method: 'SIGN_UP', status: res.statusCode, message: 'Required fields are empty. Enter all fields.' });
    }

    if (!/^[^s@]+@[^s@]+$/.test(email))
        return res.status(400).json({ method: 'SIGN_UP', status: res.statusCode, message: 'Invalid email. Try signing up again.' });

    try {
        const ngo = await Ngo.findOne({ email });
        if (ngo)
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

        const newNgo = new Ngo({
            name,
            email,
            password: hash,
            contact,
            about,
            address,
        });

        const savedNgo = await newNgo.save();
        if (!savedNgo)
            return res
                .status(500)
                .json({ method: 'SIGN_UP', status: res.statusCode, message: `Error registering user. Try registering again.` });

        res.status(201).json({
            method: 'SIGN_UP',
            status: res.statusCode,
            message: `User with email ${savedNgo.email} successfully registered.`,
        });
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const validate = async (req, res) => {
    try {
        const ngo = await Ngo.findById(getNgoID(req.header('x-auth-token'))).select('-password');
        res.status(200).json(ngo);
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const adoptions = async (req, res) => {
    try {
        const adoptions = await Facility.find({ ngoID: getNgoID(req.header('x-auth-token')) });
        res.status(200).json(adoptions);
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};
