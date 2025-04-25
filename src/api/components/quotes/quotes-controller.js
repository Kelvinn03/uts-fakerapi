const quotesService = require('./quotes-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getQuotes(request, response, next) {
  try {
    const {
      _quantity: quantity = 10,
      _seed: seed = null,
      _locale: locale = 'en',
    } = request.query;

    const quotes = await quotesService.getQuotes(
      parseInt(quantity, 10),
      seed,
      locale
    );

    const responsePayload = {
      status: 'OK',
      code: 200,
      locale,
      seed,
      total: quotes.length,
      data: quotes,
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

async function createQuote(request, response, next) {
  try {
    const { content, author, category } = request.body;

    if (!content) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Content is required');
    }

    if (!author) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Author is required');
    }

    const quote = await quotesService.create(content, author, category);

    return response.status(200).json(quote);
  } catch (error) {
    return next(error);
  }
}

async function seedQuotes(request, response, next) {
  try {
    await quotesService.seedQuotes();
    const responsePayload = {
      status: 'OK',
      code: 200,
      message: 'Quotes Seeded successfully',
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getQuotes,
  createQuote,
};
