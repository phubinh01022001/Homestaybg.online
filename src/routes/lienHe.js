const express = require('express');
const router = express.Router();

const LienHeController = require('../app/controllers/LienHeController');

router.get('/', LienHeController.index);

module.exports = router;
