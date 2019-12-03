/**
*  Developer model
*  Describes the characteristics of each attribute in a developer  resource.
*
* @author Maha Lakshmi Kongari <mahalakshmi.kongari@gmail.com>
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  
  SchoolNumber: {
    type: String,
    minlength: 2,
    maxlength: 2,
    required: false,
    default: 'School Number'
  },
  CourseNumber: {
    type: String,
    minlength: 3,
    maxlength: 3,
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
      type: Boolean,
      minlength: 1,
      maxlength: 3,
      required: true,
  },
  inSummer: {
    type: Boolean,
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
  },
  Department: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true
  }

})

module.exports = mongoose.model('Course', CourseSchema)
// the model Developer is for the developers collection in the database.