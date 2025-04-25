const AsciiArtService = require('./ascii-service');

async function getAsciiArts(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'en',
      _type: type = null,
    } = request.query;

    const asciiArts = await AsciiArtService.getAsciiArts(
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
      total: asciiArts.length,
      data: asciiArts,
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

async function asciiSeeder(request, response, next) {
  try {
    await AsciiArtService.asciiSeeder();

    const responsePayload = {
      status: 'OK',
      code: 200,
      message: 'Ascii art data seeded successfully',
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAsciiArts,
  asciiSeeder,
};
