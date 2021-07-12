import FundRaise from "../models/FundRaise.js";
import Ngo from "../models/Ngo.js";
import jwt from 'jsonwebtoken';


export const postFundRaise = (req, res) => {
    
    try{
        console.log(req.body);

        const postFundRaise = new FundRaise({
            title: req.body.title,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            reason: req.body.reason,
            raised: 0,
            file: req.body.file,
            amount: req.body.amount,
            ngoname: req.body.ngoname,
            ngocontact: req.body.ngocontact,
            ngoemail: req.body.ngoemail,
            ngoid: req.body.ngoid
        });

    postFundRaise.save()

    res.status(201).json(postFundRaise)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}


export const fetchData = (req, res) => {
    FundRaise.find({}, (err, result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.status(201).json(result);
        }
    })
}
