const dummyData = require('./dummyData.js');
const Promise = require('bluebird');

module.exports = function congfigureMongo(db) {

  // console.log('DB ENTERS CONFIG:\n', db.collectionAsync);

  return db.collectionAsync('movies')
    .then(collection => {
      db.collectionAsync('movies'); 
      collection.deleteMany();
      return collection;
    })
    .then(collection => {
      return collection.insertManyAsync(dummyData)
    })
    .then(dbResponse => {
      // console.log(dbResponse);
      // console.log('DB RIGHT BEFORE CONFIG RETURNS:', db.databaseName);
      return db;
    })
    .catch(err => console.log(err));

};
