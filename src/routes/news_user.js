const express = require('express');
const router = express.Router();

const NewsUserController = require('../app/controllers/NewsUserController');

router.get('/', NewsUserController.index);
router.get('/vinhomes', NewsUserController.vinhomes);
router.get('/newHot', NewsUserController.newHot);
router.get('/phucAn', NewsUserController.phucAn);


module.exports = router;
