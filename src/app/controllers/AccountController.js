const res = require('express/lib/response');
const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');
const { rawListeners } = require('../models/User');

class AccountController {
  // [GET] /account/resgister
  resgister(req, res, next) { 
    res.render('account/resgister', {layout: false});
  }

  // [POST] /account/store_res
  store_res(req, res, next) { 
    const user = new User(req.body);
    user
      .save()
      .then(() => res.redirect('/') )
      .catch((error) => {});
  }
  
  // [GET] /account/login
  login(req, res, next) { 
    res.render('account/login', {layout: false});
  }

  // [POST] /account/login_res
  login_tc(req, res, next) { 
    var username = req.body.username;
    var passwork = req.body.passwork;

    User.findOne({ username: username, passwork: passwork})
      .then(user => {
        if(user){
          res.render('account/profile', {
            user: mongooseToObject(user)
          })
        }else{
          alert("Thông tin đăng nhập sai! Vui lòng nhập lại");
          return res.json('thông tin đăng nhập sai!!');
        }
      })
      .catch(err => {
        res.redirect('back');
      });
  }

  profile(req, res, next) { 
    res.render('account/profile');
  }

  home(req, res, next) { 
    res.render('home');
  }

  forgot(req, res, next) { 
    res.render('account/forgot', {layout: false});
  }

}

module.exports = new AccountController();
