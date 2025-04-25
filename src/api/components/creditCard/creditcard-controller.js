const creditCardService = require('./creditcards-service');

async function getCreditCards(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
    } = request.query;

    const credits = await creditCardService.getCreditCards(
      parseInt(quantity, 10),
      seed,
      locale,
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

async function seedCreditCards(request, response, next) {
  try {
    await creditCardService.seedCreditCards();

    const responsePayload = {
      status: 'OK',
      code: 200,
      message: 'Credit cards seeded successfully',
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getCreditCards,
  seedCreditCards,
};
