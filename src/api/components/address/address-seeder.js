const faker = require('faker');
const { Address }= require('../../../models');

async function seedInitialData () {
    const addresses = [];

    for (let i = 0; i < 10; i++) {
      addresses.push({
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country(),
      });
    }

    console.log('Seeded Addresses:', addresses);
    Address.insertMany(addresses, (err, docs) => {
      if (err) {
        console.error('Error seeding addresses:', err);
      } else {
        console.log('Addresses seeded successfully:', docs);
      }
    });
  },
};

module.exports = seedInitialData;