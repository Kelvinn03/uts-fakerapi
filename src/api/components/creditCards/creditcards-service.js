const creditCardRepository = require('./creditcards.repository');

async function generateCreditCards(quantity) {
  return creditCardRepository.getFakeCreditCards(quantity);
}

module.exports = {
  generateCreditCards,
};
