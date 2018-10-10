import _ from 'lodash';
import './style.css';
import MovieList from './components/movieList.js';
var React = require('react');
var ReactDOM = require('react-dom');


function Component() {
  
  var innerText = 'I am a movie';

  return (
      <MovieList />
  );
}

ReactDOM.render(<Component />, document.getElementById('root'));