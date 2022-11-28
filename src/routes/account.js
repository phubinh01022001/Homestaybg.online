const express = require('express');
const router = express.Router();

const AccountController = require('../app/controllers/AccountController');

router.get('/resgister', AccountController.resgister);
router.post('/store_res', AccountController.store_res);
router.post('/login_tc', AccountController.login_tc);
router.get('/profile', AccountController.profile);
router.get('/home', AccountController.home);
router.get('/forgot', AccountController.forgot);
router.post('/', AccountController.login);
router.get('/', AccountController.login);

module.exports = router;
