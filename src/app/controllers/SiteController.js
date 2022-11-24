const res = require('express/lib/response');
const Home = require('../models/Home');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  // [GET] /
  index(req, res, next) {
    Home.find({})
      .then((homes) => {
        res.render('home', {
          homes: mutipleMongooseToObject(homes),
        });
      })
      .catch(next);
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
