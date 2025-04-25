const textService = require('./text-service');

async function getTexts(req, res, next) {
  try {
    const {
      _quantity: qty = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
    } = req.query;

    const data = await textService.getTexts(parseInt(qty, 10), seed, locale);

    res.status(200).json({
      status: 'OK',
      code: 200,
      locale,
      seed,
      total: data.length,
      data,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { getTexts };
