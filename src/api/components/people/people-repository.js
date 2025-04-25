const { People } = require('../../../models');

async function getPeople(locale) {
  const query = { _locale: locale };

  let peoples = People.find(query).select(
    'firstname lastname email phone birthday gender address'
  );
  if (peoples.length === 0) {
    peoples = People.find().select(
      'firstname lastname email phone birthday gender address'
    );
  }
  return People;
}
module.exports = {
  getPeople,
};
