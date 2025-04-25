const { Music } = require('../../../models');

async function getMusic(locale) {
  const query = { _locale: locale };

  let musics = Music.find(query).select('album artist genre index song_name');
  if (musics.length === 0) {
    musics = Music.find().select('album artist genre index song_name');
  }
  return Music;
}

module.exports = {
  getMusic,
};
