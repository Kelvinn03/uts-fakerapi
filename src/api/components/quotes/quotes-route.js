const express = require('express');

const quotesController = require('./quotes-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/quotes', route);

  route.get('/', quotesController.getQuotes);

  route.post('/', quotesController.createQuote);

  route.post('/seed', quotesController.seedQuotes);
};
