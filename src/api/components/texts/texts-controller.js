const textsService = require('./texts-service');

async function getTexts(request, response, next) {
  try {
    const {
      _quantity: quantity = 10,
      _seed: seed = null,
      _locale: locale = 'en',
      _characters: characters = null,
    } = request.query;

    const texts = await textsService.getTexts(
      parseInt(quantity, 10),
      seed,
      locale,
      characters
    );

    const responsePayload = {
      status: 'OK',
      code: 200,
      locale,
      seed,
      total: texts.length,
      data: texts,
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

async function seedTexts(request, response, next) {
  try {
    await textsService.seedTexts();
    const responsePayload = {
      status: 'OK',
      code: 200,
      message: 'Texts Seeded successfully',
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getTexts,
  seedTexts,
};
