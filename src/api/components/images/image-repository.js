const { Image } = require('../../../models');

async function getImages(locale) {
  const query = { _locale: locale };

  return Image.find(query).select('title description url');
}

module.exports = {
  getImages,
};
