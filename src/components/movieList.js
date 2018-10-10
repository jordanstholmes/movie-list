var React = require('react');
var MovieListItem = require('./movieListItem.js');

module.exports = function MovieList(props) {
  return (
    <div className='container movie-list-container'>
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
    </div>
  );
}