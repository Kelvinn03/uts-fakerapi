const express = require('express');
const funfactController = require('./funfact-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/funFacts', route);
  route.get('/', funfactController.getFunFacts);
};
