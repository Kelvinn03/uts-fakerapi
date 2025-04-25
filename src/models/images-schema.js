module.exports = (db) =>
  db.model(
    'Image',
    db.Schema({
      title: String,
      description: String,
      url: String,
      _locale: String,
    })
  );
