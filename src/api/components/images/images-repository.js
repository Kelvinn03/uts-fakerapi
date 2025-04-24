const { Images } = require('../../../models');

async function getImages(locale) {
  const query = { _locale: locale };

  return Images.find(query).select('title description url');
}

module.exports = {
  getImages,
};
