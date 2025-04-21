const booksService = require('./books-service');

async function getBooks(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
    } = request.query;

    const books = await booksService.getBooks(
      parseInt(quantity, 10),
      seed,
      locale
    );

    const responsePayload = {
      status: 'OK',
      code: 200,
      locale,
      seed,
      total: books.length,
      data: books,
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getBooks,
};
