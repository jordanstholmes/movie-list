var React = require('react');
var MovieListItem = require('./movieListItem.js');

module.exports = function MovieList(props) {
  // var movies = props.movieData.map((movie) => {
  //   return 
  // });

  return (
    <div className='container movie-list-container'>
      { props.movieData.map((movie) => <MovieListItem title={movie.title} />) }
    </div>
  );
}