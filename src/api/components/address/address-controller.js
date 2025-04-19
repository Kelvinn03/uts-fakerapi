const addressService = require('./address-service');

async function getAddresses(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
      _country_code: countryCode = null,
    } = request.query;

    const addresses = await addressService.getAddresses(
      parseInt(quantity, 10),
      seed,
      locale,
      countryCode
    );

    const responsePayload = {
      status: 'OK',
      code: 200,
      locale,
      seed,
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
