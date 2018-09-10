import React, { Component } from 'react';
import styled from 'styled-components';

const MoviePageWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: hsla(0, 0%, 75%, 0.6);
  z-index: 8;

  .movie-page-modal {
    margin: auto;
    width: 80%;
    height: 80%;
    background-color: #333;
  }

  .movie-header {
    width: 100%;
    height: 20%;
  }
`;

class MoviePage extends Component {
  state = {
    movie: null
  };

  componentWillMount() {
    const apiKey = '1c83cc9fe4d7ead3b22e402e6dd9b80f';
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.props.movie
      }?api_key=${apiKey}&language=en-US`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({ movie: data });
      });
  }
  render() {
    if (this.state.movie) {
      const { title, poster_path } = this.state.movie;
      const { close, mediaPath } = this.props;
      return (
        <MoviePageWrapper onClick={close}>
          <div className="movie-page-modal">
            <div className="movie-header" />
            <div className="movie-main">
              <img src={mediaPath + poster_path} alt="" />
            </div>
          </div>
        </MoviePageWrapper>
      );
    } else {
      return <div />;
    }
  }
}

export default MoviePage;
