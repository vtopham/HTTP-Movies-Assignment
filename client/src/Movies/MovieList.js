import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import '98.css'

//Maps over the list of movies and produces moviecards
function MovieList({ movies }) {
  return (
    <>
      <Link to="/add-movie">
       <button>Add Movie</button>
      </Link>

      <div className="movie-list">
        {
          movies.map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          ))
        }
      </div>
    </>
  );
}

export default MovieList;
