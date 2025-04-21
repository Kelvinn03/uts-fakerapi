import { Addresss } from '../../../models';

async function getAddresses(locale, countryCode) {
  const query = { _locale: locale };
  if (countryCode) {
    query.countryCode = countryCode;
  }

  return Addresss.find(query).select(
    'streetAddress streetName buildingName city postCode country countryCode latitude longitude'
  );
}

export default {
  getAddresses,
};
