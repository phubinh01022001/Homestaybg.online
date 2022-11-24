const res = require('express/lib/response');
const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');
const { rawListeners } = require('../models/User');

class AccountController {
  // [GET] /account/resgister
  resgister(req, res, next) { 
    res.render('account/resgister');
  }

  // [POST] /account/store_res
  store_res(req, res, next) { 
    const user = new User(req.body);
    user
      .save()
      .then(() => res.redirect('resgister') )
      .catch((error) => {});
  }
  
  // [GET] /account/login
  login(req, res, next) { 
    res.render('account/login');
  }

  // [POST] /account/login_res
  login_tc(req, res, next) { 
    var username = req.body.username;
    var passwork = req.body.passwork;

    User.findOne({ username: username, passwork: passwork})
      .then(user => {
        if(user){
          // res.render('home', { 
          //   user: mongooseToObject(user)
          // })
          res.render('account/profile', {
            user: mongooseToObject(user)
          })
        }else{
          return res.json('Không tồn tại user này!!')
        }
      })
      .catch(err => {
        res.status(500).json('Lỗi hệ thống!!!');
      });
  }

  profile(req, res, next) { 
    res.render('account/profile');
  }

}

module.exports = new AccountController();
