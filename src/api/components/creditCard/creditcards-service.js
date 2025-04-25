const creditCardRepository = require('./creditcard-repository');
const creditCardSeeder = require('./creditcard-seeder');
const getRandomIds = require('../../../utils/randomizer');

async function getCreditCards(quantity, seed, locale, type) {
  const creditCards = await creditCardRepository.getCreditCards(locale, type);
  const ids = creditCards.map((_, index) => index);
  const randomIds = getRandomIds(seed, ids);

  return randomIds.slice(0, quantity).map((id) => creditCards[id]);
}

async function seedCreditCards() {
  await creditCardSeeder.isDataSeeded();
}

module.exports = {
  getCreditCards,
  seedCreditCards,
};
