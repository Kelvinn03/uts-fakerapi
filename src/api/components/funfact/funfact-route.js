const express = require('express');
const funfactController = require('./funfact-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/funfact', route);
  route.get('/', funfactController.getFunFact);
  route.delete('/:id', funfactController.deleteFunfact);
  route.post('/reset', funfactController.resetFunfacts);

};
