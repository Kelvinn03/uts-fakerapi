const imagesRepository = require('./images-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getImages(quantity, seed, locale) {
  const images = await imagesRepository.getImages(locale);
  const ids = images.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => images[id]);
}

module.exports = {
  getImages,
};
