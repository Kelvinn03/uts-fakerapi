const express = require('express');
const creditCardController = require('./creditcards-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/creditCards', route);
  route.get('/', creditCardController.getCreditCards);
};
