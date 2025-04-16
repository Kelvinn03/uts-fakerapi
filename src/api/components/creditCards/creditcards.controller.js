const creditCardService = require('./creditcards-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getCreditCards(request, response, next) {
  try {
    const quantity = parseInt(request.query.quantity) || 1;
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
    return next(errorResponder(error, errorTypes.INTERNAL_SERVER_ERROR));
  }
}

module.exports = {
  getCreditCards,
};
