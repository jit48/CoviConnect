import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Ngo from '../models/Ngo.js';

const getNgoID = (token) => {
    const ngo = jwt.decode(token);
    return ngo.id;
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const ngo = await Ngo.findOne({ email });
        if (!ngo) throw Error('User does not exists');

        const isMatch = await bcrypt.compare(password, ngo.password);
        if (!isMatch) throw Error('Invalid credentials');

        const token = jwt.sign({ id: ngo._id }, process.env.JWT_SECRET, { expiresIn: 3600 });
        if (!token) throw Error("Couldn't sign the token");

        res.status(200).json({
            token,
            ngo: {
                id: ngo._id,
                name: ngo.name,
                email: ngo.email,
            },
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const register = async (req, res) => {
    const { name, email, password, contact, about, address } = req.body;

    if (!name || !email || !password || !contact || !about || !address) {
        return res.status(400).json({ msg: 'PLese enter all fields' });
    }

    try {
        const ngo = await Ngo.findOne({ email });
        if (ngo) throw Error('User already exists');

        const salt = await bcrypt.genSalt(10);
        if (!salt) throw Error('Something went wrong with bcrypt');

        const hash = await bcrypt.hash(password, salt);
        if (!hash) throw Error('Something went wrong hashing password');

        const newNgo = new Ngo({
            name,
            email,
            password: hash,
            contact,
            about,
            address,
        });

        const savedNgo = await newNgo.save();
        if (!savedNgo) throw Error('Somethingwent wrong saving the user');

        const token = jwt.sign({ id: savedNgo._id }, process.env.JWT_SECRET, { expiresIn: 3600 });

        res.status(200).json({
            token,
            ngo: {
                id: savedNgo._id,
                name: savedNgo.name,
                email: savedNgo.email,
            },
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const validate = async (req, res) => {
    try {
        const ngo = await Ngo.findById(getNgoID(req.header('x-auth-token'))).select('-password');
        if (!ngo) throw Error('Ngo does not exists');
        res.json(ngo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const adoptions = async (req, res) => {
    try {
        const adoptions = await Facility.find({ ngoID: getNgoID(req.header('x-auth-token')) });
        res.status(200).json(adoptions);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
