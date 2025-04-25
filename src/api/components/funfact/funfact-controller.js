const funfactService = require('./funfact-service');

async function getFunFacts(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'en',
    } = request.query;

    const funFacts = await funfactService.getFunFacts(
      parseInt(quantity, 10),
      seed,
      locale
    );

    const responsePayload = {
      status: 'OK',
      code: 200,
      locale,
      seed,
      total: funFacts.length,
      data: funFacts,
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

async function seedFunFacts(request, response, next) {
  try {
    await funfactService.seedFunFacts();

    const responsePayload = {
      status: 'OK',
      code: 200,
      message: 'Fun facts seeded successfully',
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getFunFacts,
  seedFunFacts,
};
