const { faker } = require('@faker-js/faker');
const { CreditCard } = require('../../../models');

async function getFakeCreditCards(quantity) {
  // Check if we have enough cards in DB
  const count = await CreditCard.countDocuments();
  
  if (count < quantity) {
    await seedFakeCreditCards(Math.max(quantity, 10));
  }
  
  return await CreditCard.find().limit(quantity);
}

async function seedFakeCreditCards(quantity) {
  const cards = [];
  
  for (let i = 0; i < quantity; i++) {
    const expirationDate = faker.date.future({ years: 5 });
    const expiration = `${String(expirationDate.getMonth() + 1).padStart(2, '0')}/${String(expirationDate.getFullYear()).slice(-2)}`;
    
    cards.push({
      type: faker.helpers.arrayElement([
        'Visa',
        'MasterCard',
        'American Express',
        'Discover',
        'JCB',
        'Diners Club',
        'Visa Retired'
      ]),
      number: faker.finance.creditCardNumber().replace(/\D/g, ''),
      expiration,
      owner: faker.person.fullName()
    });
  }

  await CreditCard.insertMany(cards);
}

module.exports = {
  getFakeCreditCards,
  seedFakeCreditCards
};