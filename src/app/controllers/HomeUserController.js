const res = require('express/lib/response');
const Home = require('../models/Home');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class HomeUserController {
  search_user(req, res, next){
    var name = req.body.name;
    var add = req.body.add;
    var price = req.body.price;
    var area = req.body.area;

    Home.find({add: add} || {name : name })
      .then(home =>{
        res.render('home/search_user', { 
          home: mutipleMongooseToObject(home), 
          layout: false
        })
      })
      .catch(next);
  }
  showFull_user(req, res, next) { 
    Home.find({})
      .then((home) =>
        res.render('home/showFull_user', { 
          home: mutipleMongooseToObject(home), 
          layout: false
        }),
      )
      .catch(next);
  }
  showChungCu_user(req, res, next) { 
    Home.find({ type: 'Chung cư' })
      .then((home) =>
        res.render('home/showChungCu_user', { 
          home: mutipleMongooseToObject(home), 
          layout: false
        }),
      )
      .catch(next);
  }
  showNhaRieng_user(req, res, next) { 
    Home.find({ type: 'Nhà riêng' })
      .then((home) =>
        res.render('home/showNhaRieng_user', { 
          home: mutipleMongooseToObject(home), 
          layout: false
        }),
      )
      .catch(next);
  }
  showBietThu_user(req, res, next) { 
    Home.find({ type: 'Biệt thự' })
      .then((home) =>
        res.render('home/showBietThu_user', { 
          home: mutipleMongooseToObject(home), 
          layout: false
        }),
      )
      .catch(next);
  }
  show_user(req, res, next) {
    Home.findOne({ slug: req.params.slug })
      .then((home) =>
        res.render('home/show_user', { 
          home: mongooseToObject(home),
          layout: false
        }),
      )
      .catch(next);
  }

}
module.exports = new HomeUserController();
