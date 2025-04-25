// Filters by locale if provided; otherwise returns every doc.
const { Texts } = require('../../../models');

async function getTexts(locale) {
  const query = locale ? { _locale: locale } : {};
  return Texts.find(query).select('title author content _locale');
}

module.exports = { getTexts };
