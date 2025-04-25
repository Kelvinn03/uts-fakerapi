const { Music } = require('../../../models');
const { seedData } = require('../../../utils/seeder');

async function seedInitialData() {
  const musicsFields = ['album', 'artist', 'genre', 'index', 'song_name'];

  seedData(Music, 50, musicsFields);
}

module.exports = seedInitialData;
