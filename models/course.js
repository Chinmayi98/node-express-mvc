const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: String,
    required: true
  },
  SchoolNumber: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: false,
    default: 'School Number'
  },
  CourseNumber: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Course Number'
  },
  Name: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true 
  },
  inSpring: {
      type: Number,
      minlength: 1,
      maxlength: 3,
      required: true,
  },
  inSummer: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true  
  },
  inFall: {
    type: Boolean,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true   
})
