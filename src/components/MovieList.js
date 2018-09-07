import React, { Component } from 'react';
import styled from 'styled-components';
import { IoMdStar as IconStar } from 'react-icons/io';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 400px;
  margin: 2rem;
  border: 1px solid #63dbe6;
  border-radius: 0.8%;
  overflow: hidden;
  background-color: hsl(0, 0%, 12%);
  cursor: pointer;

  .img-wrapper {
    width: 100%;
    height: 85%;
    position: relative;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .description {
    position: absolute;
    top: 0px;
    padding-top: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: #333;
  }

  .rating {
    display: flex;
    align-items: center;
  }

  .icon-star {
    font-size: 20px;
    color: yellow;
    margin-left: 4px;
  }

  .title {
    text-align: center;
    font-size: 0.9rem;
    margin: auto;
  }
`;

class MovieList extends Component {
  state = {
    list: [],
    posterPath: 'https://image.tmdb.org/t/p/w200'
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
    e.persist();
    console.log(e);
  };

  render() {
    const { list, posterPath } = this.state;
    return (
      <Container>
        {list.map((movie, key) => (
          <MovieWrapper
            key={key}
            data-id="hello there"
            onClick={this.handleChooseMovie}
          >
            <div className="img-wrapper">
              <img src={posterPath + movie.poster_path} alt="" />
              <div className="description">
                <h5>{movie.release_date}</h5>
                <div className="rating">
                  {movie.vote_average} <IconStar className="icon-star" />
                </div>
              </div>
            </div>

            <div className="title">
              <h3>{movie.title}</h3>
            </div>
          </MovieWrapper>
        ))}
      </Container>
    );
  }
}

export default MovieList;
