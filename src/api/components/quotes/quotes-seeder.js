const { faker } = require('@faker-js/faker');
const { Quotes } = require('../../../models');

async function seedInitialData() {
  const quotes = [];

  for (let i = 0; i < 10; i += 1) {
    const quote = {
      content: faker.lorem.sentence(),
      author: faker.person.fullName(),
      category: faker.helpers.arrayElement([
        'general',
        'inspirational',
        'motivational',
      ]),
      _locale: 'en',
    };
    quotes.push(quote);
  }

  await Quotes.insertMany(quotes);
}

async function isDataSeeded() {
  const quotes = await Quotes.countDocuments();
  if (quotes >= 0) {
    await Quotes.deleteMany({});
    await seedInitialData();
  }
}
module.exports = {
  seedInitialData,
  isDataSeeded,
};
