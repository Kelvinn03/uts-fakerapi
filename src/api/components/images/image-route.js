const express = require('express');
const imageController = require('./image-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/images', route);
  route.get('/', imageController.getImages);
  route.post('/seed', imageController.seedImages);
};
