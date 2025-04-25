const express = require('express');
const addressController = require('./address-controller');
const addressSeeder = require('./address-seeder');

const route = express.Router();

module.exports = (app) => {
  app.use('/addresses', route);

  // Get list of addresses
  route.get('/', addressController.getAddresses);

  // temp
  route.post('/seed', addressSeeder.seedInitialData);
};
