const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, required: true },
  passwork: { type: String, default: ''},
  is_admin: { type: Number, default: '0'},
  fullname: { type: String, maxlength: 1000 },
  birthday: { type: String, default: '' },
  address: { type: String, default: '' },
});

module.exports = mongoose.model('User', User);
