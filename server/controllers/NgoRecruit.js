import NgoRecruit from "../models/NgoRecruit.js";

export const postNgoRecruit = (req, res) => {
    
    try{
        const postNgoRecruit = new NgoRecruit({
            description:req.body.description,
            responsibilty:req.body.responsibilty,
            qualification:req.body.qualification,
            skill:req.body.skill,
            duration:req.body.duration
        });

        postNgoRecruit.save();

        res.status(201).json(postNgoRecruit);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
