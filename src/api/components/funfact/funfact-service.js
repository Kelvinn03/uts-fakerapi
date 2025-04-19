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

module.exports = {
  generateFunfact,
  removeFunfact,
  clearAllFunfacts,
  seedInitialData
};