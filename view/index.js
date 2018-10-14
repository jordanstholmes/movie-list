
require('./style.css');
var MovieList = require('./components/movieList.js');
var React = require('react');
var ReactDOM = require('react-dom');
var movieData = require('../database/data.js');


function Component() {
  
  var innerText = 'I am a movie';

  return (
      <MovieList movieData={movieData}/>
  );
}

ReactDOM.render(<Component />, document.getElementById('root'));