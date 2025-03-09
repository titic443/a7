const express = require('express');
const { getHospitals, createHospital, getHospital, updateHospital, deleteHospital } = require('../controllers/hospital');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const appointmentRouter = require('./appointments');

router.use('/:hospitalId/appointments', appointmentRouter)
router.route('/')
    .get(getHospitals)
    .post(protect, authorize('admin'), createHospital)

router.route('/:id')
    .get(getHospital)
    .put(protect, authorize('admin'), updateHospital)
    .delete(protect, authorize('admin'), deleteHospital)
// router.get('/', (req, res) => {
//     res.status(200).json({success: true, data:'Show all hospotals'})
// })

// router.get('/:id', (req, res) => {
//     res.status(200).json({success: true, data:`Show hospotals ${req.params.id}`})
// })

// router.post('/', (req, res) => {
//     res.status(200).json({success: true, data:`Create new hospitals`})
// })

// router.put('/:id', (req, res) => {
//     res.status(200).json({success: true, data:`Upate hospitals ${req.params.id}`})
// })

// router.delete('/:id', (req, res) => {
//     res.status(200).json({success: true, data:`Delete hospitals ${req.params.id}`})
// })

module.exports = router