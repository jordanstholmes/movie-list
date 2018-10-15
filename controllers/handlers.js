const Movies = require('../models/movies.js');

exports.handleSearchClick = (searchStr, callback) => {
  Movies.getFilteredMovies(searchStr, callback);
}