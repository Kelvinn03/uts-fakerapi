const express = require('express');

const textsController = require('./texts-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/texts', route);

  route.get('/', textsController.getTexts);

  route.post('/seed', textsController.seedTexts);
};
