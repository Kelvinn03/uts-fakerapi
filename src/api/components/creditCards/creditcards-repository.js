const { CreditCard } = require('../../../models');

async function getCreditCards(locale, type) {
  const query = { _locale: locale };
  if (type) {
    query.type = type;
  }

  return CreditCard.find(query).select('type number expiration owner');
}

module.exports = {
  getCreditCards,
};
