/**
*  Developer controller
*  Handles requests related to developer resources.
*
* @author MahaLaksmi Kongari<S536844@nwmissouri.edu>
*
*/
const express = require('express')
const api = express.Router()
<<<<<<< HEAD
const CourseModel = require('../models/course.js')
const LOG = require('../utils/logger.js')
=======
const Model = require('../models/course.js')
const find = require('lodash.find')
>>>>>>> 5f07eb9165f520dd7bdf884908e4fb2598acfd4f
const notfoundstring = 'Could not find course with id='


// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
api.get('/findall', (req, res) => {
<<<<<<< HEAD
  LOG.info(`Handling /findall ${req}`)
  CourseModel.find({}, (err, data) => {
    if (err) { return res.end('Error finding all') }
    res.json(data)
  })
=======
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.courses.query
  res.send(JSON.stringify(data))
>>>>>>> 5f07eb9165f520dd7bdf884908e4fb2598acfd4f
})

// GET one JSON by ID
api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
<<<<<<< HEAD
  CourseModel.find({ _id: id }, (err, results) => {
    if (err) { return res.end(`notfoundstring ${id}`) }
    res.json(results[0])
  })
=======
  const data = req.app.locals.courses.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
>>>>>>> 5f07eb9165f520dd7bdf884908e4fb2598acfd4f
})

// RESPOND WITH VIEWS  --------------------------------------------

// GET to this controller base URI (the default)
api.get('/', (req, res) => {
<<<<<<< HEAD
  LOG.info(`Handling GET / ${req}`)
  CourseModel.find({}, (err, data) => {
    if (err) { return res.end('Error') }
    res.locals.courses = data
    res.render('course/index.ejs')
=======
  res.render('course/index.ejs', {
    courses: req.app.locals.courses.query
>>>>>>> 5f07eb9165f520dd7bdf884908e4fb2598acfd4f
  })
})

// GET create
api.get('/create', (req, res) => {
<<<<<<< HEAD
  LOG.info(`Handling GET /create ${req}`)
  CourseModel.find({}, (err, data) => {
    if (err) { return res.end('error on create') }
    res.locals.courses = data
    res.locals.course = new CourseModel()
    res.render('course/create')
=======
  res.render('course/create', {
    courses: req.app.locals.courses.query,
    course: new Model()
>>>>>>> 5f07eb9165f520dd7bdf884908e4fb2598acfd4f
  })
})

// GET /delete/:id
api.get('/delete/:id', (req, res) => {
<<<<<<< HEAD
  LOG.info(`Handling GET /delete/:id ${req}`)
  const id = parseInt(req.params.id)
  CourseModel.find({ _id: id }, (err, results) => {
    if (err) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR ${JSON.stringify(results)}`)
    res.locals.course = results[0]
    return res.render('course/delete')
=======
  const id = parseInt(req.params.id)
  const data = req.app.locals.courses.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/delete', {
    course: item
>>>>>>> 5f07eb9165f520dd7bdf884908e4fb2598acfd4f
  })
})

// GET /details/:id
api.get('/details/:id', (req, res) => {
  const id = parseInt(req.params.id)
<<<<<<< HEAD
  CourseModel.find({ _id: id }, (err, results) => {
    if (err) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR ${JSON.stringify(results)}`)
    res.locals.course = results[0]
    return res.render('course/details')
=======
  const data = req.app.locals.courses.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/details', {
    course: item
>>>>>>> 5f07eb9165f520dd7bdf884908e4fb2598acfd4f
  })
})
// GET one
api.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id)
<<<<<<< HEAD
  CourseModel.find({ _id: id }, (err, results) => {
    if (err) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR${JSON.stringify(results)}`)
    res.locals.course = results[0]
    return res.render('course/edit')
=======
  const data = req.app.locals.courses.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/edit', {
    course: item
>>>>>>> 5f07eb9165f520dd7bdf884908e4fb2598acfd4f
  })
})

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', (req, res) => {
  console.info(`Handling POST ${req}`)
  console.debug(JSON.stringify(req.body))
<<<<<<< HEAD
  const item = new CourseModel()
  console.info(`NEW ID ${req.body._id}`)
  item._id = parseInt(req.body._id)
  item.schoolNumber = req.body.schoolNumber
  item.courseNumber = req.body.courseNumber
  item.Name = req.body.Name
  item.inSpring = req.body.inSpring
  item.inSummer = req.body.inSummer
  item.inFall = req.body.inFall
  item.Major = req.body.Major
  //res.send(`THIS FUNCTION WILL SAVE A NEW course ${JSON.stringify(item)}`)
  item.save((err) => {
    if (err) { return res.end('ERROR: item could not be saved') }
    LOG.info(`SAVING NEW item ${JSON.stringify(item)}`)
    return res.redirect('/course')
  })
=======
  const item = new Model()
  console.info(`NEW ID ${req.body._id}`)
  item._id = parseInt(req.body._id)
  item.email = req.body.email
  item.given = req.body.given
  item.family = req.body.family
  item.city = req.body.city
  item.state = req.body.state
  item.zip = req.body.zip
  item.country = req.body.country
  res.send(`THIS FUNCTION WILL SAVE A NEW course ${JSON.stringify(item)}`)
>>>>>>> 5f07eb9165f520dd7bdf884908e4fb2598acfd4f
})

// POST update with id
api.post('/save/:id', (req, res) => {
  console.info(`Handling SAVE request ${req}`)
  const id = parseInt(req.params.id)
<<<<<<< HEAD
  LOG.info(`Handling SAVING ID=${id}`)
  CourseModel.updateOne({ _id: id },
    { // use mongoose field update operator $set
      $set: {
        SchoolNumber: req.body.SchoolNumber,
        CourseNumber: req.body.CourseNumber,
        Name: req.body.Name,
        inSpring: req.body.inSpring,
        inSummer: req.body.inSummer,
        inFall: req.body.inFall,
        Department: req.body.Department
      }
    },
    (err, item) => {
      if (err) { return res.end(notfoundstring) }
      LOG.info(`ORIGINAL VALUES ${JSON.stringify(item)}`)
      LOG.info(`UPDATED VALUES: ${JSON.stringify(req.body)}`)
      LOG.info(`SAVING UPDATED item ${JSON.stringify(item)}`)
      return res.redirect('/course')
    })
=======
  console.info(`Handling SAVING ID=${id}`)
  res.send(`THIS FUNCTION WILL SAVE CHANGES TO AN EXISTING course with id=${id}`)
>>>>>>> 5f07eb9165f520dd7bdf884908e4fb2598acfd4f
})

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', (req, res) => {
  console.info(`Handling DELETE request ${req}`)
  const id = parseInt(req.params.id)
<<<<<<< HEAD
  LOG.info(`Handling REMOVING ID=${id}`)
  CourseModel.remove({ _id: id }).setOptions({ single: true }).exec((err, deleted) => {
    if (err) { return res.end(notfoundstring) }
    console.log(`Permanently deleted item ${JSON.stringify(deleted)}`)
    return res.redirect('/course')
  })
})

module.exports = api
=======
  console.info(`Handling REMOVING ID=${id}`)
  res.send(`THIS FUNCTION WILL DELETE FOREVER THE EXISTING course with id=${id}`)
})

module.exports = api
>>>>>>> 5f07eb9165f520dd7bdf884908e4fb2598acfd4f
