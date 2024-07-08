const express = require('express');
const router = express.Router();
const classController = require('../controllers/class.controller');

router.post('/create',classController.createClass)
router.get('/listclass',classController.listClass)


module.exports = router;
