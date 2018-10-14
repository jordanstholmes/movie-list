const MongoClient = require('mongodb').MongoClient;
const dummyData = require('./dummyData');
const configureMongo = require('./mongoConfig.js');
const url = 'mongodb://localhost:27017';
const dbName = 'movielist';

module.exports = (callback) => {

  MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) {
      console.log(err);
    } else {
      console.log('Connected successfully to mongo server!');

      const db = client.db(dbName);

      configureMongo(db, (results) => {
        console.log('Added to Mongo database!\n', results.ops);
        callback(db);
        // client.close();
      });
    }
  });
};
