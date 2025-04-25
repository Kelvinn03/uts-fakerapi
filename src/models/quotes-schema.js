module.exports = (db) =>
  db.model(
    'Quotes',
    db.Schema({
      content: String,
      author: String,
      category: String,
      _locale: String,
    })
  );
