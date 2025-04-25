const peopleService = require('./people-service');

async function getPeople(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
    } = request.query;

    const peoples = await peopleService.getPeople(
      parseInt(quantity, 10),
      seed,
      locale
    );

    const responsePayload = {
      status: 'OK',
      code: 200,
      locale,
      seed,
      total: peoples.length,
      data: peoples,
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getPeople,
};
