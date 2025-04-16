module.exports = (db) =>
  db.model(
    'Books',
    db.Schema({
      title: String,
      author: String,
      genre: String,
      description: String,
      isbn: String,
      image: String,
      publishedDate: Date,
      publisher: String,
    })
  );
