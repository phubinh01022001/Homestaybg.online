const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const New = new Schema({
  tittle: { type: String, required: true },
  content: { type: String, default: ''},
});

module.exports = mongoose.model('New', New);
