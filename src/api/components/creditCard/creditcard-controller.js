const creditCardService = require('./creditcards-service');

async function getCreditCards(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
      _type: type = null,
    } = request.query;

    const credits = await creditCardService.getCreditCards(
      parseInt(quantity, 10),
      seed,
      locale,
      type
    );

    const responsePayload = {
      status: 'OK',
      code: 200,
      locale,
      seed,
      total: credits.length,
      data: credits,
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getCreditCards,
};
