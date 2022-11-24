const res = require('express/lib/response');
const Home = require('../models/Home');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class IntroduceController {
  // [GET] /
  index(req, res, next) { 
    Home.find({})
      .then((homes) => {
        res.render('introduce', {
          homes: mutipleMongooseToObject(homes),
        });
      })
      .catch(next);
  }
}

module.exports = new IntroduceController();
