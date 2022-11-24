const newRouter = require('./news');

const accountRouter = require('./account');
const bpVhdRouter = require('./bpVhd');
const cauHoiRouter = require('./cauHoi');
const lienHeRouter = require('./lienHe');
const introduceRouter = require('./introduce');
const homesRouter = require('./homes');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
  app.use('/news', newRouter);

  app.use('/account', accountRouter);
  app.use('/bpVhd', bpVhdRouter);
  app.use('/cauHoi', cauHoiRouter);
  app.use('/lienHe', lienHeRouter);
  app.use('/introduce', introduceRouter);
  app.use('/homes', homesRouter);
  app.use('/me', meRouter);
  app.use('/', siteRouter);
}

module.exports = route;
