const musicService = require('./music-service');

async function getMusic(request, response, next) {
  try {
    const {
      _quantity: quantity = 1,
      _seed: seed = null,
      _locale: locale = 'id_ID',
    } = request.query;

    const musics = await musicService.getMusic(
      parseInt(quantity, 10),
      seed,
      locale
    );

    const responsePayload = {
      status: 'OK',
      code: 200,
      locale,
      seed,
      total: musics.length,
      data: musics,
    };

    return response.status(200).json(responsePayload);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getMusic,
};
