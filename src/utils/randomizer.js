const seedrandom = require('seedrandom');

function getRandomIds(seed, ids) {
  const rng = seedrandom(seed);

  const array = ids.slice();

  let m = array.length;
  let t;
  let i;

  while (m) {
    i = Math.floor(rng() * m);
    m -= 1;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

module.exports = getRandomIds;
