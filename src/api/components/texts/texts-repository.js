const { Texts } = require('../../../models');

async function getTexts(locale) {
  const query = { _locale: locale };

  return Texts.find(query).select('title author genre content');
}

module.exports = {
  getTexts,
};
