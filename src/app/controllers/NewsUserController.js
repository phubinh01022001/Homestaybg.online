const res = require('express/lib/response');
const Home = require('../models/Home');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class NewsUserController {
  // [GET] /
  index(req, res, next) { 
    Home.find({})
      .then((homes) => {
        res.render('news_user', {
          homes: mutipleMongooseToObject(homes),
          layout: false
        });
      })
      .catch(next);
  }
  vinhomes(req, res) {
    res.render('news/vinhomes_user', {layout: false});
  }
  newHot(req, res) {
    res.render('news/newHot_user', {layout: false});
  }
  phucAn(req, res) {
    res.render('news/phucAn_user', {layout: false});
  }
}

module.exports = new NewsUserController();
