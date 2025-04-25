const { faker } = require('@faker-js/faker');
const { CreditCard } = require('../../../models');

async function seedInitialData() {
  const creditCards = [];

  for (let i = 0; i < 10; i += 1) {
    const cards = {
      type: faker.helpers.arrayElement([
        'Visa',
        'MasterCard',
        'American Express',
      ]),
      number: faker.finance.creditCardNumber(),
      expiration: faker.date.future().toISOString().split('T')[0],
      owner: faker.person.fullName(),
    };
    creditCards.push(cards);
  }

  await CreditCard.insertMany(creditCards);
}

async function isDataSeeded() {
  const count = await CreditCard.countDocuments();
  if (count === 0) {
    await seedInitialData();
  }
}

module.exports = {
  seedInitialData,
  isDataSeeded,
};
