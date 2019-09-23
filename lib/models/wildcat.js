const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: false,
    enum: ['small', 'medium', 'large', 'extra-large']
  },
  weight: {
    type: Number,
    required: true
  },
  coloring: [{
    type: String,
    required: true
  }],
  details: {
    friendly: {
      type: Boolean,
      default: false
    },
    funFact: {
      type: String,
      required: false
    }
  }
});

module.exports = mongoose.model('Wildcat', schema);