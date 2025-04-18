const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const creditcards = require('./components/creditCards/creditcards-route');
const address = require('./components/address/address-route');

module.exports = () => {
  const app = express.Router();

  address(app);
  books(app);
  users(app);
  creditcards(app);

  return app;
};
