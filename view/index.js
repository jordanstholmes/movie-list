
require('./style.css');
const React = require('react');
const ReactDOM = require('react-dom');
const Movies = require('../models/movies.js');
const App = require('./components/app.js');


Movies.getAllMovies((movieData) => {
  ReactDOM.render(<App movieData={movieData}/>, document.getElementById('root'));
});