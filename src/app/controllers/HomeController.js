const res = require('express/lib/response');
const Home = require('../models/Home');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class HomeController {
  // [GET] /homes/create
  create(req, res, next) {
    res.render('home/create');
  }

  search(req, res, next) {
    Home.findOne({ name: req.params.txtName })
      .then((home) =>
        res.render('home/search', { 
          home: mongooseToObject(home), 
        }),
      )
      .catch(next);
  }

  // [POST] /homes/store
  store(req, res, next) {
    // req.body.image = `https://cdn.houseviet.vn/images/post/${req.body.dateID}/${req.body.imageID}-840x535.jpg`;
    
    const homes = new Home(req.body);
    homes
      .save()
      .then(() => res.redirect('/me/stored/homes'))
      .catch((error) => {});
  }

  // [GET] /homes/showNam
  showChungCu(req, res, next) { 
    Home.find({ type: 'Chung cư' })
      .then((home) =>
        res.render('home/showChungCu', { 
          home: mutipleMongooseToObject(home), 
        }),
      )
      .catch(next);
  }

  // [GET] /homes/showNam
  showNhaRieng(req, res, next) { 
    Home.find({ type: 'Nhà riêng' })
      .then((home) =>
        res.render('home/showNhaRieng', { 
          home: mutipleMongooseToObject(home), 
        }),
      )
      .catch(next);
  }

  // [GET] /homes/showTreEm
  showBietThu(req, res, next) { 
    Home.find({ type: 'Biệt thự' })
      .then((home) =>
        res.render('home/showBietThu', { 
          home: mutipleMongooseToObject(home), 
        }),
      )
      .catch(next);
  }

  // [GET] /homes/:slug
  show(req, res, next) {
    Home.findOne({ slug: req.params.slug })
      .then((home) =>
        res.render('home/show', { 
          home: mongooseToObject(home),
        }),
      )
      .catch(next);
  }

  // [GET] /homes/:id/edit
  edit(req, res, next) {
    Home.findById(req.params.id)
      .then((home) =>
        res.render('home/edit', {
          home: mongooseToObject(home),
        }),
      )
      .catch(next);
  }

  // [PUT] /homes/:id/
  update(req, res, next) {
    Home.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/homes'))
      .catch(next);
  }

  // [DELETE] /homes/:id/
  delete(req, res, next) {
    Home.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [DELETE] /homes/:id/force
  force(req, res, next) {
    Home.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [PATCH] /homes/:id/restore
  restore(req, res, next) {
    Home.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}
module.exports = new HomeController();