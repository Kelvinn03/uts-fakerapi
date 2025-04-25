const imageService = require('./image-service');

async function getImages(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
      _type: type = null,
    } = request.query;

    const images = await imageService.getFunFact(
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
      total: images.length,
      data: images,
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getImages,
};
