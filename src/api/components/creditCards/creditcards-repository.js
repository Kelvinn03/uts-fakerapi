const { faker } = require('@faker-js/faker');
const { CreditCard } = require('../../../models');

async function getCreditCards(quantity) {
  // Check if we have enough cards in DB
  const count = await CreditCard.countDocuments();
  
  if (count < quantity) {
    await seedCreditCards(Math.max(quantity, 10));
  }
  
  return await CreditCard.find().limit(quantity);
}

async function seedCreditCards(quantity) {
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

async function deleteCreditCard(id) {
  try {
    const result = await CreditCard.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      throw new Error('Credit card not found');
    }
    return { success: true };
  } catch (error) {
    console.error('Error deleting credit card:', error);
    throw error;
  }
}

async function clearAllCreditCards() {
  try {
    const result = await CreditCard.deleteMany({});
    console.log(`Cleared ${result.deletedCount} credit cards`);
    return result;
  } catch (error) {
    console.error('Error clearing credit cards:', error);
    throw error;
  }
}

module.exports = {
  getCreditCards,
  seedCreditCards,
  clearAllCreditCards,
  deleteCreditCard,
};