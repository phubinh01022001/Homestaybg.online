const express = require('express');
const router = express.Router();

const CauHoiController = require('../app/controllers/CauHoiController');

router.get('/', CauHoiController.index);

module.exports = router;
