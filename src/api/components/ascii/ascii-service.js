const asciiArtRepository = require('./ascii-repository');

async function generateAscii(quantity) {
  return asciiArtRepository.getRandomArt(quantity);
}

async function removeAsciiArt(id) {
  try {
    return await asciiArtRepository.deleteAsciiArt(id);
  } catch (error) {
    console.error('Error in removeAsciiArt:', error);
    throw error;
  }
}

module.exports = {
  generateAscii,
  removeAsciiArt,
};