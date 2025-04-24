const AsciiArtService = require('./ascii-service');

async function getAsciiArt(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
      _type: type = null,
    } = request.query;

    const asciiArts = await AsciiArtService.getAsciiArt(
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

module.exports = {
  getAsciiArt,
};
