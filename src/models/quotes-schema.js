const { Collection } = require("mongoose");

module.exports = (db) =>
  db.model(
    'Quote',
    db.Schema({
      content: String,
      author: String,
      category: String,
    }, {
      Collection: 'quotes'
    })
  );
