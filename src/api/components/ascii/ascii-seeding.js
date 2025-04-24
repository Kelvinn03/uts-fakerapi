const { AsciiArt } = require('../../../models');

async function seedInitialData() {
  const asciiArts = [
    {
      title: 'Cat',
      art: `
       /\\_/\
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

// Check if data is already seeded
async function isDataSeeded() {
  const count = await AsciiArt.countDocuments();
  if (count === 0) {
    seedInitialData();
  }
}

module.exports = {
  seedInitialData,
  isDataSeeded,
};
