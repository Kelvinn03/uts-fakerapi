const mongoose = require('mongoose');

const AsciiArtService = require('./ascii-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getAsciiArt(request, response, next){
  try{
    const quantity = parseInt(request.query.quantity, 10) || 1;

    // Validate quantity
    if (quantity < 1 || quantity > 10) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Quantity must be between 1 and 10'
      );
    }

    const data = await AsciiArtService.generateAscii(quantity);

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

async function deleteAsciiArt(request, response, next) {
  try {
    const { id } = request.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Invalid artwork ID'
      );
    }

    await AsciiArtService.removeAsciiArt(id);

    return response.status(200).json({
      status: 'OK',
      code: 200,
      message: 'Artwork deleted successfully'
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAsciiArt,
  deleteAsciiArt,
};
