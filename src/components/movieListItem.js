var React = require('react');

var MovieListItem = function(props) {
  return (
    <div className='list-item'>{props.title}</div>
  );
};

module.exports = MovieListItem;

