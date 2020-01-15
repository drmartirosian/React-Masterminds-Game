const mongoose = require('mongoose');
const User = mongoose.Schema;

var user = new mongoose.Schema({
  name: String,
  email: String,
  cohort: String,
  avatar: String,
  googleId: String,
}, {
  timestamps: true
});

// Ensure that initials are uppercase & not longer than 3 characters
user.pre('save', function(next) {
  this.initials = this.initials.substr(0, 3).toUpperCase();
  next();
});

module.exports = mongoose.model('user', user);