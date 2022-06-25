const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  country: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  id:{
    type:String,
    required:true,
    min:6,
  },
  
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  relationship_status: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }],
  contact: contactSchema,
});

module.exports = mongoose.model('User', userSchema);