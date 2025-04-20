const textsService = require('./texts-service');

async function getTexts(request, respone , next) {
    try {
        const {
            _quantity: quantity = 1,
            _seed: seed = null,
            _locale: locale = 'id_ID',
            _title: title = null,
        } = request.query;

        const texts = await textsService.getTexts(
            parseInt(quantity, 10),
            seed,
            locale,
            title
        );

        const responsePayload = {
            status: 'OK',
            code: 200,
            locale,
            seed,
            total: texts.length,
            data: texts,
        };

        return respone.status(200).json(responsePayload);
    } catch (error) {
        return next(error);   
    }
}

module.exports = { 
    getTexts,
};