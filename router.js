var router = require('express').Router();

var db = require('./db/db.js');
var utils = require('./utils.js');

/* Routes: 
* adding a show to the collection (post),
* getting missed stories from all shows (get)
* sign-in and sign-up
* The Story table should really just be for saved stories
*/

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

router.post('/shows', function(req, res) {
  var show = req.body.title;
  


  console.log('show ' + show + ' posted');
  res.sendStatus(201);
});

router.delete('/stories/:id');  // get id with req.params.id

router.delete('/shows');


module.exports = router;
