const React = require('react');
const MovieList = require('./movieList.js');
const movieData = require('../../database/data.js');
const SearchBar = require('./searchBar.js');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: movieData
    }
  }

  render() {
    return (
      <div className='container app-container'>

        <header>
          <h1>MovieList</h1>
        </header>

        <SearchBar />

        <div className='container'>
          <MovieList movieData={this.state.movieData} />
        </div>

      </div>
    );
  }

}

module.exports = App;
