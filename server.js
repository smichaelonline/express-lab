// import modules
import express from "express";

import { students } from './data/students-data.js'

// Create Express app
const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res) {
  res.redirect('/student-directory')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/student-directory', function(req,res) {
  res.render('students/index', {
    students: students
  })
})

// Tell the app to listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000')
})