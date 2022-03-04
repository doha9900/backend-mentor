
// zip routes
const express = require('express');
const router = express.Router();
const mentorizedController = require('../controllers/mentorizedController');

// api/mentorizeds
router.get('/', mentorizedController.getMentorizeds);
router.get('/:_id', mentorizedController.getMentorized);
router.post('/', mentorizedController.createMentorized);
router.put('/:id', mentorizedController.updateMentorized);
router.delete('/:id', mentorizedController.deleteMentorized);
module.exports = router;
