import _ from 'lodash';
import './style.css';


function component() {
  let element = document.createElement('div');

  let arrayWords = ['hello', 'there'];

  element.innerHTML = _.join([...arrayWords], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());