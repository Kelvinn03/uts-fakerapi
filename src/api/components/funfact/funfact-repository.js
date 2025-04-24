const { Funfact } = require('../../../models');

async function getFunFacts(locale, category) {
  const query = { _locale: locale };
  if (category) {
    query.type = category;
  }

  return Funfact.find(query).select('fact year_found source category');
}

module.exports = {
  getFunFacts,
};
