const { Texts } = require('../../../models');

async function getTexts(locale) {
  return Texts.find({ _locale: locale }).select(
    'title author genre content'
  );
}

module.exports = {
  getTexts,
};
