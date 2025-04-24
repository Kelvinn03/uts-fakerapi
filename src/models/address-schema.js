module.exports = (db) =>
  db.model(
    'Address',
    db.Schema({
      streetAddress: String,
      streetName: String,
      buildingName: String,
      city: String,
      postCode: String,
      country: String,
      countryCode: String,
      latitude: Number,
      longitude: Number,
      _locale: String,
    })
  );
