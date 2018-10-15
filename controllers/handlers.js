const movieData = require('../database/data.js');

exports.getInitialData = (callback) => {
  callback(movieData);
};