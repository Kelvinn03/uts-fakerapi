const addressRepository = require('./address-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getAddresses(quantity, seed, locale, countryCode) {
  const addresses = await addressRepository.getAddresses(locale, countryCode);
  const ids = addresses.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => addresses[id]);
}

module.exports = {
  getAddresses,
};
