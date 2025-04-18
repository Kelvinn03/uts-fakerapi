const addressService = require('./address-service');

async function getAddresses(request, response, next) {
  try {
    const {
      _quantity = 1,
      _seed = null,
      _locale = 'id_ID',
      _country_code = null,
    } = request.query;

    const addresses = await addressService.getAddresses(
      parseInt(_quantity),
      _seed,
      _locale,
      _country_code
    );

    const responsePayload = {
      status: 'OK',
      code: 200,
      locale: _locale,
      seed: _seed,
      total: addresses.length,
      data: addresses,
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getAddresses,
};
