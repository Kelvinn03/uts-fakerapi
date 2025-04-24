/**
 * Text model
 * Collection name: texts
 */
module.exports = (db) =>
  db.model(
    'Texts',
    db.Schema(
      {
        _locale: { type: String, default: 'id_ID' },
        title: String,
        author: String,
        content: String,
      },
      { versionKey: false, timestamps: true }
    )
  );
