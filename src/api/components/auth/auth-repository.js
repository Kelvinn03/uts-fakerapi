const { default: mongoose } = require('mongoose');
const { Auths } = require('../../../models');

async function getUser(id) {
  return Auths.findOne({ _id: new mongoose.Types.ObjectId(id) }).select(
    'id username'
  );
}
async function getCredentialByUserName(username) {
  return Auths.findOne({ username }).select('id password');
}
async function createUser(username, password) {
  const auth = new Auths({
    username,
    password,
  });
  const saved = await auth.save();
  return saved;
}

module.exports = {
  getUser,
  getCredentialByUserName,
  createUser,
};
