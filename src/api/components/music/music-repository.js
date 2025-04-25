const { Music } = require('../../../models');

async function getMusic(locale) {
  const query = { _locale: locale };

  return Music.find(query).select('album artist genre index song_name');
}

module.exports = {
  getMusic,
};
