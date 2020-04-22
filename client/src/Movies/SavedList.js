import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '98.css'

//Shows the list of saved movies
function SavedList({ list }) {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map(movie => {
        return (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            activeClassName="saved-active"
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        );
      })}
      <div className="home-button">
        <Link to="/"><button>Home</button></Link>
      </div>
    </div>
  );
}

export default SavedList;
