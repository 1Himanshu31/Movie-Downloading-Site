const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema
({
  rating: { type: String, required: true },
  description: { type: String },
}, 
{ timestamps: true });

module.exports = mongoose.model('Rating', RatingSchema);
