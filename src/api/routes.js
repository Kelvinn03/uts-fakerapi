const express = require('express');

const books = require('./components/books/books-route');
const address = require('./components/address/address-route');
const users = require('./components/users/users-route');
const creditcards = require('./components/creditCard/creditcard-route');
const asciiArt = require('./components/ascii/ascii-route');
const funfact = require('./components/funfact/funfact-route');
const images = require('./components/images/image-route');
// const auth = require('./components/auth/auth-route');

// NEW endpoints
const products = require('./components/products/product-route');
const places = require('./components/places/place-route');
const texts = require('./components/texts/text-route');
const people = require('./components/people/people-route');
const music = require('./components/music/music-route');

module.exports = () => {
  const app = express.Router();

  books(app);
  address(app);
  users(app);
  creditcards(app);
  asciiArt(app);
  funfact(app);
  images(app);
  // auth(app);
  products(app);
  places(app);
  texts(app);
  people(app);
  music(app);

  return app;
};
