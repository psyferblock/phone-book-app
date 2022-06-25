const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const contactSchema =new Schema({
    id:{
        type:String,
        required:true,
        min:6,
      },
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
      number: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
      },
     location:{
        type:String,
        required:false,

      },
      date: {
        type: Date,
        default: Date.now,
      },
      relationship_status: [{
        type: String,
        required:false,
        ref: 'status',
      }],
})
module.exports = mongoose.model('Contact', contactSchema);
