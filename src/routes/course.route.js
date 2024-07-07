const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller')

router.get('/levels', courseController.levels)
router.get('/getlevel', courseController.getLevel)

module.exports = router