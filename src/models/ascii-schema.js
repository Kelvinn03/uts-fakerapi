module.exports = (db) =>
  db.model(
    'AsciiArt',
    db.Schema({
      title: String,
      art: String,
      category: String,
    })
  );
