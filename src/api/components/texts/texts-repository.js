import { Texts } from '../../../models';

async function getTexts(locale, title) {
    const query = { _locale: locale };
    if (title) {
        query.title = title;
    }

    return Texts.find(query).select(
        'title author genre content'
    );
}

export default {
    getTexts,
};