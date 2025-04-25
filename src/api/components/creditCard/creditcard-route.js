const express = require('express');
const creditCardController = require('./creditcard-controller');
const creditSeeder = require('./creditcard-seeder');

const route = express.Router();

module.exports = (app) => {
  app.use('/creditCards', route);
  route.get('/', creditCardController.getCreditCards);
  route.post('/seed', creditSeeder.seedInitialData);
};
