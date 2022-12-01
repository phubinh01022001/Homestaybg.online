const mongoose = require('mongoose');
const sessionSecret = "mysitesessionsecret";

async function connect() {
  try {
    mongoose.connect('mongodb+srv://phubinh:phubinh123@homestay-database.l688a0b.mongodb.net/?retryWrites=true&w=majority');
    console.log('Kết nối database thành công^.^');
  } catch (error) {
    console.log('Kết nối database thất bại=.=');
  }
}

module.exports = { connect, sessionSecret };
