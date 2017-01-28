var mongoose = require("mongoose");

// Create a new schema for a todo
var schema = new mongoose.Schema({
  todo  : String,
  state : String
});

module.exports = mongoose.model('urls', schema);