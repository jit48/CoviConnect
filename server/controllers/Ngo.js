import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Ngo from '../models/Ngo.js';
import Recruitments from '../models/NgoRecruits.js';
import FundRaise from '../models/FundRaise.js';


const getNgoID = (token) => {
    const ngo = jwt.decode(token);
    if (!ngo) throw Error('Error decoding jwt token.');
    else return ngo.id;
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            method: 'SIGN_IN',
            status: res.statusCode,
            message: 'Required fields are empty. Enter all fields.',
        });
    }

    if (!/^[^s@]+@[^s@]+$/.test(email))
        return res.status(400).json({
            method: 'SIGN_IN',
            status: res.statusCode,
            message: 'Invalid email. Try signing in again.',
        });

    try {
        const ngo = await Ngo.findOne({ email });
        if (!ngo)
            return res.status(404).json({
                method: 'SIGN_IN',
                status: res.statusCode,
                message: `User with the email ${email} not found.`,
            });

        const isMatch = await bcrypt.compare(password, ngo.password);
        if (!isMatch)
            return res.status(406).json({
                method: 'SIGN_IN',
                status: res.statusCode,
                message: `Invalid password credentials.`,
            });

        const token = jwt.sign({ id: ngo._id }, process.env.JWT_SECRET, {
            expiresIn: 3600,
        });
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
        res.status(500).json({
            method: 'SERVER',
            status: res.statusCode,
            message: error.message,
        });
    }
};

export const register = async (req, res) => {
    const { name, email, password, contact, about, address } = req.body;

    if (!name || !email || !password || !contact || !about || !address) {
        return res.status(400).json({
            method: 'SIGN_UP',
            status: res.statusCode,
            message: 'Required fields are empty. Enter all fields.',
        });
    }

    if (!/^[^s@]+@[^s@]+$/.test(email))
        return res.status(400).json({
            method: 'SIGN_UP',
            status: res.statusCode,
            message: 'Invalid email. Try signing up again.',
        });

    try {
        const ngo = await Ngo.findOne({ email });
        if (ngo)
            return res.status(400).json({
                method: 'SIGN_UP',
                status: res.statusCode,
                message: `User with the email ${email} already exists.`,
            });

        const salt = await bcrypt.genSalt(10);
        if (!salt)
            return res.status(500).json({
                method: 'SIGN_UP',
                status: res.statusCode,
                message: `Error generating hashing salt. Try registering again.`,
            });

        const hash = await bcrypt.hash(password, salt);
        if (!hash)
            return res.status(500).json({
                method: 'SIGN_UP',
                status: res.statusCode,
                message: `Error generating hashed password. Try registering again.`,
            });

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
            return res.status(500).json({
                method: 'SIGN_UP',
                status: res.statusCode,
                message: `Error registering user. Try registering again.`,
            });

        res.status(201).json({
            method: 'SIGN_UP',
            status: res.statusCode,
            message: `User with email ${savedNgo.email} successfully registered.`,
        });
    } catch (error) {
        res.status(500).json({
            method: 'SERVER',
            status: res.statusCode,
            message: error.message,
        });
    }
};

export const validate = async (req, res) => {
    try {
        const ngo = await Ngo.findById(getNgoID(req.header('x-auth-token'))).select('-password');
        res.status(200).json(ngo);
    } catch (error) {
        res.status(500).json({
            method: 'SERVER',
            status: res.statusCode,
            message: error.message,
        });
    }
};

export const adoptions = async (req, res) => {
    try {
        const adoptions = await Facility.find({
            ngoID: getNgoID(req.header('x-auth-token')),
        });
        res.status(200).json(adoptions);
    } catch (error) {
        res.status(500).json({
            method: 'SERVER',
            status: res.statusCode,
            message: error.message,
        });
    }
};

export const adoptionFormRequest = async (req, res) => {
    const ngo = await Ngo.findById(getNgoID(req.header('x-auth-token')));
    res.status(200).json(ngo);
};

export const getAllFunds = async (req, res) => {
    const id = req.params.id;
    FundRaise.find({ ngoid: id }, (err, foundFunds) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(foundFunds);
        }
    });
};

export const postRecruitments = async (req, res) => {
    try {
        const recruitment = new Recruitments({
            id: req.body.id,
            organisation: req.body.organisation,
            description: req.body.description,
            responsibility: req.body.responsibility,
            qualification: req.body.qualification,
            skill: req.body.skill,
            duration: req.body.duration,
        });
        recruitment.save();
        res.status(201).json(recruitment);
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const getRecruitments = async (req, res) => {
    try {
        const recruitments = await Recruitments.find({});
        res.status(200).json(recruitments);
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const postApplication = async (req, res) => {
    try {
        const { recruitmentId, ...rest } = req.body;
        const application = rest;
        await Recruitments.findByIdAndUpdate(recruitmentId, { $push: { applications: application } }, { new: true });
        res.status(200).json({ method: 'APPLICATION', status: res.statusCode, message: 'Succesfully applied.' });
    } catch (error) {
        res.status(500).json({ method: 'SERVER', status: res.statusCode, message: error.message });
    }
};

export const getApplication = async (req, res) => {
    try {
    } catch (error) {}
};

export const deleteFund = async (req, res) => {
    const id = req.params.id;
    FundRaise.findByIdAndDelete(id, (err, remainingFunds) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(remainingFunds);
        }
    });
};

export const delAdoption = async (req, res) => {
    try {
        Ngo.findByIdAndUpdate(
            req.params.ngoId,
            { $pull: { adoptionForm: { id: +req.params.id } } },

            (err, adoption) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json(adoption.adoptionForm);
                    console.log(adoption.adoptionForm[0]);
                }
            }
        );
    } catch (err) {
        console.log(err);
    }
};

export const getAllRecruitments = async (req,res) =>{
    const ngoId= req.params.id
    Recruitments.find({id:ngoId},(err,foundRecruits)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).json(foundRecruits)
        }
    })

}

export const recruitDelete = async (req, res) => {
    const id = req.params.id
    const recruitId = req.params.recruitId
    Recruitments.findByIdAndUpdate(
        recruitId,
        { $pull: { applications: { _id: id } } },

        (err, recruitment) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(recruitment.applications);
            }
        }
    );
}

export const recruitHire = async (req, res) => {
    const id = req.params.id
    const recruitId = req.params.recruitId
    const ngoId = getNgoID(req.header('x-auth-token'))
    const volunteer = req.body

    await Ngo.findByIdAndUpdate(
        ngoId,
        {$push : {members: volunteer}},
        {new: true}
    )

    Recruitments.findByIdAndUpdate(
        recruitId,
        { $pull: { applications: { _id: id } } },

        (err, recruitment) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(recruitment.applications);
            }
        }
    );
}

export const deleteRecruitDrive = (req,res) => {
    const id = req.params.id;
    Recruitments.findByIdAndDelete(id, (err, recruitments) => {
        if (err) {
            console.log(err);
        } else {
            console.log(recruitments);
        }
    });
}

export const getAllMembers = (req, res) => {
    const id = req.params.id;
    Ngo.find({_id:id},(err,ngo)=>{
        if(err){
            console.log(err)
        }else{
            res.status(200).json(ngo)
            // console.log(ngo[0]);
        }
    })
} 