var Sequelize = require('sequelize');

sequelize = new Sequelize('npr', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports.Show = Show = sequelize.define('Show', {
  showname: Sequelize.STRING
});

module.exports.Story = Story = sequelize.define('Story', {
  url: Sequelize.STRING,
  teaser: Sequelize.STRING,
  storyDate: Sequelize.DATEONLY,
  mp3Url: Sequelize.STRING

});

Story.belongsTo(Show);
Show.hasMany(Story, {as: 'Story'});

Story.sync();  // pass in {force: true} to drop and recreate table
Show.sync();

/*
* Test if this works by creating some rows 
*
* Show.create({showname: 'All things considered'});
* Story.create({url: 'www.npr.com', teaser: 'a great story', storyDate: '2015-08-01', mp3Url: 'www.mp3.com'});
*
* Show.create({showname: 'Morning Edition'})
*   .then(function(show) {
*     Story.create({url: 'www', teaser: 'another story', storyDate: '2015-08-02', mpsUrl: 'www', ShowId: show.id});
* });
*/


