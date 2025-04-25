module.exports = (db) =>
  db.model(
    'CreditCard',
    db.Schema({
      type: String,
      number: String,
      expiration: String,
      owner: String,
      _locale: String,
    })
  );
