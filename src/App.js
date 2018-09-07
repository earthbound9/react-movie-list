import React, { Component } from 'react';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MovieList />
      </div>
    );
  }
}

export default App;
