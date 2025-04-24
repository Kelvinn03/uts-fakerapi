const { Address } = require('../../../models');

async function getAddresses(locale, countryCode) {
  const query = { _locale: locale };
  if (countryCode) {
    query.countryCode = countryCode;
  }

  return Address.find(query).select(
    'streetAddress streetName buildingName city postCode country countryCode latitude longitude'
  );
}

module.exports = {
  getAddresses,
};
