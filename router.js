var router = require('express').Router();

var db = require('./db/db.js');
var utils = require('./utils.js');

/* Routes: 
* adding a show to the collection (post),
* getting missed stories from all shows (get)
* sign-in and sign-up
* The Story table should really just be for saved stories
*/

// root route
router.get('/', function(req, res) {
  res.sendFile('./public/index.html');
});


// use request to actually get the stories from past week of a given show
router.get('/stories/:show_id', function(req, res) {
  utils.getStories(req.params.show_id).then(function(body) {
    res.type('application/json');
    res.status(200);
    // sends the story array from the npr api response body
    res.send(body.list.story);
  })
  .catch(function(err) {
    res.sendStatus(500);
    console.log('error getting shows: ', err);
  });
});

// to get all saved stories from the db
router.get('/stories/saved', function(req, res) {
  db.Story.findAll({
    include: [db.Show]
  })
    .then(function(stories) {
      res.status(200);
      res.send(stories);
    });
});

// allow saving of stories
router.post('/stories/');

// add a show to the database
router.post('/shows', function(req, res) {
  var show = req.body.title;
  db.Show.create({showname: req.body.showname})
    .then(function(show) {
      res.sendStatus(201);
    })
    .catch(function(err) {
      console.log('error saving show to db: ', err);
      res.sendStatus(500);
    });
});

// delete stories when listened to/boring
router.delete('/stories/:id');  // get id with req.params.id

// remove a show from the user's list
router.delete('/shows');


module.exports = router;
