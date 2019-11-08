const mongoose = require('mongoose')

const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: String,
    required: true
  },
  SectionNumber: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
  },
  Days: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
  },
  StartTime: {
      type: Number,
      minlength: 1,
      maxlength: 4,
      required: true,
  },
  RoomNumber: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true  
  },
  InstructorID: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true 
  },
  CourseID: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true 
  }

})
module.exports = mongoose.model('Section', StudentSchema)