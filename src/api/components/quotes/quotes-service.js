const quotesRepository = require('./quotes-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getQuotes(quantity, seed, locale) {
  const quotes = await quotesRepository.getQuotes();
  const ids = quotes.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => quotes[id]);
}

async function create(content, author, category) {
  return quotesRepository.create(content, author, category);
}

module.exports = {
  getQuotes,
  create,
};
