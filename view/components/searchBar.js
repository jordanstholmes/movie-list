var React = require('react');

module.exports = function SearchBar() {
  return (
    <form action='/movie-list' method='post'>
      <input className='search-bar' type='text' placeholder='Search...'/><div className='btn search-btn'>Go!</div>
    </form>
  );
}
