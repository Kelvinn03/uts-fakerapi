const textsRepository = require('./texts-repository');
const textsSeeder = require('./texts-seeder');
const getRandomIds = require('../../../utils/randomizer');

async function getTexts(quantity, seed, locale, characters) {
  let texts = await textsRepository.getTexts(locale);
  if (characters) {
    texts = texts.filter(
      (text) => text.content.length <= parseInt(characters, 10)
    );
  }
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
