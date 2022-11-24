const express = require('express');
const router = express.Router();

const BPVHDController = require('../app/controllers/BHVHDController');

router.get('/', BPVHDController.index);

module.exports = router;
