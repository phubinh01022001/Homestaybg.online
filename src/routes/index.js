const newRouter = require('./news');
const newUserRouter = require('./news_user');
const accountRouter = require('./account');
const bpVhdRouter = require('./bpVhd');
const cauHoiRouter = require('./cauHoi');
const lienHeRouter = require('./lienHe');
const introduceRouter = require('./introduce');
const homesRouter = require('./homes');
const homesUserRouter = require('./homesUser');
// const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {

  app.use('/news', newRouter);
  app.use('/news_user', newUserRouter);
  app.use('/bpVhd', bpVhdRouter);
  app.use('/cauHoi', cauHoiRouter);
  app.use('/lienHe', lienHeRouter);
  app.use('/introduce', introduceRouter);
  app.use('/homes', homesRouter);
  app.use('/homesUser', homesUserRouter);
  app.use('/me', meRouter);
  // app.use('/', siteRouter);
  app.use('/', accountRouter);
  app.use('*', accountRouter);
  
}

module.exports = route;
