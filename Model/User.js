const mongoose = require('mongoose');

const userSchema = new mongoose.Schema
({
  username: 
  {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: 
  {
    type: String,
    required: true,
  },
  email: 
  {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: 
  {
    type: String,
    required: true,
    trim: true,
  },
  lastName: 
  {
    type: String,
    required: true,
    trim: true,
  },
  dateOfBirth: 
  {
    type: Date,
    required: true,
  },
  role: 
  {
    type: String,
    enum: ['user', 'admin'], 
    default: 'user',
  },
}, 
{ timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;