const express = require('express');
const asciiArtController = require('./ascii-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/asciiArts', route);
  route.get('/', asciiArtController.getAsciiArts);
};
