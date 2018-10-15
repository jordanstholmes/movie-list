
require('./style.css');
const React = require('react');
const ReactDOM = require('react-dom');
const Handler = require('../controllers/handlers.js');
const App = require('./components/app.js');


Handler.getInitialData((movieData) => {
  ReactDOM.render(<App movieData={movieData}/>, document.getElementById('root'));
});