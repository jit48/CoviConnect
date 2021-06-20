import express from 'express';
import mongoose from 'mongoose';
import Facility from '../models/Facility.js';

const router = express.Router();

export const getFacility = async (req,res) => {
    try{
        const type = req.params.type;
        Facility.find({type: type},(err,foundFacilities)=>{
            if(err){
                console.log(err);
            }else{
                res.status(200).json(foundFacilities);
            }
        })
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const updateVotes = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await Facility.findById(id);

    const updatedPost = await Facility.findByIdAndUpdate(id, { votes: post.votes + 1 }, { new: true });
    
    res.json(updatedPost);
}

export const downVotes = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await Facility.findById(id);

    const updatedPost = await Facility.findByIdAndUpdate(id, { votes: post.votes - 1 }, { new: true });
    
    res.json(updatedPost);
}