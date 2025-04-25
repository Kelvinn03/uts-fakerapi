const { CreditCard } = require('../../../models');

async function getCreditCards(locale) {
  const query = { _locale: locale };

  return CreditCard.find(query).select('type number expiration owner');
}

module.exports = {
  getCreditCards,
};
