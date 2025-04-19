const { Funfact } = require('../../../models');

async function seedInitialData() {
  const funfact = [
    {
      fact: 'Bananas are berries, but strawberries aren\'t.',
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
      source: 'Archaeological discovery of Tutankhamun\'s tom',
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
      fact: 'There\'s a species of jellyfish that can potentially live forever.',
      year_found: 1996,
      source: 'Marine biology - Turritopsis dohrnii research',
      category: 'Biology',
    },
  ];

  await Funfact.insertMany(funfact);
}

async function getRandomFact(quantity = 1) {
  try {
    // First check if collection is empty
    const count = await Funfact.countDocuments();

    if (count === 0) {
      await seedInitialData();
    }

    // Validate quantity
    const validatedQuantity = Math.min(Math.max(parseInt(quantity), 1), 7);

    // Get random documents
    return await Funfact.aggregate([{ $sample: { size: validatedQuantity } }]);
  } catch (error) {
    console.error('Error in getRandomFact:', error);
    throw error;
  }
}

async function deleteFunfact(id) {
  try {
    const result = await Funfact.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      throw new Error('Funfact not found');
    }
    return { success: true };
  } catch (error) {
    console.error('Error deleting funfact:', error);
    throw error;
  }
}

async function clearAllFunfacts() {
  try {
    const result = await Funfact.deleteMany({});
    console.log(`Cleared ${result.deletedCount} funfacts`);
    return result;
  } catch (error) {
    console.error('Error clearing funfacts:', error);
    throw error;
  }
}


module.exports = {
  getRandomFact,
  seedInitialData,
  deleteFunfact,
  clearAllFunfacts,
};
