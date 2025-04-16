const express = require('express');
const addressController = require('./address-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/addresses', route);

  // Get list of addresses
  route.get('/', addressController.getAddresses);
};
