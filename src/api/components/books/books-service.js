const booksRepository = require('./books-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getBooks(quantity, seed, locale) {
  const books = await booksRepository.getBooks(locale);
  const ids = books.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => books[id]);
}

async function create(title) {
  return booksRepository.create(title);
}

module.exports = {
  getBooks,
  create,
};
