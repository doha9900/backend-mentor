const mongoose = require('mongoose');

const MentorizedSchema = mongoose.Schema({
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
    profiles: {
        type: [String],
        required: true,
        default: []
    },
    competencies: {
        type: [String],
        required: true,
        default: []
    },
    email: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        default: Date.now()
    },
    id_mentor: {
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = mongoose.model('Mentorized', MentorizedSchema);