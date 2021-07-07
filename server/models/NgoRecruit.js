import mongoose from 'mongoose';

const postRecruitSchema = mongoose.Schema({
    description:String,
    responsibilty:String,
    qualification:String,
    skill:String,
    duration:String
});

var NgoRecruit = mongoose.model('NgoRecruit', postRecruitSchema);

export default NgoRecruit;