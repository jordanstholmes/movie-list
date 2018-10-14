// const db = require('../database/mongo.js');

module.exports = function searchClickHandler(db) {
  // console.log('IS THIS DATABASE LIVE:', db);
  db.collection('movies').find().toArray(function(err, items) {
    console.log('QUERIED THE DB:', items);
  });
};