const { AsciiArt } = require('../../../models');

async function getAsciiArts(locale) {
  const query = { _locale: locale };

  return AsciiArt.find(query).select('title art category');
}

module.exports = {
  getAsciiArts,
};
