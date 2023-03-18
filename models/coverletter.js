const mongoose = require('mongoose');

const coverLetterSchema = new mongoose.Schema({
  title: String,
  content: String,
  cv: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CV'
  }
});

module.exports = mongoose.model('CoverLetter', coverLetterSchema);
