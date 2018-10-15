const React = require('react');
const MovieList = require('./movieList.js');
const SearchBar = require('./searchBar.js');
const Handlers = require('../../controllers/handlers.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: this.props.movieData
    }
  }

  searchClickHandler() {
    const searchBar = document.getElementsByClassName('search-bar')[0];
    const searchStr = searchBar.value;
    // console.log(this);
    Handlers.handleSearchClick(searchStr, (filteredMovies) => {
      this.setState(filteredMovies);
      console.log('I was clicked');
    });
  }

  render() {
    return (
      <div className='container app-container'>

        <header>
          <h1>MovieList</h1>
        </header>

        <SearchBar searchClickHandler={this.searchClickHandler.bind(this)}/>

        <div className='container'>
          <MovieList movieData={this.state.movieData} />
        </div>

      </div>
    );
  }

}

module.exports = App;
