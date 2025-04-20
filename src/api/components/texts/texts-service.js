const textsRepository = require('./texts-repository');
const getRandomIds = require('../../../utils/randomizer');

async function getTexts(quantity, seed, locale, title) {
    const texts = await textsRepository.getTexts(locale, title);
    const ids = texts.map((_, index) => index);
    const randomIds = getRandomIds(seed, ids);

    return randomIds.slice(0, quantity).map((id) => texts[id]);
}

module.exports = { 
    getTexts 
};