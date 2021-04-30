const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const monsterSchema = new Schema({
  name: { type: String, required: true},
  //weaknesses: {type: Array, required: true },
  //locations: {type: Array, required: true },
})

const Monster = mongoose.model('Monster', monsterSchema);

module.exports = Monster;