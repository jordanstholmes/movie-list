
require('./style.css');
const React = require('react');
const ReactDOM = require('react-dom');
const movieData = require('../database/data.js');
const App = require('./components/app.js');


// function Component() {
  
//   const innerText = 'I am a movie';

//   return (
//       <MovieList movieData={movieData}/>
//   );
// }

ReactDOM.render(<App movieData={movieData}/>, document.getElementById('root'));