const authRepository = require('./auth-repository');
const { hashPassword, passwordMatched } = require('../../../utils/password');

async function verifyCredentials(username, password) {
  const { password: userPassword, _id: id } =
    await authRepository.getCredentialByUserName(username);
  const isMatched = await passwordMatched(password, userPassword);
  if (isMatched) {
    return id.toString();
  }
  return false;
}

async function getUser(id) {
  const user = await authRepository.getUser(id);
  return user.username;
}

async function createUser(username, password) {
  const user = await authRepository.getCredentialByUserName(username);
  if (user) {
    throw new Error('user already exists');
  }
  const hashedPassword = await hashPassword(password);
  return authRepository.createUser(username, hashedPassword);
}

async function refreshToken(accessToken) {
  const token = accessToken;
  return token;
}

module.exports = {
  verifyCredentials,
  createUser,
  getUser,
  refreshToken,
};
