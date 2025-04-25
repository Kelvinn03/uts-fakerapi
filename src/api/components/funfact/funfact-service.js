const funfactRepository = require('./funfact-repository');
const funfactSeeder = require('./funfact-seeder');
const getRandomIds = require('../../../utils/randomizer');

async function getFunFacts(quantity, seed, locale) {
  const funFacts = await funfactRepository.getFunFacts(locale);
  const ids = funFacts.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => funFacts[id]);
}

async function seedFunFacts() {
  await funfactSeeder.isDataSeeded();
}

module.exports = {
  getFunFacts,
  seedFunFacts,
};
