const res = require('express/lib/response');
const Home = require('../models/Home');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CSBaoHanhController {
  // [GET] /
  index(req, res, next) { 
    Home.find({})
      .then((homes) => {
        res.render('csBaoHanh', {
          homes: mutipleMongooseToObject(homes),
        });
      })
      .catch(next);
  }
}

module.exports = new CSBaoHanhController();
