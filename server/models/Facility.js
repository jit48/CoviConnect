import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const FacilitySchema = new Schema({
    volunteerID: String,
    volunteerName: String,
    type: String,
    votes: Number,
    info: Object,
});

export default mongoose.model('facilities', FacilitySchema);
