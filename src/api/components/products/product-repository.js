const { Products } = require('../../../models');

async function getProducts(locale) {
  return Products.find({ _locale: locale }).select(
    'name description price vat image'
  );
}

module.exports = { getProducts };
