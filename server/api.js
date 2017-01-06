// Express router for our API.
// Every URL starting with /api/ will be directed here
// This is a basic CRUD API for our Users MongoDB database

const express = require('express');
var router = express.Router();  // get an instance of the express Router
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/testapp');

//Define our schema for User
var User = mongoose.model('User', {
    name: String,
    desc: String });

// If the database is empty, insert some dummy data into it
User.find((err, users) => {
  if(users.length == 0) {
    var testUsers = [
      { name: 'cor', desc : 'person who does the thing'},
      { name: 'jynnie', desc : 'person who does the thing'},
      { name: 'mntan', desc : 'person who does the thing'}
    ];

    User.collection.insert(testUsers, (err, users) => { if (err) console.log(err); })
  }
});
// Now, we list all of our routes.
// Note that the actual routes you specify here will be prefixed by /api

//Routed to GET /api/users
router.get('/users', (req, res) => {
  User.find((err, users) => {
    if(err) {
      console.log(err);
      res.send([]);
    } else {
      res.json(users);
    }
  });
});

module.exports = router
