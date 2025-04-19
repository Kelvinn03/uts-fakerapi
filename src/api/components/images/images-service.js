const imagesRepository = require('./images-repository');

async function generateImage(quantity) {
  return imagesRepository.getRandomImage(quantity);
}

async function removeImage(id) {
  try {
    return await imagesRepository.deleteImage(id);
  } catch (error) {
    console.error('Error in removeImage:', error);
    throw error;
  }
}

async function clearAllImages() {
  return imagesRepository.clearAllImages();
}

async function seedInitialData() {
  return imagesRepository.seedInitialData();
}

module.exports = {
  generateImage,
  removeImage,
  clearAllImages,
  seedInitialData,
};