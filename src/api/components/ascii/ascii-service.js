const asciiArtRepository = require('./ascii-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getAsciiArts(quantity, seed, locale, category) {
  const asciiArts = await asciiArtRepository.getAddresses(locale, category);
  const ids = asciiArts.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => asciiArts[id]);
}

module.exports = {
  getAsciiArts,
};
