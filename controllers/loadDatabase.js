const getMoviesData = require('../model/movies.js');

module.exports = (callback) => {
  getMoviesData(callback);
};