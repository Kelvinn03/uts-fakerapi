module.exports = (db) =>
  db.model(
    'Funfact',
    db.Schema({
      fact: String,
      year_found: Number,
      source: String,
      category: String,
    })
  );
