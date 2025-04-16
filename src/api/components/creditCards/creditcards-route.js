const express = require('express');

const creditController = require('./creditcards.controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/creditCards', route);
  route.get('/', creditController.getCreditCards);
};
