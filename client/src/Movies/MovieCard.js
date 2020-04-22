import React from 'react';
import '98.css'
import styled from 'styled-components'

const Window = styled.div`
  text-decoration: none;
`
const TitleBar = styled.div`
  h3 {
    margin: 1%;

  }

`

//The card for the movie itself, formatting the movie info
const MovieCard = props => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <Window className="movie-card window">
      <TitleBar className = "title-bar">
        <h3 className = "title-bar-text">{title}</h3>
      </TitleBar>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </Window>
  );
};

export default MovieCard;
