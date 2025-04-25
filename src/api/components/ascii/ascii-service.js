const asciiArtRepository = require('./ascii-repository');
const asciiArtSeeder = require('./ascii-seeder');
const getRandomIds = require('../../../utils/randomizer');

async function getAsciiArts(quantity, seed, locale, category) {
  const asciiArts = await asciiArtRepository.getAsciiArts(locale, category);
  const ids = asciiArts.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => asciiArts[id]);
}

async function asciiSeeder() {
  await asciiArtSeeder.isDataSeeded();
}

module.exports = {
  getAsciiArts,
  asciiSeeder,
};
