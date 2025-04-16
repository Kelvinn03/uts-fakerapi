const { Books } = require('../../../models');

async function getBooks(locale) {
  return Books.find({ _locale: locale }).select(
    'id title author genre description isbn image published publisher'
  );
}

module.exports = {
  getBooks,
};
