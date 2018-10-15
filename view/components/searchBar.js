const React = require('react');

module.exports = function SearchBar(props) {
  return (
    <div>
      <input className='search-bar' type='text' placeholder='Search...'/>
      <button className='btn search-btn' onClick={props.searchClickHandler} >Go!</button>
    </div>
  );
}
