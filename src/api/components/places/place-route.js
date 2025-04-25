const express = require('express');
const placeController = require('./place-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/places', route);
  route.get('/', placeController.getPlaces);
};
