const express = require('express');
const peopleController = require('./people-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/people', route);

  route.get('/', peopleController.getPeople);
};
