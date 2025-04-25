module.exports = (db) =>
  db.model(
    'Music',
    db.Schema({
      album: String,
      artist: String,
      genre: String,
      index: String,
      song_name: String,
    })
  );
