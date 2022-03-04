const mongoose = require('mongoose');

const MentorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    dni: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    mentorizeds: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    tier: {
        type: Number,
        default: 1
    },
    hv: {
        type: {
            education:String,
            profile:String,
            experience:Number
        }
    },
    id_mentor: {
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Mentor', MentorSchema);