const Mentor = require("../models/Mentor");


exports.createMentor= async (req, res) => {

    try {
        let mentor;

        // mentor creation
        mentor = new Mentor(req.body);

        await mentor.save();
        res.send(mentor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.getMentors = async (req, res) => {

    try {

        const mentors = await Mentor.find();
        res.json(mentors)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }

}

exports.updateMentor = async (req, res) => {

    try {
        const { name, last_name,dni, email, created_date ,mentorizeds, tier, hv } = req.body;
        let mentor = await Mentor.findById(req.params.id);

        if(!mentor) {
            res.status(404).json({ msg: 'Mentor does not exist' })
        }
        mentor.name = name;
        mentor.last_name = last_name;
        mentor.dni = dni;
        mentor.email = email;
        mentor.created_date = created_date;
        mentor.mentorizeds = mentorizeds;
        mentor.tier = tier;
        mentor.hv = hv;
        mentor = await Mentor.findOneAndUpdate({ _id: req.params.id },mentor, { new: true} )
        res.json(mentor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}


exports.getMentor = async (req, res) => {

    try {
        let mentor = await Mentor.findById(req.params.id);

        if(!mentor) {
            res.status(404).json({ msg: 'Mentor does not exist' })
        }
       
        res.json(mentor);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}

exports.deleteMentor = async (req, res) => {

    try {
        let mentor = await Mentor.findById(req.params.id);

        if(!mentor) {
            res.status(404).json({ msg: 'mentor does not exist' })
        }
       
        await Mentor.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Mentor successfully removed' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error');
    }
}