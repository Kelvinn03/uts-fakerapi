const placeService = require('./place-service');

async function getPlaces(req, res, next) {
  try {
    const {
      _quantity: qty = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
      _country_code: countryCode = null,
    } = req.query;

    const data = await placeService.getPlaces(
      parseInt(qty, 10),
      seed,
      locale,
      countryCode
    );

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

module.exports = { getPlaces };
