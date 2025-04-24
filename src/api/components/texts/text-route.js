const express = require('express');
const textController = require('./text-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/texts', route);
  route.get('/', textController.getTexts);
};
