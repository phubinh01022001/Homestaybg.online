const res = require('express/lib/response');
const Home = require('../models/Home');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class NewsController {
  // [GET] /
  index(req, res, next) { 
    Home.find({})
      .then((homes) => {
        res.render('news', {
          homes: mutipleMongooseToObject(homes),
        });
      })
      .catch(next);
  }
  vinhomes(req, res) {
    res.render('news/vinhomes');
  }
  newHot(req, res) {
    res.render('news/newHot');
  }
  phucAn(req, res) {
    res.render('news/phucAn');
  }
}

module.exports = new NewsController();
