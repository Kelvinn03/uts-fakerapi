const { default: mongoose } = require('mongoose');

module.exports = (db) =>
  db.model(
    'Auths',
    db.Schema({
      id: mongoose.ObjectId,
      username: String,
      password: String,
    })
  );
