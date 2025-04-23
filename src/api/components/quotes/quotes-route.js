const express = require('express');
const quotesController = require('./quotes-controller');

const route = express.Router();

module.exports = (app) => {
  app.use('/quotes', route);

  // Get list of quotes
  route.get('/', quotesController.getQuotes);

  // Create a new quote
  route.post('/', quotesController.createQuote);

  // TODO: Get a quote by id
  // TODO: Update a quote by id
  // TODO: Delete a quote by id
};
