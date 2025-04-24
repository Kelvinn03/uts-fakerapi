const productService = require('./product-service');

async function getProducts(req, res, next) {
  try {
    const {
      _quantity: qty = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
    } = req.query;

    const data = await productService.getProducts(
      parseInt(qty, 10),
      seed,
      locale
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

module.exports = { getProducts };
