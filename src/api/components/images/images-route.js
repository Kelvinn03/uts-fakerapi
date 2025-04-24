const express = require('express');
const imagesController = require('./images-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/images', route);
  route.get('/', imagesController.getImages);
};
