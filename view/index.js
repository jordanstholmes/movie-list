
require('./style.css');
const React = require('react');
const ReactDOM = require('react-dom');
// const Movies = require('../models/movies.js');
const App = require('./components/app.js');

const movieData = [
  {id:1, title: 'Mean Girls'},
  {id:2, title: 'Hackers'},
  {id:3, title: 'The Grey'},
  {id:4, title: 'Sunshine'},
  {id:5, title: 'Ex Machina'},
];


  ReactDOM.render(<App movieData={movieData}/>, document.getElementById('root'));
