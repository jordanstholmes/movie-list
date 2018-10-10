import _ from 'lodash';
import './style.css';
var React = require('react');
var ReactDOM = require('react-dom');


function Component() {
  
  var innerText = 'I am a movie';

  return <div className='hello'>{innerText}</div>
}

ReactDOM.render(<Component />, document.getElementById('root'));