const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Home = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String},
    description: { type: String, maxlength: 1000 },
    image: { type: String},
    price: { type: Number },
    imageID: { type: String },
    dateID: { type: Number},
    area: { type: Number, default: '' },
    slug: { type: String, slug: 'name', unique: true },
    add: { type: String},
    addDetail: { type: String},
  },
  {
    timestamps: true,
  },
);

// Add plugins
mongoose.plugin(slug);
Home.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Home', Home);
