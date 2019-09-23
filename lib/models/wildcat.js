const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: {
    type: String,
    //required: true
  },
  size: {
    type: String,
    required: false,
    enum: ['Small', 'Medium', 'Large', 'Extra-large']
  },
  coloring: [{ mess: { type: String, required: true } }],
    
  weight: {
    type: Number,
    required: true,
    min: 0
  },
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