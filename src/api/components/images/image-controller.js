const imageService = require('./image-service');

async function getImages(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'en',
      _type: type = null,
    } = request.query;

    const images = await imageService.getImages(
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

async function seedImages(request, response, next) {
  try {
    await imageService.seedImages();

    const responsePayload = {
      status: 'OK',
      code: 200,
      message: 'Image data seeded successfully',
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getImages,
  seedImages,
};
