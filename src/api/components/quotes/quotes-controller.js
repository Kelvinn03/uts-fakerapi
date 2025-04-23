const quotesService = require('./quotes-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getQuotes(request, response, next) {
  try {
    const offset = parseInt(request.query.offset, 10) || 0;
    const limit = parseInt(request.query.limit, 10) || 10;

    if (offset < 0) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Offset must be a non-negative number'
      );
    }

    if (limit < 1) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Limit must be a positive number'
      );
    }

    const result = await quotesService.getQuotes(offset, limit);
    return response.status(200).json(result);
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

module.exports = {
  getQuotes,
  createQuote,
};
