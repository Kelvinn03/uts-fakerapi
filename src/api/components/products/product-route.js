const express = require('express');
const productController = require('./product-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/products', route);
  route.get('/', productController.getProducts);
};
