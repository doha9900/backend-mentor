const Mentorized = require("../models/Mentorized");


exports.getMentorizeds = async (req, res) => {

    try {

        const mentorizeds = await Mentorized.find();
        res.json(mentorizeds)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }

}
exports.getMentorized = async (req, res) => {

    try {
        let mentorized = await Mentorized.findById(req.params._id);

        if(!mentorized) {
            res.status(404).json({ msg: 'Zip does not exist' })
        }
       
        res.json(mentorized);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}
exports.createMentorized= async (req, res) => {

    try {
        let mentorized;

        // mentorized creation
        mentorized = new Mentorized(req.body);

        await mentorized.save();
        res.send(mentorized);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.updateMentorized = async (req, res) => {

    try {
        const { name, last_name,dni, email, created_date } = req.body;
        let mentorized = await Mentorized.findById(req.params.id);

        if(!mentorized) {
            res.status(404).json({ msg: 'Mentorized does not exist' })
        }

        mentorized.name = name;
        mentorized.last_name = last_name;
        mentorized.dni = dni;
        mentorized.email = email;
        mentorized.created_date = created_date;

        mentorized = await Mentorized.findOneAndUpdate({ _id: req.params.id },mentorized, { new: true} )
        res.json(mentorized);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}


exports.deleteMentorized = async (req, res) => {

    try {
        let mentorized = await Mentorized.findById(req.params.id);

        if(!mentorized) {
            res.status(404).json({ msg: 'mentorized does not exist' })
        }
       
        await Mentorized.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Mentorized successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}