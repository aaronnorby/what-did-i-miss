var request = require('request');
var Promise = require('bluebird');


var apiKey = process.env.NPRKEY;
var uriFirstPart = 'http://api.npr.org/query?id=';
//need to add flexible dates;
var uriSecondPart = '&fields=teaser,storyDate,audio&startDate=2015-09-12&endDate=2015-09-19&dateType=story&output=JSON&apiKey=';


// module.exports.getStories = function(showId) {
//   var uri = uriFirstPart + showId + uriSecondPart + apiKey;
//   return getAsync({uri: uri, json: true});
// };


module.exports.getStories = function(showId) {
  return new Promise(function(resolve, reject) {
    var uri = uriFirstPart + showId + uriSecondPart + apiKey;
    request.get({uri: uri, json: true}, function(err, response, body) {
      //console.log(body);
      if (err) reject(err);
      resolve(body);
    });
  });
};



