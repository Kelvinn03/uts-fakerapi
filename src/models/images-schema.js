module.exports = (db) =>
  db.model(
    'Images',
    db.Schema({
      title: String,
      description: String,
      url: String,
    })
  );
