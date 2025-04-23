const quotesRepository = require('./quotes-repository');

async function getQuotes(offset, limit) {
  return quotesRepository.getQuotes(offset, limit);
}

async function create(content, author, category) {
  return quotesRepository.create(content, author, category);
}

module.exports = {
  getQuotes,
  create,
};
