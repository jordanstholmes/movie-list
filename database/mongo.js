const Promise = require('bluebird');
const mongodb = require('mongodb');
Promise.promisifyAll(mongodb);
// Promise.promisifyAll(mongodb.Collection.prototype);
const configureMongo = require('./mongoConfig.js');

const url = 'mongodb://localhost:27017';
const dbName = 'movielist';

module.exports = mongodb.MongoClient.connectAsync(url, { useNewUrlParser: true })
  .then(client => {
    // console.log('FIRST STEP IN PROMISE CHAIN:', module.exports);
    return client.db(dbName)
  })
  .then(db => configureMongo(db))
  .then(db => {
    // console.log('DB AFTER CONFIG:', db.databaseName);
    return db;
  })
  // .then(db => console.log('DB AFTER CONFIG:\n', db.Async))
  .catch(err => console.log(err));

// setTimeout(() => {
//   console.log('LOGGING EXPORT:', module.exports);
// }, 2000);
