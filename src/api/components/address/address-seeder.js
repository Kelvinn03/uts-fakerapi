const { Address } = require('../../../models');
const { seedData } = require('../../../utils/seeder');

async function seedInitialData() {
  const addressesFields = [
    'address',
    'streetName',
    'buildingName',
    'city',
    'zipcode',
    'country',
    'countryCode',
    'latitude',
    'longitude',
  ];

  seedData(Address, 50, addressesFields);
}

module.exports = seedInitialData;
