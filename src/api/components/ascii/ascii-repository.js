const { AsciiArt } = require('../../../models');

async function getRandomArt(quantity = 1) {
  try {
    // First check if collection is empty
    const count = await AsciiArt.countDocuments();

    if (count === 0) {
      await seedInitialData();
    }

    // Validate quantity
    const validatedQuantity = Math.min(Math.max(parseInt(quantity), 1), 10);

    // Get random documents
    return await AsciiArt.aggregate([{ $sample: { size: validatedQuantity } }]);
  } catch (error) {
    console.error('Error in getRandomArt:', error);
    throw error;
  }
}

async function seedInitialData() {
  const asciiArts = [
    {
      title: 'Cat',
      art: `
       /\_/\
      ( o.o )
       > ^ <
      `,
      category: 'Animals',
    },
    {
      title: 'Fish',
      art: "><(((('>",
      category: 'Animals',
    },
    {
      title: 'Cocktail',
      art: 'ʕ•́ᴥ•̀ʔっ🍸',
      category: 'Food/Drink',
    },
    {
      title: 'Shrug',
      art: '¯\\_(ツ)_/¯',
      category: 'Emoticon',
    },
    {
      title: 'Bear',
      art: 'ʕ•ᴥ•ʔ',
      category: 'Animal',
    },
    {
      title: 'Table Flip',
      art: '(╯°□°）╯︵ ┻━┻',
      category: 'Emoticon',
    },
    {
      title: 'Cat',
      art: '=^..^=',
      category: 'Animal',
    },
    {
      title: 'Spider',
      art: '/╲/\\╭(ఠఠ益ఠఠ)╮/\\╱\\',
      category: 'Animal',
    },
    {
      title: 'Dancing Man',
      art: 'ヽ(•‿•)ノ',
      category: 'People',
    },
    {
      title: 'Kirby',
      art: '(っ◕‿◕)っ',
      category: 'Gaming',
    },
  ];

  await AsciiArt.insertMany(asciiArts);
}

async function deleteAsciiArt(id) {
  try {
    const result = await AsciiArt.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      throw new Error('Artwork not found');
    }
    return { success: true };
  } catch (error) {
    console.error('Error deleting artwork:', error);
    throw error;
  }
}

module.exports = {
  getRandomArt,
  deleteAsciiArt,
};
