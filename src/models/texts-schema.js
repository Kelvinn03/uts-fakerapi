module.exports = (db) =>
  db.model(
    'Texts',
    db.Schema({
      title: String,
      author: String,
      genre: String,
      content: String,
      _locale: String,
    })
  );
