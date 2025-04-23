const { Quotes } = require('../../../models');


async function getQuotes(offset = 0, limit = 10) {
  const total = await Quotes.countDocuments({});
  const quotes = await Quotes.find({}).skip(offset).limit(limit);

  return {
    total,
    quotes,
    offset,
    limit,
  };
}

async function create(content, author, category = 'general') {
  return Quotes.create({ content, author, category });
}

module.exports = {
  getQuotes,
  create,
};