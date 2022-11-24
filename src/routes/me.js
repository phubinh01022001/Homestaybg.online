const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/homes', meController.storedHomes);
router.get('/trash/homes', meController.trashHomes);

module.exports = router;
