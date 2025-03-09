const express = require('express');

const { getAppointments, getAppointment, addAppointment } = require('../controllers/appointments');

const router = express.Router({ mergeParams: true });

const { protect } = require('../middleware/auth');

router.route('/').get(protect, getAppointments).post(protect, addAppointment)
router.route('/:id').get(getAppointment);
// router.route('/').get(protect, getAppointments);
// router.route('/:id').get(protect, getAppointment);

module.exports = router;
