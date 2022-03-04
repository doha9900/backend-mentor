// mentor routes
const express = require('express');
const router = express.Router();
const meetingController = require('../controllers/meetingController');

// api/v1/mentors
router.post('/', meetingController.createMeeting);
router.get('/', meetingController.getMeetings);
// router.put('/:id', meetingController.updateMentor);
router.get('/:id', meetingController.getMeeting);
router.delete('/:id', meetingController.deleteMeeting);
module.exports = router;
