const express = require('express');
const asciiArtController = require('./ascii-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/asciiArt', route);
  route.get('/', asciiArtController.getAsciiArt);
  route.delete('/:id', asciiArtController.deleteAsciiArt);
};
