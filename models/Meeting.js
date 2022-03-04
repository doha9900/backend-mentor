const mongoose = require('mongoose');

const MeetingSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id_mentor: {
        type: mongoose.Schema.Types.ObjectId
    },
    mentorizeds: {
        type: [mongoose.Schema.Types.ObjectId]
    },
    start_date: {
        type: Date,
        default: Date.now()
    },
    finish_date: {
        type: Date,
        default: Date.now()
    }   
});

module.exports = mongoose.model('Meeting', MeetingSchema);