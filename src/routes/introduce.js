const express = require('express');
const router = express.Router();

const IntroduceController = require('../app/controllers/IntroduceController');

router.get('/', IntroduceController.index);

module.exports = router;
