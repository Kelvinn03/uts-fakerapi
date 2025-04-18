const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const creditcards = require('./components/creditCards/creditcards-route');
const asciiArt = require('./components/ascii/ascii-route');

module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);
  creditcards(app);
  asciiArt(app);
  return app;
};
