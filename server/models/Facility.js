import mongoose from "mongoose";

const FacilitySchema = mongoose.Schema({
    volunteerID: Number,
    volunteerName: String,
    type: String,
    votes: Number,
    info: Object
})

var Facility = mongoose.model('Facility', FacilitySchema);

export default Facility;