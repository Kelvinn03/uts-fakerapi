const { Funfact } = require('../../../models');

async function getFunFacts(locale) {
  const query = { _locale: locale };

  return Funfact.find(query).select('fact year_found source category');
}

module.exports = {
  getFunFacts,
};
