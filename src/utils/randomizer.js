const seedrandom = require('seedrandom');

function getRandomIds(seed, ids) {
  const rng = seedrandom(seed);

  const m = ids.length;
  let t;
  let i;

  while (m) {
    i = Math.floor(rng() * m--);
    t = ids[m];
    ids[m] = ids[i];
    ids[i] = t;
  }

  return ids;
}

module.exports = getRandomIds;
