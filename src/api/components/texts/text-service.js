const textRepo = require('./text-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getTexts(qty, seed, locale) {
  const docs = await textRepo.getTexts(locale);
  const ids = docs.map((_, i) => i);
  return getRandomIds(seed, ids)
    .slice(0, qty)
    .map((id) => docs[id]);
}

module.exports = { getTexts };
