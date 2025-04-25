const { errorResponder, errorTypes } = require('../../../core/errors');

const { verifyToken } = import('../../../utils/jwt');

async function authenticated(request, response, next) {
  const { access_token: accessToken } = request.cookies.access_token;
  try {
    verifyToken(accessToken);
  } catch (e) {
    switch (e.name) {
      case 'TokenExpiredError':
        throw errorResponder(errorTypes.TOKEN_EXPIRED);
      default:
        throw errorResponder(errorTypes.TOKEN_VERIFY);
    }
  }
  next();
}

module.exports = {
  authenticated,
};
