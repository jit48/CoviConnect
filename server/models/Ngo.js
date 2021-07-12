import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const NgoSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    adoptionForm: {
        type: Array,
    },
    isAdoption: {
        type: Boolean,
        required: true,
    },
    members: {
        type: Array
    },
    file: {
        type: String,
        required: true,
    }
});

export default mongoose.model('ngo', NgoSchema);
