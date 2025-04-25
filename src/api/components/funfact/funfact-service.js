const funfactRepository = require('./funfact-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getFunFacts(quantity, seed, locale, category) {
  const funFacts = await funfactRepository.getFunFacts(locale, category);
  const ids = funFacts.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => funFacts[id]);
}

module.exports = {
  getFunFacts,
};
