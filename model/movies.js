const db = require('../database/mongo.js');

module.exports = (callback) => {
  db.then(db => db.collectionAsync('movies'))
    .then(collection => collection.findAsync())
    .then(results => results.toArray())
    .then(resultsArr => console.log(resultsArr));
}