const { People } = require('../../../models');

async function getPeople(locale) {
  const query = { _locale: locale };

  return People.find(query).select(
    'firstname lastname email phone birthday gender address'
  );
}

module.exports = {
  getPeople,
};
