const { Funfact } = require('../../../models');

async function seedInitialData() {
  const funFacts = [
    {
      fact: "Bananas are berries, but strawberries aren't.",
      year_found: 2008,
      source: 'Botanical classification studies',
      category: 'Science',
      _locale: 'en',
    },
    {
      fact: 'Octopuses have three hearts and blue blood.',
      year_found: 1967,
      source: 'Marine biology research',
      category: 'Animal',
      _locale: 'en',
    },
    {
      fact: 'The Eiffel Tower can grow over 6 inches taller in summer due to heat expansion.',
      year_found: 1889,
      source: 'Engineering observations',
      category: 'Architecture',
      _locale: 'en',
    },
    {
      fact: 'Honey never spoils — edible pots of honey were found in ancient Egyptian tombs.',
      year_found: 1922,
      source: "Archaeological discovery of Tutankhamun's tom",
      category: 'Food',
      _locale: 'en',
    },
    {
      fact: 'Sharks existed before trees.',
      year_found: 2015,
      source: 'Paleontology research',
      category: 'Nature',
      _locale: 'en',
    },
    {
      fact: 'Wombat poop is cube-shaped.',
      year_found: 2018,
      source: 'University of Tasmania study',
      category: 'Animal',
      _locale: 'en',
    },
    {
      fact: "There's a species of jellyfish that can potentially live forever.",
      year_found: 1996,
      source: 'Marine biology - Turritopsis dohrnii research',
      category: 'Biology',
      _locale: 'en',
    },
  ];

  await Funfact.insertMany(funFacts);
}

async function isDataSeeded() {
  const count = await Funfact.countDocuments();
  if (count >= 0) {
    await Funfact.deleteMany({});
    await seedInitialData();
  }
}

module.exports = {
  seedInitialData,
  isDataSeeded,
};
