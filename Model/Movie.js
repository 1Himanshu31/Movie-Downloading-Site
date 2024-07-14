const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema
({
  title: 
  { 
  type: String, 
  required: true 
  },
  description:
  { 
    type: String, 
    required: true 
  },
  releaseDate: 
  { 
    type: Date, 
    required: true 
  },
  duration: 
  { 
    type: Number, 
    required: true 
  },
  language: 
  { 
    type: String, 
    required: true 
  },
  country: 
  { 
    type: String, 
    required: true 
  },
  genre:
  { 
    type: String, 
    required: true 
  },
  director:
  { 
    type: String,
    required: true 
  },
  rating: 
  { 
    type: mongoose.Schema.Types.ObjectId, ref: 'Rating' 
  },
  posterUrl: 
  {
     type: String 
  },
  trailerUrl: 
  { 
    type: String 
  },
}, 
{ 
  timestamps: true 
});

module.exports = mongoose.model('Movie', MovieSchema);
