const { faker } = require('@faker-js/faker');
const { Texts } = require('../../../models');

async function seedInitialData() {
  const texts = [];

  for (let i = 0; i < 10; i += 1) {
    const text = {
      title: faker.lorem.sentence(),
      author: faker.person.fullName(),
      genre: faker.helpers.arrayElement(['Vitae', 'Odio', 'Id', 'Eveniet']),
      content: faker.lorem.paragraphs(3),
      _locale: 'en',
    };
    texts.push(text);
  }

  await Texts.insertMany(texts);
}

async function isDataSeeded() {
  const count = await Texts.countDocuments();
  if (count >= 0) {
    await Texts.deleteMany({});
    await seedInitialData();
  }
}

module.exports = {
  seedInitialData,
  isDataSeeded,
};
