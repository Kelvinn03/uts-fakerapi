const { Places } = require('../../../models');

async function getPlaces(locale, countryCode) {
  const query = { _locale: locale };
  if (countryCode) query.countryCode = countryCode;

  return Places.find(query).select(
    'city country address latitude longitude countryCode'
  );
}

module.exports = { getPlaces };
