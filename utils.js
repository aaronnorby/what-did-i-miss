var request = require('request');
var Promise = require('bluebird');
var moment = require('moment');

var apiKey = process.env.NPRKEY;
var today = moment().format('YYYY-M-D');
var aWeekAgo = moment().subtract(7, 'days').format('YYYY-M-D');
var uriFirstPart = 'http://api.npr.org/query?id=';
//need to add flexible dates;
var uriSecondPart = '&fields=teaser,storyDate,audio&startDate=';
var uriThirdPart = '&endDate=';
var uriFourthPart = '&dateType=story&output=JSON&numResults=50&apiKey=';



module.exports.getStories = function(showId) {
  return new Promise(function(resolve, reject) {
    var uri = uriFirstPart + showId + uriSecondPart + 
      aWeekAgo + uriThirdPart + today + uriFourthPart + apiKey;
    console.log(uri);
    
    request.get({uri: uri, json: true}, function(err, response, body) {
      if (err) reject(err);
      resolve(body);
    });
  });
};



