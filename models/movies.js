const movieData = require('../database/data.js');

exports.getAllMovies = (callback) => {
  callback(movieData);
};

exports.getFilteredMovies = (searchStr, callback) => {
  var filteredMovies = movieData.filter((movie) => {
    return movie.title.toUpperCase().indexOf(searchStr.toUpperCase()) !== -1;
  });

  callback(filteredMovies);
}
