const mongoose = require('mongoose');

const funfactService = require('./funfact-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

async function getFunFact(request, response, next) {
  try {
    const quantity = parseInt(request.query.quantity, 7) || 7;

    // Validate quantity
    if (quantity < 1 || quantity > 7) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Quantity must be between 1 and 7'
      );
    }

    const data = await funfactService.generateFunfact(quantity);

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

async function deleteFunfact(request, response, next) {
  try {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw errorResponder(errorTypes.VALIDATION_ERROR, 'Invalid funfact ID');
    }

    await funfactService.removeFunfact(id);

    return response.status(200).json({
      status: 'OK',
      code: 200,
      message: 'Funfact deleted successfully',
    });
  } catch (error) {
    return next(error);
  }
}

async function resetFunfacts(request, response, next) {
  try {
    await funfactService.clearAllFunfacts();
    await funfactService.seedInitialData();
    
    return response.status(200).json({
      status: 'OK',
      message: 'Funfacts database reset successfully'
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getFunFact,
  deleteFunfact,
  resetFunfacts,
};
