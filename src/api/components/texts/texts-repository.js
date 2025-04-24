const { Texts } = require('../../../models');

async function getTexts(locale, characters) {
  const query = { _locale: locale };
  if (characters) {
    query.characters = characters;
  }

  return Texts.find(query).select(
    'title author genre content'
  );
}

module.exports = {
  getTexts,
};
