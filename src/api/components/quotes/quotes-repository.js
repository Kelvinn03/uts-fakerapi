const { Quotes } = require('../../../models');

async function getQuotes(locale) {
  const query = { _locale: locale };

  return Quotes.find(query).select('content author category');
}

async function create(content, author, category = 'general') {
  return Quotes.create({ content, author, category });
}

module.exports = {
  getQuotes,
  create,
};
