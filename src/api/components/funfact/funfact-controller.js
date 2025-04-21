const mongoose = require('mongoose');

const funfactService = require('./funfact-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

// fungsi untuk mendapatkan funfact yang ada
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

// fungsi untuk menghapus funfact
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

// fungsi untuk mereset database funfact
async function resetFunfacts(request, response, next) {
  try {
    await funfactService.clearAllFunfacts();
    await funfactService.seedInitialData();

    return response.status(200).json({
      status: 'OK',
      message: 'Funfacts database reset successfully',
    });
  } catch (error) {
    return next(error);
  }
}

// fungsi untuk mendapatkan funfact berdasarkan kategori
async function getByCategory(request, response, next) {
  try {
    const { category } = request.params;
    const quantity = parseInt(request.query.quantity, 7) || 3; // default to 3 category

    // Validate quantity
    if (quantity < 1 || quantity > 7) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Quantity must be between 1 and 7'
      );
    }

    const data = await funfactService.getByCategory(category, quantity);

    return response.status(200).json({
      status: 'OK',
      code: 200,
      locale: 'en_US',
      seed: null,
      total: data.length,
      data,
    });
  } catch (error) {
    return next(error);
  }
}

// fungsi untuk list kategori yang ada
async function getCategories(request, response, next) {
  try {
    const data = await funfactService.getCategories();

    return response.status(200).json({
      status: 'OK',
      code: 200,
      locale: 'en_US',
      seed: null,
      total: data.length,
      data,
    });
  } catch (error) {
    return next(error);
  }
}

// fungsi untuk mencari funfact berdasarkan query
async function searchFunfact(request, response, next) {
  try {
    const { q } = request.query;

    if (!q || q.length < 2) {
      throw errorResponder(
        errorTypes.VALIDATION_ERROR,
        'Query must be at least 2 characters long'
      );
    }

    const data = await funfactService.searchFunfact(q);

    return response.status(200).json({
      status: 'OK',
      code: 200,
      locale: 'en_US',
      seed: null,
      total: data.length,
      data,
    });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getFunFact,
  deleteFunfact,
  resetFunfacts,
  searchFunfact,
  getByCategory,
  getCategories,
};
