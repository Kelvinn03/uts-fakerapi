const quotesRepository = require('./quotes-repository');
const quotesSeeder = require('./quotes-seeder');
const getRandomIds = require('../../../utils/randomizer');

async function getQuotes(quantity, seed, locale) {
  const quotes = await quotesRepository.getQuotes(locale);
  const ids = quotes.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => quotes[id]);
}

async function create(content, author, category) {
  return quotesRepository.create(content, author, category);
}

async function seedQuotes() {
  return quotesSeeder.isDataSeeded();
}

module.exports = {
  getQuotes,
  create,
  seedQuotes,
};
