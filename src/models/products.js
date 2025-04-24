module.exports = (db) =>
  db.model(
    'Products',
    db.Schema(
      {
        _locale: { type: String, default: 'id_ID' },
        name: String,
        description: String,
        price: Number,
        vat: Number,
        image: String,
      },
      { versionKey: false, timestamps: true } // remove __v, add createdAt/updatedAt
    )
  );
