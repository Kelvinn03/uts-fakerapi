const peopleRepository = require('./people-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getPeople(quantity, seed, locale) {
  const peoples = await peopleRepository.getPeople(locale);
  const ids = peoples.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => peoples[id]);
}

module.exports = {
  getPeople,
};
