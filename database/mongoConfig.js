const dummyData = require('./dummyData.js');

module.exports  = function congfigureMongo(db, callback) {
  const collection = db.collection('movies');

  collection.insertMany(dummyData, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      callback(results);
    }
  });
}

