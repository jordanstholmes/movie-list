const $ = require('jquery');

exports.handleSearchClick = (searchStr, callback) => {
  $.ajax({
    url: 'http://localhost:8080/movie-list'
  });
}