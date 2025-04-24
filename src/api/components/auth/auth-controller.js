const authService = require('./auth-service');
const jwt = require('../../../utils/jwt');

async function me(request, response, next) {
  try {
    const { access_token: accessToken } = request.cookies;
    const tokens = jwt.verifyToken(accessToken);
    const user = await authService.getUser(tokens.sub);
    return response.status(200).json({
      message: 'user found',
      user,
    });
  } catch (error) {
    return next(error);
  }
}

async function login(request, response, next) {
  try {
    const { username, password } = request.body;
    if (!username || !password) {
      return response.status(400).json({
        message: 'username and password are required',
      });
    }
    const validCredentials = await authService.verifyCredentials(
      username,
      password
    );
    if (validCredentials !== false) {
      const signToken = jwt.signToken(validCredentials);
      response.cookie('access_token', signToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
      return response.status(200).json({
        message: 'login success',
      });
    }
    throw new Error('invalid credentials');
  } catch (error) {
    return next(error);
  }
}

function register(request, response, next) {
  try {
    const { username, password } = request.body;
    if (!username || !password) {
      return response.status(400).json({
        message: 'username and password are required',
      });
    }
    const user = authService.createUser(username, password);
    return response.status(200).json({
      message: 'user created',
      user,
    });
  } catch (error) {
    return next(error);
  }
}

function refresh(request, response) {
  const { accessToken } = request;
  authService.refreshToken(accessToken);
  return response.status(200);
}

module.exports = {
  me,
  login,
  register,
  refresh,
};
