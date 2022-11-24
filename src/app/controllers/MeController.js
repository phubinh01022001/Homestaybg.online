const res = require('express/lib/response');
const Home = require('../models/Home');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {

  storedHomes(req, res, next) {
    Promise.all([Home.find({}), Home.countDocumentsDeleted()])
      .then(([homes, deletedCount]) =>
        res.render('me/stored-homes', {
          deletedCount,
          homes: mutipleMongooseToObject(homes),
        }),
      )
      .catch(next);
  }

  trashHomes(req, res, next) {
    Home.findDeleted({})
      .then((homes) =>
        res.render('me/trash-homes', {
          homes: mutipleMongooseToObject(homes),
        }),
      )
      .catch(next);
  }
}
module.exports = new MeController();
