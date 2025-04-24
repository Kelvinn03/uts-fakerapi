module.exports = (db) =>
  db.model(
    'People',
    db.Schema({
      firstname: String,
      lastname: String,
      email: String,
      phone: Number,
      birthday: Date,
      gender: String,
      address: {
        street: String,
        streetName: String,
        buildingNumber: Number,
        city: String,
        zipcode: Number,
        country: String,
        country_code: String,
        latitude: Number,
        longitude: Number,
      },
    })
  );
