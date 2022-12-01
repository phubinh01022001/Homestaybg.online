// const res = require('express/lib/response');
// const req = require('express/lib/response');
const express = require('express');
const User = require('../models/User');
const { mongooseToObject } = require('../../util/mongoose');
const { rawListeners } = require('../models/User');
const { status } = require('express/lib/response');

class AccountController {
  async logout(req, res, next) { 
    try {
      req.session.destroy();
      res.redirect('/');

    } catch (error) {
      console.log(error.message)
    }
  }
  async login_admin_success(req, res, next) { 
    const username = req.body.username;
    const passwork = req.body.passwork;

    User.findOne({ username: username, passwork: passwork})
      .then(user => {
        if(user.is_admin == 1 ){
          req.session.user_id = user._id;
          res.render('account/profile', {
            user: mongooseToObject(user)
          })
        }else{
          // res.redirect('back');
          res.render('account/login_admin', {layout: false});
        }
      })
      .catch(err => {
        // res.redirect('back');
        res.render('account/login_admin', {
          message:"Username or password is incorrect!",
          layout: false
        });
      });
  }

  async login_success(req, res, next) { 
    var username = req.body.username;
    var passwork = req.body.passwork;

    User.findOne({ username: username, passwork: passwork})
      .then(user => {
        if(user){
          req.session.user_id = user._id;
          res.render('home_user', {
            user: mongooseToObject(user),
            layout: false
          })
        }else{
          res.redirect('back');
        }
      })
      .catch(err => {
        res.redirect('back');
      });
  }
  async register_success(req, res, next) { 
    const user = new User(req.body);
    user
      .save()
      .then(() => res.redirect('/') )
      .catch((error) => {});
  }

  login_admin(req, res, next) { 
    res.render('account/login_admin', {layout: false});
  }

  resgister(req, res, next) { 
    res.render('account/resgister');
  }

  login(req, res, next) { 
    res.render('account/login', {layout: false});
  }

  profile(req, res, next) { 
    res.render('account/profile');
  }

  home(req, res, next) { 
    res.render('home');
  }

  home_user(req, res, next) { 
    res.render('home_user', {layout: false});
  }

  forgot(req, res, next) { 
    res.render('account/forgot', {layout: false});
  }

  news_user(req, res, next) { 
    res.render('news_user', {layout: false});
  }

  introduce_user(req, res, next) { 
    res.render('introduce_user', {layout: false});
  }

  cauHoi_user(req, res, next) { 
    res.render('cauHoi_user',{layout: false });
  }
}

module.exports = new AccountController();
