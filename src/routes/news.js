const express = require('express');
const router = express.Router();

const NewsController = require('../app/controllers/NewsController');

router.get('/', NewsController.index);
router.get('/vinhomes', NewsController.vinhomes);
router.get('/newHot', NewsController.newHot);
router.get('/phucAn', NewsController.phucAn);


module.exports = router;
