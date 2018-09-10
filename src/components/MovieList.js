import React, { Component } from 'react';
import styled from 'styled-components';
import MoviePage from './MoviePage';
import { IoMdStar as IconStar } from 'react-icons/io';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 50px;
`;

const MovieWrapper = styled.div`
  display: flex;
  width: 500px;
  height: 400px;
  margin: 2rem;
  background-color: hsl(0, 0%, 12%);
  cursor: pointer;
  position: relative;

  .click-area {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 5;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .description {
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    background-color: #706d6d99;
    padding: 10px 0;

    &_top {
      width: 100%;

      &_title {
        font-family: 'Raleway', sans-serif;
        margin-bottom: 15px;
        padding: 0 5px;
        text-align: center;
        line-height: 1.25;
        font-weight: 700;
      }

      & h4 {
        margin-bottom: 10px;
      }

      &_overview {
        background-color: #333;
        padding: 5px 10px;
      }
    }
  }

  .title {
    font-size: 0.9rem;
  }

  .overview {
    padding: 0 10px;
    line-height: 1.25;
    align-self: flex-start;
  }

  .stats {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    &_rating {
      display: flex;
      align-items: center;
    }
  }

  .icon-star {
    font-size: 20px;
    color: yellow;
    margin-left: 10px;
  }
`;

class MovieList extends Component {
  state = {
    list: [],
    posterPath: 'https://image.tmdb.org/t/p/w300',
    movieSelected: false,
    movieId: 0
  };

  componentDidMount() {
    const apiKey = '1c83cc9fe4d7ead3b22e402e6dd9b80f';
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({ list: data.results });
        console.log(data);
      });
  }

  handleChooseMovie = e => {
    const movieId = e.target.dataset.id;

    this.setState((preState, props) => ({
      movieSelected: !preState.movieSelected,
      movieId
    }));
  };

  handleCloseModal = e => {
    this.setState({ movieSelected: false });
  };

  render() {
    const { list, posterPath, movieSelected, movieId } = this.state;
    return (
      <Container>
        {movieSelected && (
          <MoviePage
            movie={movieId}
            mediaPath={posterPath}
            close={this.handleCloseModal}
          />
        )}

        {list.map((movie, key) => (
          <MovieWrapper
            key={key}
            data-id="hello there"
            onClick={this.handleChooseMovie}
          >
            <div className="click-area" data-id={movie.id} />
            <div className="img-wrapper">
              <img src={posterPath + movie.poster_path} alt="" />
            </div>
            <div className="description">
              <div className="description_top">
                <h3 className="description_top_title">{movie.title}</h3>

                <div className="description_top_overview">
                  <h4>Description</h4>
                  {movie.overview.length > 200
                    ? movie.overview.slice(0, 200) + ' ...'
                    : movie.overview}
                </div>
              </div>
              <div className="stats">
                <h5>{movie.release_date}</h5>

                <div className="stats_rating">
                  <IconStar className="icon-star" /> {movie.vote_average}
                  /10
                </div>
              </div>
            </div>
          </MovieWrapper>
        ))}
      </Container>
    );
  }
}

export default MovieList;
