const res = require('express/lib/response');
const Home = require('../models/Home');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class LienHeController {
  // [GET] /
  index(req, res, next) { 
    Home.find({})
      .then((homes) => {
        res.render('lienHe', {
          homes: mutipleMongooseToObject(homes),
        });
      })
      .catch(next);
  }
}

module.exports = new LienHeController();
