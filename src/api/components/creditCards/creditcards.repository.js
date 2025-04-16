const { CreditCard } = require('../../../models');

/**
 * Fetch all credit cards from the database, limited by quantity
 */
async function getFakeCreditCards(quantity) {
  return CreditCard.find().limit(quantity);
}

/**
 * Create multiple fake credit cards (optional utility function)
 */
async function seedFakeCreditCards(quantity) {
  const faker = require('faker');
  const cards = [];

  for (let i = 0; i < quantity; i++) {
    cards.push({
      type: faker.finance.creditCardIssuer(),
      number: faker.finance.creditCardNumber(),
      expiration: faker.date.future().toLocaleDateString('en-US', {
        month: '2-digit',
        year: '2-digit',
      }),
      owner: faker.name.findName(),
    });
  }

  return CreditCard.insertMany(cards);
}

module.exports = {
  getFakeCreditCards,
  seedFakeCreditCards
};
