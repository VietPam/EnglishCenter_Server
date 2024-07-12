const express = require('express');
const router = express.Router();
const ScheduleController = require('../controllers/schedule.controller')


router.get('/getschedules',ScheduleController.getSchedules)
module.exports = router;