/**
*  Developer controller
*  Handles requests related to developer resources.
*
* @author MahaLakshmi Kongari<S536844@nwmissouri.edu>
*
*/
const express = require('express')
const api = express.Router()
const LOG = require('../utils/logger.js')
const Model = require('../models/course.js')
<<<<<<< HEAD
const find = require('lodash.find')
const LOG = require('../utils/logger.js')
=======
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
const notfoundstring = 'Could not find course with id='

// RESPOND WITH JSON DATA  --------------------------------------------

// GET all JSON
<<<<<<< HEAD

  api.get('/findall', (req, res) => {
=======
api.get('/findall', (req, res) => {
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
  LOG.info(`Handling /findall ${req}`)
  Model.find({}, (err, data) => {
    if (err) { return res.end('Error finding all') }
    res.json(data)
  })
})


// GET one JSON by ID
<<<<<<< HEAD

  api.get('/findone/:id', (req, res) => {
=======
api.get('/findone/:id', (req, res) => {
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
  LOG.info(`Handling /findone ${req}`)
  const id = parseInt(req.params.id)
  Model.find({ _id: id }, (err, results) => {
    if (err) { return res.end(`notfoundstring ${id}`) }
    res.json(results[0])
  })
})

// RESPOND WITH VIEWS  --------------------------------------------

<<<<<<< HEAD
// GET to this controller base URI (the default)

  api.get('/', (req, res) => {
=======
// GET /
api.get('/', (req, res) => {
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
  LOG.info(`Handling GET / ${req}`)
  Model.find({}, (err, data) => {
    if (err) { return res.end('Error') }
    res.locals.courses = data
    res.render('course/index.ejs')
  })
})


// GET create
<<<<<<< HEAD

  api.get('/create', (req, res) => {
=======
api.get('/create', (req, res) => {
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
  LOG.info(`Handling GET /create ${req}`)
  Model.find({}, (err, data) => {
    if (err) { return res.end('error on create') }
    res.locals.courses = data
    res.locals.course = new Model()
    res.render('course/create')
  })
})

// GET /delete/:id
<<<<<<< HEAD
  api.get('/delete/:id', (req, res) => {
=======
api.get('/delete/:id', (req, res) => {
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
  LOG.info(`Handling GET /delete/:id ${req}`)
  const id = parseInt(req.params.id)
  Model.find({ _id: id }, (err, results) => {
    if (err) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR ${JSON.stringify(results)}`)
    res.locals.course = results[0]
<<<<<<< HEAD
    return res.render('course/delete')
=======
    return res.render('course/delete.ejs')
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
  })
})

// GET /details/:id

api.get('/details/:id', (req, res) => {
  LOG.info(`Handling GET /details/:id ${req}`)
  const id = parseInt(req.params.id)
  Model.find({ _id: id }, (err, results) => {
    if (err) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR ${JSON.stringify(results)}`)
    res.locals.course = results[0]
<<<<<<< HEAD
    return res.render('course/details')
=======
    return res.render('course/details.ejs')
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
  })
})

// GET one

api.get('/edit/:id', (req, res) => {
  LOG.info(`Handling GET /edit/:id ${req}`)
  const id = parseInt(req.params.id)
  Model.find({ _id: id }, (err, results) => {
    if (err) { return res.end(notfoundstring) }
    LOG.info(`RETURNING VIEW FOR${JSON.stringify(results)}`)
    res.locals.course = results[0]
<<<<<<< HEAD
    return res.render('course/edit')
=======
    return res.render('course/edit.ejs')
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
  })
})


// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

<<<<<<< HEAD
// POST new

=======
// POST /save
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
api.post('/save', (req, res) => {
  LOG.info(`Handling POST ${req}`)
  LOG.debug(JSON.stringify(req.body))
  const item = new Model()
  LOG.info(`NEW ID ${req.body._id}`)
  item._id = parseInt(req.body._id)
<<<<<<< HEAD
  item.SchoolNumber = req.body.schoolNumber
  item.CourseNumber = req.body.courseNumber
=======
  item.SchoolNumber = req.body.SchoolNumber
  item.CourseNumber = req.body.CourseNumber
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
  item.Name = req.body.Name
  item.inSpring = req.body.inSpring
  item.inSummer = req.body.inSummer
  item.inFall = req.body.inFall
<<<<<<< HEAD
  item.Department = req.body.Department
  //res.send(`THIS FUNCTION WILL SAVE A NEW course ${JSON.stringify(item)}`)
=======
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
  item.save((err) => {
    if (err) { return res.end('ERROR: item could not be saved') }
    LOG.info(`SAVING NEW item ${JSON.stringify(item)}`)
    return res.redirect('/course')
  })
})

<<<<<<< HEAD
// POST update with id

=======
// POST save with id
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
api.post('/save/:id', (req, res) => {
  LOG.info(`Handling SAVE request ${req}`)
  const id = parseInt(req.params.id)
  LOG.info(`Handling SAVING ID=${id}`)
  Model.updateOne({ _id: id },
    { // use mongoose field update operator $set
      $set: {
<<<<<<< HEAD
        SchoolNumber: req.body.schoolNumber,
        CourseNumber: req.body.courseNumber,
=======
        SchoolNumber: req.body.SchoolNumber,
        CourseNumber: req.body.CourseNumber,
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
        Name: req.body.Name,
        inSpring: req.body.inSpring,
        inSummer: req.body.inSummer,
        inFall: req.body.inFall,
<<<<<<< HEAD
        Department: req.body.Department
=======
>>>>>>> 034f53212f483766d91d08c84f8038da52836e2a
      }
    },
    (err, item) => {
      if (err) { return res.end(notfoundstring) }
      LOG.info(`ORIGINAL VALUES ${JSON.stringify(item)}`)
      LOG.info(`UPDATED VALUES: ${JSON.stringify(req.body)}`)
      LOG.info(`SAVING UPDATED item ${JSON.stringify(item)}`)
      return res.redirect('/course')
    })
})

// DELETE id (uses HTML5 form method POST)

api.post('/delete/:id', (req, res) => {
  LOG.info(`Handling DELETE request ${req}`)
  const id = parseInt(req.params.id)
  LOG.info(`Handling REMOVING ID=${id}`)
  Model.remove({ _id: id }).setOptions({ single: true }).exec((err, deleted) => {
    if (err) { return res.end(notfoundstring) }
    console.log(`Permanently deleted item ${JSON.stringify(deleted)}`)
    return res.redirect('/course')
  })
})


module.exports = api