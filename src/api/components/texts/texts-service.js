const textsRepository = require('./texts-repository');
const textsSeeder = require('./texts-seeder');
const getRandomIds = require('../../../utils/randomizer');

async function getTexts(quantity, seed, locale) {
  const texts = await textsRepository.getTexts(locale);

  const ids = texts.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);
  return randomIds.slice(0, quantity).map((id) => texts[id]);
}

async function seedTexts() {
  return textsSeeder.isDataSeeded();
}

module.exports = {
  getTexts,
  seedTexts,
};
