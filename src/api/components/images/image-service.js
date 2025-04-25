const imageRepository = require('./image-repository');
const imageSeeder = require('./image-seeder');

const getRandomIds = require('../../../utils/randomizer');

async function getImages(quantity, seed, locale) {
  const images = await imageRepository.getImages(locale);
  const ids = images.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => images[id]);
}

async function seedImages() {
  await imageSeeder.isDataSeeded();
}

module.exports = {
  getImages,
  seedImages,
};
