# Plan for the project

Involves: 
- sql database
- backbone models, views, collections
- html/css
- underscore
- jquery
- authentication
- maybe grunt
- and an api 


# Ideas 



The NPR api. It's working.  You can do something like add your favorite shows and
give summaries of the last week of stories for when you've been out of the loop for
a week.   

It saves your favorites and by default will get and display summaries for the last
7 days of shows, with links to the audio. The user can specify a different date
range. Use the moment library for date parsing. 


This is the query for a week's worth of stories from All things considered: 

'http://api.npr.org/query?id=2&fields=teaser,storyDate,audio&startDate=2015-09-12&endDate=2015-09-19&dateType=story&output=JSON&apiKey='

NPR show ids: 

{
  "All Things Considered": 2,
  "Fresh Air": 13,
  "Morning Edition": 3,
  "Here and Now": 60,
  "Latino USA": 22,
  "Weekend Edition Saturday": 7,
  "Weekend Edition Sunday": 10
}



Models: ShowModel, StoryModel, AppModel

Collections: Shows (model: ShowModel)

Views: ShowView (model: ShowModel; subview of AppView)
       StoryView (model: StoryModel; subview of ShowView)
       AppView (model: AppModel)

ShowView should include functionality to remove a show.
StoryView should include functionality to remove a story after listening or if not
  interested. 

Static: pick a show from a menu and add it to user's list

Sign-in/Sign-up (sessions or tokens, maybe tokens) 

Routes: sign-in, sign-up, index (appview)


DB: MySQL with sequelize. 
  (1) Show Schema
  (2) User Schema
  

