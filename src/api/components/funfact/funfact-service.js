const { get } = require('mongoose');
const funfactRepository = require('./funfact-repository');

async function generateFunfact(quantity) {
  return funfactRepository.getRandomFact(quantity);
}

async function removeFunfact(id) {
  try {
    return await funfactRepository.deleteFunfact(id);
  } catch (error) {
    console.error('Error in removeFunfact:', error);
    throw error;
  }
}

async function clearAllFunfacts() {
  return funfactRepository.clearAllFunfacts();
}

async function seedInitialData() {
  return funfactRepository.seedInitialData();
}

async function getByCategory(category, quantity = 7) {
  try {
    return funfactRepository.getByCategory(category, quantity);
  } catch (error) {
    console.error('Error in getByCategory:', error);
    throw error;
  }
}

async function searchFunfact(query) {
  try {
    return await funfactRepository.searchFunfact(query);
  } catch (error) {
    console.error('Error in searchFunfact:', error);
    throw error;
  }
}

async function getCategories() {
  try {
    return await funfactRepository.getCategories();
  } catch (error) {
    console.error('Error in getCategories:', error);
    throw error;
  }
}

module.exports = {
  generateFunfact,
  removeFunfact,
  clearAllFunfacts,
  seedInitialData,
  searchFunfact,
  getByCategory,
  getCategories,
};
