const booksService = require('./books-service');

async function getBooks(request, response, next) {
  try {
    const { _quantity = 1, _seed = null, _locale = 'id_ID' } = request.query;

    const books = await booksService.getBooks(
      parseInt(_quantity),
      _seed,
      _locale
    );

    const responsePayload = {
      status: 'OK',
      code: 200,
      locale: _locale,
      seed: _seed,
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
