const productRepo = require('./product-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getProducts(qty, seed, locale) {
  const docs = await productRepo.getProducts(locale);
  const ids = docs.map((_, i) => i);
  return getRandomIds(seed, ids)
    .slice(0, qty)
    .map((id) => docs[id]);
}

module.exports = { getProducts };
