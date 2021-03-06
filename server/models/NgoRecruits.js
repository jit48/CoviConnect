import mongoose from 'mongoose';

const RecruitmentSchema = mongoose.Schema({
    id: String,
    description: String,
    responsibility: String,
    qualification: String,
    skill: String,
    duration: String,
    organisation: String,
    applications: [
        {
            name: String,
            gender: String,
            contact: String,
            email: String,
            occupation: String,
            address: String,
            reason: String,
        },
    ],
});

export default mongoose.model('NgoRecruit', RecruitmentSchema);
