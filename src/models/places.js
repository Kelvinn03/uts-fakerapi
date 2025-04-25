/**
 * Place model
 * Collection name: places
 */
module.exports = (db) =>
  db.model(
    'Places',
    db.Schema(
      {
        _locale: { type: String, default: 'id_ID' },
        city: String,
        country: String,
        address: String,
        latitude: Number,
        longitude: Number,
        countryCode: String,
      },
      { versionKey: false, timestamps: true }
    )
  );
