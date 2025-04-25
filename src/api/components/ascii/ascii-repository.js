const { AsciiArt } = require('../../../models');

async function getAsciiArts(locale, category) {
  const query = { _locale: locale };
  if (category) {
    query.category = category;
  }

  return AsciiArt.find(query).select('title art category');
}

module.exports = {
  getAsciiArts,
};
