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
* Show.create({showname: 'Test Show'})
*   .then(function(show) {
*     Story.create({url: 'npr.test.com', teaser: 'a great story', storyDate: '2015-08-02', mp3Url: 'testaudio.com', ShowId: show.id});
* });
*/


