const funfactService = require('./funfact-service');

async function getFunFacts(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
      _type: type = null,
    } = request.query;

    const funFacts = await funfactService.getFunFact(
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
      total: funFacts.length,
      data: funFacts,
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getFunFacts,
};
