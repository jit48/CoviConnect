import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const FacilitySchema = new Schema({
    volunteerID: {
        type: String,
        required: true,
    },
    volunteerName: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    votes: {
        type: Number,
        required: true,
    },
    info: {
        type: Object,
        required: true,
    },
});

export default mongoose.model('facilities', FacilitySchema);
