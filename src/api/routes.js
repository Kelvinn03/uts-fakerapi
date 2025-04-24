const express = require('express');

const books = require('./components/books/books-route');
const users = require('./components/users/users-route');
const address = require('./components/address/address-route');
const creditcards = require('./components/creditCards/creditcards-route');
const asciiArt = require('./components/ascii/ascii-route');
const funfact = require('./components/funfact/funfact-route');
const images = require('./components/images/images-route');
const auth = require('./components/auth/auth-route');

// NEW endpoints
const products = require('./components/products/product-route');
const places = require('./components/places/place-route');
const texts = require('./components/texts/text-route');

module.exports = () => {
  const app = express.Router();

  books(app);
  users(app);
  address(app);
  creditcards(app);
  asciiArt(app);
  funfact(app);
  images(app);
  auth(app);
  products(app); // ← new
  places(app); // ← new
  texts(app); // ← new

  return app;
};
