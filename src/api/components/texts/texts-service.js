const textsRepository = require('./texts-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getTexts(quantity, seed, locale, characters) {
  console.log('[Debug] Mengambil data dari DB...');
  const allTexts = await textsRepository.getTexts();
  console.log('[Debug] Data dari DB:', allTexts);
  let texts = await textsRepository.getTexts(locale);
  if (characters) {
    texts = texts.filter(text =>
      text.content.length <= parseInt(characters, 10)
    )
  }
  const ids = texts.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => texts[id]);
}

module.exports = {
  getTexts,
};