const mongoose = require('mongoose');

const imageService = require('./images-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getImage(request, response, next) {
  try {
    const quantity = parseInt(request.query.quantity, 10) || 10;

    // Validate quantity
    if (quantity < 1 || quantity > 10) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Quantity must be between 1 and 10'
      );
    }

    const data = await imageService.generateImage(quantity);

    return response.status(200).json({
      status: 'OK',
      code: 200,
      locale: 'en_US',
      seed: null,
      total: quantity,
      data,
    });
  } catch (error) {
    return next(error);
  }
}

async function deleteImage(request, response, next) {
  try {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invalid image ID');
    }

    await imageService.removeImage(id);

    return response.status(200).json({
      status: 'OK',
      code: 200,
      message: 'Image deleted successfully',
    });
  } catch (error) {
    return next(error);
  }
}

async function resetImages(request, response, next) {
  try {
    await imageService.clearAllImages();
    await imageService.seedInitialData();
    return response.status(200).json({
      status: 'OK',
      message: 'Images database reset successfully',
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getImage,
  deleteImage,
  resetImages,
};
