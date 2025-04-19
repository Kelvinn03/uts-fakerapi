const creditCardRepository = require('./creditcards-repository');

async function generateCreditCards(quantity) {
  return creditCardRepository.getCreditCards(quantity);
}

async function removeCreditCard(id) {
  return creditCardRepository.deleteCreditCard(id);
}

async function clearAllCreditCards() {
  return creditCardRepository.clearAllCreditCards();
}
async function seedCreditCards() {
  return creditCardRepository.seedCreditCards();
}

module.exports = {
  generateCreditCards,
  removeCreditCard,
  clearAllCreditCards,
  seedCreditCards,
};