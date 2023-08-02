const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {

  // Render news
  app.use('/news', newsRouter);
  app.use('/', siteRouter);
}

module.exports = route;