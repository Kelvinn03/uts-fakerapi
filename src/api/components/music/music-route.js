const express = require('express');
const musicController = require('./music-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/music', route);

  route.get('/', musicController.getMusic);
};
