const express = require('express');
const router = express.Router();

const AccountController = require('../app/controllers/AccountController');

router.get('/resgister', AccountController.resgister);
router.post('/store_res', AccountController.store_res);
router.get('/login', AccountController.login);
router.post('/login', AccountController.login);
router.post('/login_tc', AccountController.login_tc);
router.get('/profile', AccountController.profile);

module.exports = router;
