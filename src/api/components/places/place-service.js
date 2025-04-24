const placeRepo = require('./place-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getPlaces(qty, seed, locale, countryCode) {
  const docs = await placeRepo.getPlaces(locale, countryCode);
  const ids = docs.map((_, i) => i);
  return getRandomIds(seed, ids)
    .slice(0, qty)
    .map((id) => docs[id]);
}

module.exports = { getPlaces };
