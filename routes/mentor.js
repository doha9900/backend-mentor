// mentor routes
const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');

// api/v1/mentors
router.post('/', mentorController.createMentor);
router.get('/', mentorController.getMentors);
router.put('/:id', mentorController.updateMentor);
router.get('/:id', mentorController.getMentor);
router.delete('/:id', mentorController.deleteMentor);
module.exports = router;
