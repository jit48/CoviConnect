import mongoose from "mongoose"
const Schema = mongoose.Schema;

const ExperienceSchema = new Schema({
    name : String,
    city: String,
    experience: String,
})

export default mongoose.model('user', ExperienceSchema);
