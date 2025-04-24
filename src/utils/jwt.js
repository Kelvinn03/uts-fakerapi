const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

function signToken(id) {
  const signedToken = jwt.sign({}, secretKey, {
    expiresIn:
      Math.floor(Date.now() / 1000) +
      60 * parseInt(process.env.ACCESS_TOKEN_TTL || 5, 10),
    subject: id,
  });
  return signedToken;
}

function verifyToken(token) {
  return jwt.verify(token, secretKey);
}

module.exports = {
  signToken,
  verifyToken,
};
