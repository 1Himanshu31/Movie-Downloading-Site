const mongoose = require('mongoose');

const DownloadSchema = new mongoose.Schema
({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  downloadDate: { type: Date, default: Date.now },
}, 
{ timestamps: true });

module.exports = mongoose.model('Download', DownloadSchema);
