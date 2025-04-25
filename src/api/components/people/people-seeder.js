const { People } = require('../../../models');
const { seedData } = require('../../../utils/seeder');

async function seedInitialData() {
  const peoplesFields = [
    'firstname',
    'lastname',
    'email',
    'phone',
    'birthday',
    'gender',
    'address',
  ];

  seedData(People, 50, peoplesFields);
}

module.exports = seedInitialData;
