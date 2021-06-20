import mongoose from 'mongoose';

const fundraiseSchema = mongoose.Schema({
    title: String,
    name: String,
    phone: Number,
    email: String,
    reason: String,
    file: String,
    amount: Number
});

var FundRaise = mongoose.model('FundRaise', fundraiseSchema);

export default FundRaise;