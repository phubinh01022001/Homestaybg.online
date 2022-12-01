const express = require('express');
const router = express.Router();

// xoa
const session = require('express-session');
const config = require("../config/db");
router.use(session({secret:config.sessionSecret}))
//
const auth = require('../middleware/adminAuth');

const AccountController = require('../app/controllers/AccountController');

router.get('/resgister', AccountController.resgister);
router.post('/register_success', AccountController.register_success);
router.post('/login_success', AccountController.login_success);

router.get('/profile', auth.isLogin, AccountController.profile);
router.get('/home_user', auth.isLogin, AccountController.home_user);
router.get('/home', auth.isLogin, AccountController.home);
router.get('/forgot', AccountController.forgot);

router.get('/login_admin', auth.isLogout ,AccountController.login_admin);
router.post('/login_admin_success', AccountController.login_admin_success);
router.get('/logout', auth.isLogin, AccountController.logout);

router.get('/news_user', auth.isLogin, AccountController.news_user);
router.get('/introduce_user', auth.isLogin, AccountController.introduce_user);
router.get('/cauHoi_user', auth.isLogin, AccountController.cauHoi_user);

router.post('/', AccountController.login);
router.get('*',auth.isLogout, AccountController.login);

module.exports = router;
