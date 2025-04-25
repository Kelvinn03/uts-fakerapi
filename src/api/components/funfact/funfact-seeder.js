const { Funfact } = require('../../../models');

async function seedInitialData() {
  const funFacts = [
    {
      fact: "Bananas are berries, but strawberries aren't.",
      year_found: 2008,
      source: 'Botanical classification studies',
      category: 'Science',
    },
    {
      fact: 'Octopuses have three hearts and blue blood.',
      year_found: 1967,
      source: 'Marine biology research',
      category: 'Animal',
    },
    {
      fact: 'The Eiffel Tower can grow over 6 inches taller in summer due to heat expansion.',
      year_found: 1889,
      source: 'Engineering observations',
      category: 'Architecture',
    },
    {
      fact: 'Honey never spoils — edible pots of honey were found in ancient Egyptian tombs.',
      year_found: 1922,
      source: "Archaeological discovery of Tutankhamun's tom",
      category: 'Food',
    },
    {
      fact: 'Sharks existed before trees.',
      year_found: 2015,
      source: 'Paleontology research',
      category: 'Nature',
    },
    {
      fact: 'Wombat poop is cube-shaped.',
      year_found: 2018,
      source: 'University of Tasmania study',
      category: 'Animal',
    },
    {
      fact: "There's a species of jellyfish that can potentially live forever.",
      year_found: 1996,
      source: 'Marine biology - Turritopsis dohrnii research',
      category: 'Biology',
    },
  ];

  await Funfact.insertMany(funFacts);
}

async function isDataSeeded() {
  const count = await Funfact.countDocuments();
  if (count === 0) {
    await seedInitialData();
  }
}

module.exports = {
  seedInitialData,
  isDataSeeded,
};
