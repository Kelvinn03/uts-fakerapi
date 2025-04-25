const musicRepository = require('./music-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getMusic(quantity, seed, locale) {
  const musics = await musicRepository.getMusic(locale);
  const ids = musics.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => musics[id]);
}

module.exports = {
  getMusic,
};
