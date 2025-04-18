const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const creditcards = require('./components/creditCards/creditcards-route');
const asciiArt = require('./components/ascii/ascii-route');
const funfact = require('./components/funfact/funfact-route');
const images = require('./components/images/images-route');

module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);
  creditcards(app);
  asciiArt(app);
  funfact(app);
  images(app);
  return app;
};
