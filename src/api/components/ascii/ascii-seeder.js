const { AsciiArt } = require('../../../models');

async function seedInitialData() {
  const asciiArts = [
    {
      title: 'Cat',
      art: '₍^. .^₎⟆',
      category: 'Animals',
      _locale: 'en',
    },
    {
      title: 'Fish',
      art: "><(((('>",
      category: 'Animals',
      _locale: 'en',
    },
    {
      title: 'Cocktail',
      art: 'ʕ•́ᴥ•̀ʔっ🍸',
      category: 'Food/Drink',
      _locale: 'en',
    },
    {
      title: 'Shrug',
      art: '¯\\_(ツ)_/¯',
      category: 'Emoticon',
      _locale: 'en',
    },
    {
      title: 'Bear',
      art: 'ʕ•ᴥ•ʔ',
      category: 'Animal',
      _locale: 'en',
    },
    {
      title: 'Table Flip',
      art: '(╯°□°）╯︵ ┻━┻',
      category: 'Emoticon',
      _locale: 'en',
    },
    {
      title: 'Cat',
      art: '=^..^=',
      category: 'Animal',
      _locale: 'en',
    },
    {
      title: 'Spider',
      art: '/╲/\\╭(ఠఠ益ఠఠ)╮/\\╱\\',
      category: 'Animal',
      _locale: 'en',
    },
    {
      title: 'Dancing Man',
      art: 'ヽ(•‿•)ノ',
      category: 'People',
      _locale: 'en',
    },
    {
      title: 'Kirby',
      art: '(っ◕‿◕)っ',
      category: 'Gaming',
      _locale: 'en',
    },
  ];

  await AsciiArt.insertMany(asciiArts);
}

// Check if data is already seeded
async function isDataSeeded() {
  const count = await AsciiArt.countDocuments();
  if (count >= 0) {
    await AsciiArt.deleteMany({});
    await seedInitialData();
  }
}

module.exports = {
  seedInitialData,
  isDataSeeded,
};
