const Meeting = require("../models/Meeting");


exports.createMeeting= async (req, res) => {

    try {
        let meeting;

        // meeting creation
        meeting = new Meeting(req.body);

        await meeting.save();
        res.send(meeting);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getMeetings = async (req, res) => {

    try {

        const meetings = await Meeting.find();
        res.json(meetings)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }

}

// exports.updateMentor = async (req, res) => {

//     try {
//         const { name, last_name,dni, email, created_date ,mentorizeds, tier, hv } = req.body;
//         let mentor = await Mentor.findById(req.params.id);

//         if(!mentor) {
//             res.status(404).json({ msg: 'Mentor does not exist' })
//         }
//         mentor.name = name;
//         mentor.last_name = last_name;
//         mentor.dni = dni;
//         mentor.email = email;
//         mentor.created_date = created_date;
//         mentor.mentorizeds = mentorizeds;
//         mentor.tier = tier;
//         mentor.hv = hv;
//         mentor = await Mentor.findOneAndUpdate({ _id: req.params.id },mentor, { new: true} )
//         res.json(mentor);
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Error');
//     }
// }


exports.getMeeting = async (req, res) => {

    try {
        let meeting = await Meeting.findById(req.params.id);

        if(!meeting) {
            res.status(404).json({ msg: 'Meeting does not exist' })
        }
       
        res.json(meeting);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteMeeting = async (req, res) => {

    try {
        let meeting = await Meeting.findById(req.params.id);

        if(!meeting) {
            res.status(404).json({ msg: 'meeting does not exist' })
        }
       
        await Meeting.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Meeting successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}