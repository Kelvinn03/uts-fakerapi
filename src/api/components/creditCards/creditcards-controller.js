const creditCardService = require('./creditcards-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getCreditCards(request, response, next) {
  try {
    const quantity = parseInt(request.query.quantity, 10) || 10;

    // Validate quantity
    if (quantity < 1 || quantity > 100) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Quantity must be between 1 and 100'
      );
    }

    const data = await creditCardService.generateCreditCards(quantity);

    return response.status(200).json({
      status: 'OK',
      code: 200,
      locale: 'en_US',
      seed: null,
      total: quantity,
      data,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getCreditCards,
};
